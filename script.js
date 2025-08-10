// const quizData = {
//   html: [
//     { question: "What does HTML stand for?", options: ["High Text Machine Language", "HyperText Markup Language", "HyperTabular Markup Language", "None"], answer: "HyperText Markup Language" },
//     { question: "Which tag is used to insert an image?", options: ["<pic>", "<image>", "<img>", "<src>"], answer: "<img>" },
//     { question: "Which tag is used to define a paragraph?", options: ["<p>", "<para>", "<text>", "<paragraph>"], answer: "<p>" },
//     { question: "Which tag creates a link?", options: ["<a>", "<link>", "<href>", "<url>"], answer: "<a>" },
//     { question: "HTML files have extension?", options: [".ht", ".html", ".xml", ".js"], answer: ".html" },
//     { question: "Which tag makes text bold?", options: ["<b>", "<strong>", "Both", "None"], answer: "Both" },
//     { question: "What is the correct DOCTYPE for HTML5?", options: ["<!HTML>", "<!doctype html>", "<doctype html>", "<html5>"], answer: "<!doctype html>" },
//     { question: "How to add a comment in HTML?", options: ["# comment", "// comment", "<!-- comment -->", "/* comment */"], answer: "<!-- comment -->" }
//   ],
//   css: [
//     { question: "Which property changes text color?", options: ["font-color", "text-color", "color", "bg-color"], answer: "color" },
//     { question: "CSS stands for?", options: ["Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
//     { question: "Which property sets background color?", options: ["background", "bgcolor", "bg-color", "background-color"], answer: "background-color" },
//     { question: "How to center a div using Flexbox?", options: ["justify-content: center;", "align-items: center;", "both", "none"], answer: "both" },
//     { question: "Which property sets font size?", options: ["font-weight", "font-size", "text-style", "size"], answer: "font-size" },
//     { question: "What selector selects all elements?", options: ["", "#", ".", "!"], answer: "" },
//     { question: "Which one is an ID selector?", options: [".box", "*", "#header", "div"], answer: "#header" },
//     { question: "Which unit is relative?", options: ["px", "cm", "em", "mm"], answer: "em" }
//   ],
//   js: [
//     { question: "How to write a comment in JS?", options: ["//", "#", "<!-- -->", "/*"], answer: "//" },
//     { question: "Which method logs to console?", options: ["print()", "console.log()", "log()", "write()"], answer: "console.log()" },
//     { question: "How to declare a variable?", options: ["var", "let", "const", "All of these"], answer: "All of these" },
//     { question: "Which operator is for strict equality?", options: ["==", "===", "=", "!"], answer: "===" },
//     { question: "typeof 42 returns?", options: ["number", "string", "object", "int"], answer: "number" },
//     { question: "What is DOM?", options: ["Data Object Model", "Document Object Model", "Design Object Map", "None"], answer: "Document Object Model" },
//     { question: "Which function parses JSON?", options: ["JSON.convert()", "JSON.parse()", "JSON.toObj()", "parse.JSON()"], answer: "JSON.parse()" },
//     { question: "Which loop is not in JS?", options: ["for", "foreach", "while", "loop"], answer: "loop" }
//   ],
//   c: [
//     { question: "C is a ______ language.", options: ["high-level", "low-level", "middle-level", "markup"], answer: "middle-level" },
//     { question: "Who developed C?", options: ["Bjarne Stroustrup", "James Gosling", "Dennis Ritchie", "Guido Rossum"], answer: "Dennis Ritchie" },
//     { question: "C uses which file extension?", options: [".cpp", ".c", ".java", ".py"], answer: ".c" },
//     { question: "Which header file for printf?", options: ["stdlib.h", "stdio.h", "string.h", "math.h"], answer: "stdio.h" },
//     { question: "What is the output of 5/2?", options: ["2.5", "2", "2.0", "error"], answer: "2" },
//     { question: "Which loop is used for iteration?", options: ["if", "while", "goto", "return"], answer: "while" },
//     { question: "Which symbol is used to include header?", options: ["< > ", "{ }", "[ ]", "( )"], answer: "< >" },
//     { question: "What is the default return type in C?", options: ["int", "void", "float", "char"], answer: "int" }
//   ],
//   java: [
//     { question: "Java is _______", options: ["compiled", "interpreted", "both", "none"], answer: "both" },
//     { question: "Java was developed by?", options: ["Microsoft", "Apple", "Sun Microsystems", "Google"], answer: "Sun Microsystems" },
//     { question: "Which keyword defines class?", options: ["def", "class", "struct", "public"], answer: "class" },
//     { question: "Java file extension is?", options: [".java", ".class", ".jv", ".jav"], answer: ".java" },
//     { question: "What is JVM?", options: ["Java Virtual Machine", "Java Variable Method", "Java Vendor Model", "None"], answer: "Java Virtual Machine" },
//     { question: "Which method is entry point?", options: ["start()", "run()", "main()", "execute()"], answer: "main()" },
//     { question: "Inheritance is done using?", options: ["extends", "inherits", "parent", "base"], answer: "extends" },
//     { question: "Which access modifier is most restrictive?", options: ["public", "protected", "default", "private"], answer: "private" }
//   ],
//   python: [
//     { question: "Python was created by?", options: ["Dennis Ritchie", "James Gosling", "Guido van Rossum", "Mark Zuckerberg"], answer: "Guido van Rossum" },
//     { question: "Which symbol for comments?", options: ["//", "#", "--", "<!--"], answer: "#" },
//     { question: "What is the extension of Python file?", options: [".py", ".pt", ".java", ".p"], answer: ".py" },
//     { question: "Which keyword is used for function?", options: ["func", "define", "def", "function"], answer: "def" },
//     { question: "How to print in Python?", options: ["console.log()", "echo()", "cout", "print()"], answer: "print()" },
//     { question: "Which datatype is mutable?", options: ["tuple", "int", "list", "str"], answer: "list" },
//     { question: "What is the output of 2**3?", options: ["5", "6", "8", "9"], answer: "8" },
//     { question: "What is indentation in Python?", options: ["Brackets", "Spaces", "Quotes", "Tabs"], answer: "Spaces" }
//   ]
// };

