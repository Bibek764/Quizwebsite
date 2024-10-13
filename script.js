const questions = [
    {
        question:"Lets start with the easy one hai ta, so tell me when is our anniversary?",
        answers:[
            {text: "Falgun", correct:false},
            {text: "Magh", correct:true},
            {text: "Poush", correct:false},
            {text: "Mangsir", correct:false},
        ]
    },
    {
        question:"What's the english month of our anniversary",
        answers:[
            {text: "March", correct:false},
            {text: "February", correct:true},
            {text: "June", correct:false},
            {text: "December", correct:false},
        ]
    },
    {
        question:"What's the date of our anniversary",
        answers:[
            {text: "24", correct:false},
            {text: "22", correct:false},
            {text: "26", correct:false},
            {text: "23", correct:true},
        ]
    },
    {
        question:"Lah easiest one hai ta, When is my birthday naanu ?",
        answers:[
            {text: "Bhadau 23", correct:false},
            {text: "Bhadau 25", correct:false},
            {text: "Bhadau 24", correct:true},
            {text: "Bhadau 26", correct:false},
        ]
    },
    {
        question:"What animal's meat do i like the most ?",
        answers:[
            {text: "Kukhraa", correct:false},
            {text: "khasii", correct:true},
            {text: "Pork", correct:false},
            {text: "Buff", correct:false},
        ]
    },
    {
        question:"In which semester am i studying right now ?",
        answers:[
            {text: "Sixth", correct:false},
            {text: "Fourth", correct:false},
            {text: "Fifth", correct:true},
            {text: "Seventh", correct:false},
        ]
    },
    {
        question:"Mero Gaau kata ho ?",
        answers:[
            {text: "Birgunj", correct:false},
            {text: "Gorkha", correct:true},
            {text: "Butwal", correct:false},
            {text: "Pokhara", correct:false},
        ]
    },
    {
        question:"Kailey samma saath dinxu jasto laagxa mailey hajur lai ?",
        answers:[
            {text: "5-6 barsha", correct:false},
            {text: "Kehi barsha", correct:false},
            {text: "10-15 barsha ", correct:false},
            {text: "Baachunjel", correct:true},
        ]
    },
    {
        question:"Among the options, what do you think is my dream?",
        answers:[
            {text: "Marry you", correct:false},
            {text: "Just be with you ", correct:false},
            {text: "Get rich", correct:false},
            {text: "Earn some money to pay the debt, then marry you and get rich and succesfull together", correct:true},
        ]
    },
    {
        question:"Which one of them is i am addicted to?",
        answers:[
            {text: "Addicted to Jaad, Raksi", correct:false},
            {text: "Addicted to Churott, Gaanja", correct:false},
            {text: "Addicted to Surtii, Bhola", correct:false},
            {text: "Addicted to my saaney ", correct:true},
        ]
    },
    {
        question:"Last one ali garo wala hai ta , How much do you think i love you?",
        answers:[
            {text: "Dheraii", correct:false},
            {text: "Ekdumai dheraii", correct:false},
            {text: "Sabai vanda dheraii ", correct:false},
            {text: "Ekdumaii sabai vanda dheraii nai dheraii nai dheraii nai dheraiiii ", correct:true},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
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
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}! saanaa❤️`;
    nextButton.innerHTML = "Click here to play again naanu";
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


nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
       handleNextButton(); 
    }else{
        startQuiz();
    }
})
startQuiz();
