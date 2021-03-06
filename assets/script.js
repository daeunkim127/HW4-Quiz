var quizContent = document.getElementById('quizForm');
var submitBtn = document.getElementById('submitBtn');
var result = document.getElementById('result');
var currentQuestion = document.getElementById('question')
var choice1=document.getElementById('choice1');
var choice2=document.getElementById('choice2');
var choice3=document.getElementById('choice3')
var startBtn=document.getElementById('startBtn')
var timeLeft=document.getElementById('timer')
var nextBtn = document.getElementById('nextBtn')



var questionList = [
    {
        question: "What is state abbreviation for Massachusetts?",
        a: "MA",
        b: "MS",
        c: "MT",
        correctAnswer: "a"
    },
    {
        question: "What is state abbreviation for Hawaii?",
        a: "HW",
        b: "HI",
        c: "HA",
        correctAnswer: "b"
    },
    {
        question: "What is state abbreviation for Florida?",
        a: "FL",
        b: "FR",
        c: "FD",
        correctAnswer: "a"
    },
    {
        question: "What is state abbreviation for Georgia?",
        a: "GG",
        b: "GE",
        c: "GA",
        correctAnswer: "c"
    },
    {
        question: "What is state abbreviation for Arkansas?",
        a: "AR",
        b: "AK",
        c: "AS",
        correctAnswer: "a"
    },
    {
        question: "What is state abbreviation for Rhode Island?",
        a: "RI",
        b: "RD",
        c: "RH",
        correctAnswer: "a"
    },
    {
        question: "What is state abbreviation for Pennsylvania?",
        a: "PS",
        b: "PA",
        c: "PV",
        correctAnswer: "b"
    }
        
]

var scores =0;
var i=0;
var q = questionList[i];
var questionTime=30;

function quizGenerator() {
    console.log(scores)
    currentQuestion.innerHTML="<p>"+ q.question+"</p>";
    choice1.innerHTML= q.a;
    choice2.innerHTML= q.b;
    choice3.innerHTML= q.c;
};

function correct() {
    submitBtn.style.visibility='hidden';
    result.innerHTML="<p> Correct! </p>";
    result.classList.add('correct')
    scores++;

}

function incorrect() {
    submitBtn.style.visibility='hidden';
    result.innerHTML="<p> Wrong! </p>";
    result.classList.add('correct')

}



startBtn.addEventListener('click', function() {
    startBtn.style.visibility='hidden';
    quizGenerator();
    quizContent.style.visibility='visible'
    var timer=setInterval(function(){
        if(questionTime<0){
            clearInterval(timer);
            quizContent.style.display='none'
            var initial=window.prompt("Time's up! Your Score is"+scores+"/7. Enter Your Initial.")
            timeLeft.style.display='none'
        } else {
       timeLeft.innerHTML=questionTime+' seconds remaining';}
       questionTime -=1

    },1000)
})

submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    var checked = document.querySelector('input[name=choice]:checked');
    if ( q.correctAnswer==checked.value) {
        correct();
        nextBtn.style.visibility='visible';
    } else {
        questionTime -= 5;
        incorrect()
        nextBtn.style.visibility='visible'
    }
})

nextBtn.addEventListener('click',function(event){
    event.preventDefault();
    i++;
    q=questionList[i];
    nextBtn.style.visibility='hidden';
    submitBtn.style.visibility='visible';
    result.textContent='';

    if(i>=7) {
        clearInterval(timer);
        var initial= window.prompt('Finished! Your Score is '+scores+'/7. Enter Your Initial.');
        timeLeft.style.display='none'
    } else {
        quizGenerator()
    }

})