// let currentSubject = "";
// let currentQuestion = 0;
// let score = 0;

// function startQuiz() {
//   currentSubject = document.getElementById("subject").value;
//   currentQuestion = 0;
//   score = 0;
//   document.getElementById("subject-select").classList.add("hide");
//   document.getElementById("quiz-container").classList.remove("hide");
//   showQuestion();
// }

// function showQuestion() {
//   const quiz = quizData[currentSubject];
//   const q = quiz[currentQuestion];
//   document.getElementById("question").textContent = q.question;
//   const optionsDiv = document.getElementById("options");
//   optionsDiv.innerHTML = "";

//   q.options.forEach(option => {
//     const btn = document.createElement("button");
//     btn.textContent = option;
//     btn.onclick = () => {
//       if (option === q.answer) {
//         score++;
//       }
//       nextQuestion();
//     };
//     optionsDiv.appendChild(btn);
//   });
// }

// function nextQuestion() {
//   currentQuestion++;
//   if (currentQuestion < quizData[currentSubject].length) {
//     showQuestion();
//   } else {
//     showResult();
//   }
// }

// function showResult() {
//   document.getElementById("quiz-container").classList.add("hide");
//   document.getElementById("result").classList.remove("hide");
//   document.getElementById("score").textContent = `🎉 You scored ${score} out of ${quizData[currentSubject].length}`;
// }
const quizData = {
  html: [
    { question: "What does HTML stand for?", options: ["High Text Machine Language", "HyperText Markup Language", "HyperTabular Markup Language", "None"], answer: "HyperText Markup Language" },
    { question: "Which tag is used to insert an image?", options: ["<pic>", "<image>", "<img>", "<src>"], answer: "<img>" },
    { question: "Which tag is used to define a paragraph?", options: ["<p>", "<para>", "<text>", "<paragraph>"], answer: "<p>" },
    { question: "Which tag creates a link?", options: ["<a>", "<link>", "<href>", "<url>"], answer: "<a>" },
    { question: "HTML files have extension?", options: [".ht", ".html", ".xml", ".js"], answer: ".html" },
    { question: "Which tag makes text bold?", options: ["<b>", "<strong>", "Both", "None"], answer: "Both" },
    { question: "What is the correct DOCTYPE for HTML5?", options: ["<!HTML>", "<!doctype html>", "<doctype html>", "<html5>"], answer: "<!doctype html>" },
    { question: "How to add a comment in HTML?", options: ["# comment", "// comment", "<!-- comment -->", "/* comment */"], answer: "<!-- comment -->" }
  ],
  css: [
    { question: "Which property changes text color?", options: ["font-color", "text-color", "color", "bg-color"], answer: "color" },
    { question: "CSS stands for?", options: ["Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
    { question: "Which property sets background color?", options: ["background", "bgcolor", "bg-color", "background-color"], answer: "background-color" },
    { question: "How to center a div using Flexbox?", options: ["justify-content: center;", "align-items: center;", "both", "none"], answer: "both" },
    { question: "Which property sets font size?", options: ["font-weight", "font-size", "text-style", "size"], answer: "font-size" },
    { question: "What selector selects all elements?", options: ["", "#", ".", "!"], answer: "" },
    { question: "Which one is an ID selector?", options: [".box", "*", "#header", "div"], answer: "#header" },
    { question: "Which unit is relative?", options: ["px", "cm", "em", "mm"], answer: "em" }
  ],
  js: [
    { question: "How to write a comment in JS?", options: ["//", "#", "<!-- -->", "/*"], answer: "//" },
    { question: "Which method logs to console?", options: ["print()", "console.log()", "log()", "write()"], answer: "console.log()" },
    { question: "How to declare a variable?", options: ["var", "let", "const", "All of these"], answer: "All of these" },
    { question: "Which operator is for strict equality?", options: ["==", "===", "=", "!"], answer: "===" },
    { question: "typeof 42 returns?", options: ["number", "string", "object", "int"], answer: "number" },
    { question: "What is DOM?", options: ["Data Object Model", "Document Object Model", "Design Object Map", "None"], answer: "Document Object Model" },
    { question: "Which function parses JSON?", options: ["JSON.convert()", "JSON.parse()", "JSON.toObj()", "parse.JSON()"], answer: "JSON.parse()" },
    { question: "Which loop is not in JS?", options: ["for", "foreach", "while", "loop"], answer: "loop" }
  ],
   c: [
    { question: "C is a ______ language.", options: ["high-level", "low-level", "middle-level", "markup"], answer: "middle-level" },
    { question: "Who developed C?", options: ["Bjarne Stroustrup", "James Gosling", "Dennis Ritchie", "Guido Rossum"], answer: "Dennis Ritchie" },
    { question: "C uses which file extension?", options: [".cpp", ".c", ".java", ".py"], answer: ".c" },
    { question: "Which header file for printf?", options: ["stdlib.h", "stdio.h", "string.h", "math.h"], answer: "stdio.h" },
    { question: "What is the output of 5/2?", options: ["2.5", "2", "2.0", "error"], answer: "2" },
    { question: "Which loop is used for iteration?", options: ["if", "while", "goto", "return"], answer: "while" },
    { question: "Which symbol is used to include header?", options: ["< > ", "{ }", "[ ]", "( )"], answer: "< >" },
    { question: "What is the default return type in C?", options: ["int", "void", "float", "char"], answer: "int" }
  ],
  java: [
    { question: "Java is _______", options: ["compiled", "interpreted", "both", "none"], answer: "both" },
    { question: "Java was developed by?", options: ["Microsoft", "Apple", "Sun Microsystems", "Google"], answer: "Sun Microsystems" },
    { question: "Which keyword defines class?", options: ["def", "class", "struct", "public"], answer: "class" },
    { question: "Java file extension is?", options: [".java", ".class", ".jv", ".jav"], answer: ".java" },
    { question: "What is JVM?", options: ["Java Virtual Machine", "Java Variable Method", "Java Vendor Model", "None"], answer: "Java Virtual Machine" },
    { question: "Which method is entry point?", options: ["start()", "run()", "main()", "execute()"], answer: "main()" },
    { question: "Inheritance is done using?", options: ["extends", "inherits", "parent", "base"], answer: "extends" },
    { question: "Which access modifier is most restrictive?", options: ["public", "protected", "default", "private"], answer: "private" }
  ],
   python: [
    { question: "Python was created by?", options: ["Dennis Ritchie", "James Gosling", "Guido van Rossum", "Mark Zuckerberg"], answer: "Guido van Rossum" },
    { question: "Which symbol for comments?", options: ["//", "#", "--", "<!--"], answer: "#" },
    { question: "What is the extension of Python file?", options: [".py", ".pt", ".java", ".p"], answer: ".py" },
    { question: "Which keyword is used for function?", options: ["func", "define", "def", "function"], answer: "def" },
    { question: "How to print in Python?", options: ["console.log()", "echo()", "cout", "print()"], answer: "print()" },
    { question: "Which datatype is mutable?", options: ["tuple", "int", "list", "str"], answer: "list" },
    { question: "What is the output of 2**3?", options: ["5", "6", "8", "9"], answer: "8" },
    { question: "What is indentation in Python?", options: ["Brackets", "Spaces", "Quotes", "Tabs"], answer: "Spaces" }
  ]


};

let currentSubject = "";
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 180;

// Format seconds as MM:SS
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Start countdown timer for quiz
function startTimer() {
  timeLeft = 180;
  document.getElementById("timer").textContent = `Time Left: ${formatTime(timeLeft)}`;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `Time Left: ${formatTime(timeLeft)}`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      showResult();
    }
  }, 1000);
}

