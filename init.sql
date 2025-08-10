create table users(
id int auto_increment primary key,
email varchar(255) unique not null,
username varchar(100) unique not null,
password varchar(255) not null,
created_at timestamp default current_timestamp
);
use quiz_app_database;
create table otp_verifications (
id int auto_increment primary key,
email varchar(255) not null,
otp varchar(10) not null,
expires_at datetime not null
);
CREATE TABLE quizzes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  subject VARCHAR(50),
  module VARCHAR(50),
  question TEXT,
  options JSON,
  answer VARCHAR(255)
);
CREATE TABLE user_progress (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  subject VARCHAR(50),
  module VARCHAR(50),
  quiz_id INT,
  score INT,
  time_taken INT, -- seconds
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE user_streaks (
  user_id INT PRIMARY KEY,
  streak_count INT DEFAULT 0,
  last_quiz_date DATE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE user_achievements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  achievement VARCHAR(100),
  date_earned TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);





