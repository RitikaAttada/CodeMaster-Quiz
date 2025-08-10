const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'quiz_app_user',
    password: 'Quiz_App891016',
    database: 'quiz_app_database'
});
db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        process.exit(1);
    }
    console.log('✅ Connected to MySQL database');
});

// Signup route - hashes password before saving
app.post('/signup', async (req, res) => {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
        return res.status(400).json({ error: 'Missing fields' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        db.query(
            'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
            [email, username, hashedPassword],
            (err) => {
                if (err) {
                    if (err.code === 'ER_DUP_ENTRY') {
                        return res.status(409).json({ error: 'Email or username already exists' });
                    }
                    return res.status(500).json({ error: 'Database error' });
                }
                res.json({ success: true, message: 'Signup successful' });
            }
        );
    } catch (hashErr) {
        res.status(500).json({ error: 'Error hashing password' });
    }
});

// Login route - verifies hashed password
app.post('/login', (req, res) => {
    const { identifier, password } = req.body;
    if (!identifier || !password) {
        return res.status(400).json({ error: 'Missing identifier or password' });
    }
    db.query(
        'SELECT * FROM users WHERE email = ? OR username = ?',
        [identifier, identifier],
        async (err, results) => {
            if (err) return res.status(500).json({ error: 'Database error' });
            if (results.length === 0) return res.status(404).json({ error: 'User not found' });

            const user = results[0];
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                return res.status(401).json({ error: 'Invalid password' });
            }

            // Successful login
            res.json({ success: true, username: user.username, message: 'Login successful' });
        }
    );
});

// Helper to get user id by email or username
function getUserId(identifier) {
    return new Promise((resolve, reject) => {
        db.query(
            'SELECT id FROM users WHERE email = ? OR username = ?',
            [identifier, identifier],
            (err, results) => {
                if (err) reject(err);
                else if (results.length === 0) reject('User not found');
                else resolve(results[0].id);
            }
        );
    });
}

// Submit quiz result + update streak
app.post('/submit-quiz-result', async (req, res) => {
    const { identifier, subject, module, quiz_id, score, time_taken } = req.body;
    if (!identifier || !subject || !module || quiz_id === undefined || score === undefined || time_taken === undefined) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    let userId;
    try {
        userId = await getUserId(identifier);
    } catch (err) {
        return res.status(404).json({ error: err.toString() });
    }

    const today = new Date();
    const todayDateStr = today.toISOString().slice(0, 10);

    db.query(
        'INSERT INTO user_progress (user_id, subject, module, quiz_id, score, time_taken) VALUES (?, ?, ?, ?, ?, ?)',
        [userId, subject, module, quiz_id, score, time_taken],
        (err) => {
            if (err) {
                console.error('Failed to save quiz progress:', err);
                return res.status(500).json({ error: 'Failed to save quiz progress' });
            }

            // Update streak
            db.query(
                'SELECT * FROM user_streaks WHERE user_id = ?',
                [userId],
                (err2, results) => {
                    if (err2) {
                        console.error('Error fetching streak:', err2);
                        return res.status(500).json({ error: 'DB error fetching streak' });
                    }

                    if (results.length === 0) {
                        // No streak record, create new
                        db.query(
                            'INSERT INTO user_streaks (user_id, streak_count, last_quiz_date) VALUES (?, ?, ?)',
                            [userId, 1, todayDateStr],
                            (err3) => {
                                if (err3) {
                                    console.error('Failed to create streak:', err3);
                                    return res.status(500).json({ error: 'Failed to create streak' });
                                }
                                return res.json({ message: 'Quiz saved, streak started!' });
                            }
                        );
                    } else {
                        const streakRecord = results[0];
                        const lastDate = streakRecord.last_quiz_date.toISOString().slice(0, 10);
                        const last = new Date(lastDate);
                        const diffDays = Math.floor((today - last) / (1000 * 60 * 60 * 24));

                        let newStreakCount = 1;
                        if (diffDays === 1) {
                            newStreakCount = streakRecord.streak_count + 1;
                        } else if (diffDays === 0) {
                            newStreakCount = streakRecord.streak_count; // same day - no increment
                        } else {
                            newStreakCount = 1; // streak reset
                        }

                        db.query(
                            'UPDATE user_streaks SET streak_count = ?, last_quiz_date = ? WHERE user_id = ?',
                            [newStreakCount, todayDateStr, userId],
                            (err4) => {
                                if (err4) {
                                    console.error('Failed to update streak:', err4);
                                    return res.status(500).json({ error: 'Failed to update streak' });
                                }
                                return res.json({ message: 'Quiz saved, streak updated!' });
                            }
                        );
                    }
                }
            );
        }
    );
});

// (Optional) Add other routes as needed...

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