// Initialize quiz start
function startQuiz() {
  currentSubject = document.getElementById("subject").value;
  currentQuestion = 0;
  score = 0;

  document.getElementById("subject-select").classList.add("hide");
  document.getElementById("quiz-container").classList.remove("hide");
  document.getElementById("result").classList.add("hide");

  startTimer();
  showQuestion();
}

// Display current question and options
function showQuestion() {
  const quiz = quizData[currentSubject];
  if (!quiz) {
    alert("No quiz data available for selected subject.");
    return;
  }
  const q = quiz[currentQuestion];

  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option");
    btn.onclick = () => {
      if (option === q.answer) {
        score++;
      }
      nextQuestion();
    };
    optionsDiv.appendChild(btn);
  });
}

// Move to next question or end quiz
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData[currentSubject].length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Show final quiz result and update streak if user logged in
async function showResult() {
  clearInterval(timer);

  document.getElementById("quiz-container").classList.add("hide");
  document.getElementById("result").classList.remove("hide");

  document.getElementById("score").textContent = `🎉 You scored ${score} out of ${quizData[currentSubject].length}`;

  // Update user streak on server if logged in
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser && loggedInUser.id) {
    try {
      await updateUserStreak(loggedInUser.id);

      // Also submit quiz result to backend
      await submitQuizResult(loggedInUser.identifier || loggedInUser.email || loggedInUser.username, currentSubject, 'module1', 1, score, 180 - timeLeft);

    } catch (err) {
      console.error("Error updating streak or submitting quiz result:", err);
    }
  }
}

