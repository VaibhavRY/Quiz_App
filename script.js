const questions = [
    {
        question: "What is full form of css ?",
        options: ["cascading style sheets", "coloring style sheets", "controlling style sheets", "cascading stylish sheets"],
        correctAnswer: "cascading style sheets"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Text Markup Leveler"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "How many keywords are recognized by standard ANSI C?",
        options: ["30", "34", "25", "32"],
        correctAnswer: "32"
    },
    {
        question: "Who amongst the following developed the C programming language?",
        options: ["James Gosling", "Bjarne Stroustrup", "Dennis Ritchie", "Ray Boyce"],
        correctAnswer: "Dennis Ritchie"
    },
    {
        question: "If x is an integer variable,which value will x=5/2 yield?",
        options: ["2.5", "2.00000", "2", "0"],
        correctAnswer: "2"
    },
    {
        question: "Which data structure is used for storing a collection of elements in a non-linear fashion?",
        options: ["Array", "Stack", "Queue", "Tree"],
        correctAnswer: "Tree"
    },
    {
        question: "Which programming language is used for developing iOS apps?",
        options: ["Java", "C#", "Python", "Swift"],
        correctAnswer: "Swift"
    },
    {
        question: "Which data structure is used for implementing a Last-In-First-Out (LIFO) behavior?",
        options: ["Queue", "Stack", "Tree", "Linked list"],
        correctAnswer: "Stack"
    },
    {
        question: "Which of the following is not a programming language?",
        options: ["HTML", "CSS", "Javascript", "MySQL"],
        correctAnswer: "MySQL"
    },
    {
        question: "Which of the following is not a data structure?",
        options: ["Queue", "Stack", "Function", "Linked list"],
        correctAnswer: "Function"
    }
    
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const currentQuestion = questions[currentQuestionIndex];

    questionText.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.setAttribute("data-answer", option);
        button.addEventListener("click", () => checkAnswer(button));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const selectedAnswer = selectedOption.getAttribute("data-answer");
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        selectedOption.classList.add("correct");
    } else {
        selectedOption.classList.add("wrong");
    }

    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.disabled = true;
    });

    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById("result").textContent = "";
        const options = document.querySelectorAll(".option");
        options.forEach(option => {
            option.disabled = false;
            option.classList.remove("correct", "wrong");
        });
        document.getElementById("next-button").style.display = "none";
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `<h1>Quiz Completed!</h1><p>Your Score: ${score}/${questions.length}</p>`;
}

loadQuestion();
