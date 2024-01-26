
function fetchQuestion() {
    if (currentQuestionIndex < totalQuestions) {
        fetch(`/get_question/${currentQuestionIndex + 1}`)
            .then(response => response.json())
            .then(data => {
                displayQuestion(data);
                currentQuestionIndex++;
                updateProgress(currentQuestionIndex, totalQuestions);
            });
    } else {
        endTest();
    }
}

function displayQuestion(data) {
    document.getElementById('question').innerText = data.equation;
    let optionsHtml = data.options.map(option => 
        `<button class="option" onclick="selectOption('${option.toFixed(2)}', ${data.answer.toFixed(2)})">${option.toFixed(2)}</button>`
        ).join('');
    document.getElementById('options').innerHTML = optionsHtml;
}

function selectOption(selectedOption, correctAnswer) {
    if (selectedOption == correctAnswer) {
        correctAnswersCount++;
    }
    fetchQuestion();
}

function endTest() {
    clearInterval(timerInterval); // Clear the timer when the test ends
    document.getElementById('timer').innerText = "Time's Up!";

    document.getElementById('question').innerText = "Test Completed";
    document.getElementById('options').innerHTML = '';

    // Show the dashboard
    buildDashboard();
}

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    let intervalId = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        let percentage = (timer / duration) * 100;
        updateTimerBar(percentage);  // Update the visual timer bar

        if (--timer < 0) {
            clearInterval(intervalId); // Clear the interval to stop the timer
            endTest();
        }
    }, 1000);
    return intervalId; // Return the interval ID so it can be cleared later
}

function updateProgress(current) {
    document.getElementById('progress').innerText = `Question ${current} of ${totalQuestions}`;
}

// Function to update the timer bar
function updateTimerBar(percentage) {
    document.getElementById('time-left-bar').style.width = percentage + '%';
}

// Function to build the dashboard
function buildDashboard() {
    // Hide question and options
    document.getElementById('question').style.display = 'none';
    document.getElementById('options').style.display = 'none';

    // Show dashboard
    var dashboard = document.getElementById('dashboard');
    dashboard.style.display = 'block';

    // Add content to dashboard (example)
    dashboard.innerHTML = '<h2>Test Results</h2>';
    dashboard.innerHTML += `Correct Answers: ${correctAnswersCount}<br>`;
    dashboard.innerHTML += `Incorrect Answers: ${totalQuestions - correctAnswersCount}<br>`;
    // Add more stats here...

    // Display all questions and selected answers
    questions.forEach((question, index) => {
        dashboard.innerHTML += `<div>Question ${index + 1}: ${question.equation}</div>`;
        dashboard.innerHTML += `<div>Your Answer: ${answers[index]}</div>`;
        dashboard.innerHTML += `<div>Correct Answer: ${question.answer}</div>`;
        // Add more question details here...
    });
}

// Global variables
let currentQuestionIndex = 0;
let totalQuestions = 0; // This will be set when fetching questions
let correctAnswersCount = 0;


// Start the timer
let eightMinutes = 60 * 8;
let display = document.querySelector('#timer');

let timerInterval = startTimer(eightMinutes, display); // Start the timer and store the interval ID

// Initialize the test
window.onload = function () {
    fetch('/get_total_num_of_questions') // Get the total number of questions
        .then(response => response.json())
        .then(data => {
            totalQuestions = data.total;
            fetchQuestion();
        });
};
