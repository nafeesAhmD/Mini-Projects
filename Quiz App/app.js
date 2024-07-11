const questions = [
    {
    question: 'which of the following is a markup language?',
    answers: [
        {text:'CSS', correct: false},
        {text:'HTML', correct: true},
        {text:'javaScript', correct: false},
        {text:'PHP', correct: false},
    ]  
 },
 { 
     question: 'what year was javaScript lunched?',
     answers: [
        {text:'1995', correct: true},
        {text:'1996', correct: false},
        {text:'1994', correct: false},
        {text:'none of the above', correct: false},
     ]
 },
 { 
     question: 'what does for css stand for?',
     answers: [
        {text:'Hypertext markup language', correct: false},
        {text:'Cascading style sheet', correct: true},
        {text:'javaScript', correct: false},
        {text:'jeson object notation', correct: false},
     ]
 },
 { 
     question: 'What is the full form of JS?',
     answers: [
        {text:'Javascript', correct: true},
        {text:'Jacasuper', correct: false},
        {text:'Justscript', correct: false},
        {text:'Jordenshoes', correct: false},
     ]
 }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!` ;
    nextButton.innerHTML = "Play Agian";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click', ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();