// Fetch streak count from server and update UI
async function fetchUserStreak(userId) {
  try {
    const res = await fetch(`${API_BASE}/get-streak/${userId}`);
    const data = await res.json();
    document.getElementById('user-streak').textContent = data.streak_count || 0;
  } catch (err) {
    console.error("Failed to fetch streak:", err);
  }
}

// Update streak on server and update UI
async function updateUserStreak(userId) {
  try {
    const res = await fetch(`${API_BASE}/update-streak`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId }),
    });
    const data = await res.json();
    document.getElementById('user-streak').textContent = data.streak_count || 0;
  } catch (err) {
    console.error("Failed to update streak:", err);
  }
}

// Submit quiz result to backend
async function submitQuizResult(identifier, subject, module, quiz_id, score, time_taken) {
  try {
    const res = await fetch(`${API_BASE}/submit-quiz-result`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        identifier,
        subject,
        module,
        quiz_id,
        score,
        time_taken
      }),
    });
    const data = await res.json();
    if (data.error) {
      console.error("Submit quiz result error:", data.error);
    }
  } catch (err) {
    console.error("Error submitting quiz result:", err);
  }
}

// On page load, show user email/username and streak if logged in
window.onload = function() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const userEmailSpan = document.getElementById("user-email");

  if (user && user.identifier) {
    userEmailSpan.textContent = user.username || user.identifier;
    if (user.id) {
      fetchUserStreak(user.id);
    }
  } else {
    userEmailSpan.textContent = "Guest";
    document.getElementById('user-streak').textContent = '0';
  }
};