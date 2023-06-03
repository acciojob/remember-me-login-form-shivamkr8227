document.addEventListener('DOMContentLoaded', function() {
  // Check if there are saved login details in local storage
  if (localStorage.getItem('username') && localStorage.getItem('password')) {
    const existingUserBtn = document.createElement('button');
    existingUserBtn.id = 'existing';
    existingUserBtn.innerText = 'Login as existing user';
    document.body.appendChild(existingUserBtn);

    existingUserBtn.addEventListener('click', function() {
      const savedUsername = localStorage.getItem('username');
      alert('Logged in as ' + savedUsername);
    });
  }

  const loginForm = document.getElementById('loginForm');
  const rememberCheckbox = document.getElementById('checkbox');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if (rememberCheckbox.checked) {
      const username = usernameInput.value;
      const password = passwordInput.value;

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert('Logged in as ' + usernameInput.value);
  });
});

// Quiz questions
const questions = [
  // ...existing questions
];

// Retrieve user progress from session storage
let userAnswers = sessionStorage.getItem("progress");
if (userAnswers) {
  userAnswers = JSON.parse(userAnswers);
} else {
  userAnswers = [];
}

// Display the quiz questions and choices
const questionsElement = document.getElementById("questions");

function renderQuestions() {
  // ...existing code to render questions
}
renderQuestions();

// Save user progress to session storage when an option is selected
questionsElement.addEventListener("change", function (event) {
  // ...existing code to save user answers
});

// Submit the quiz and calculate the score
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");

submitButton.addEventListener("click", function () {
  const correctAnswers = questions.map((question) => question.answer);
  let score = 0;
  for (let i = 0; i < correctAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      score++;
    }
  }
  scoreElement.textContent = `Your score is ${score} out of ${questions.length}.`;
  localStorage.setItem("score", score);

  const checkbox = document.getElementById("checkbox");
  if (checkbox.checked) {
    localStorage.setItem("username", userAnswers.join(""));
  } else {
    localStorage.removeItem("username");
  }

  alert(`Logged in as ${localStorage.getItem("username")}`);
});

// Check if there are saved details and show the "Login as existing user" button
const existingButton = document.createElement("button");
existingButton.id = "existing";
existingButton.textContent = "Login as existing user";
existingButton.style.display = "none";

if (localStorage.getItem("username")) {
  existingButton.style.display = "block";
}

existingButton.addEventListener("click", function () {
  alert(`Logged in as ${localStorage.getItem("username")}`);
});

// Append the "Login as existing user" button to the body
document.body.appendChild(existingButton);
