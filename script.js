//Select Elements
let countspan = document.querySelector('.count span');
let flagimgDiv = document.querySelector('.flag-img');
let flagimg = document.querySelector('.flag-img img');
let flagOptions = document.querySelector('.flag-options ul');
let flaglis= document.querySelectorAll('.flag-options ul li');
let score = document.querySelector('h3 span');
let scoreDiv = document.querySelector('.score');
let correctAns = document.querySelector('.score .right span');
let incorrectAns = document.querySelector('.score .incorrect span');
let btnNewGame = document.querySelector('#newGame');



let currentIndex = 0;
let rightAnswer = 0;


function getQuestions() { 
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questions = JSON.parse(this.responseText);
            //Number Of Question Each New Game
                     let qCount = 5;
                     questionsNum(qCount)
          //Add Questions Data
          addQuestionData(questions[currentIndex],qCount)

          flagLis.forEach(li => {
            li.addEventListener('click', () => {
                let rightAnswer = questions[currentIndex].right_answer;
                li.classList.add('active');
                //Increase Index
                currentIndex++;

                 //Check The Answer after 500ms
                 setTimeout(() => {
                    checkAnswer(rightAnswer, qCount);
                }, 500);

                setTimeout(() => {
                    //Remove Previous Image Source
                    flagImg.src = '';
                    //Remove All Classes (active,success,wrong)
                    li.classList.remove('active');
                    li.classList.remove('success');
                    li.classList.remove('wrong');


                    //Add Questions Data To Show The Next Question
                    addQuestionData(questions[currentIndex], qCount);
                }, 1000);

        })
    })   

}
    }

    myRequest.open("GET", "/flag_questions.json",true);
    myRequest.send ();
}
        
getQuestions();

function QuestionNum(num) {
countspan.innerHTML = num;


}

function addQuestionData(obj, count) {
    if (currentIndex < count) {
        flagimg.src = `img/${obj.img}`;
        //Create Options
        flagLis.forEach((li, i) => {
            //Give each Li a dynamic Id
            li.id = `answer_${i+1}`;
            //Create for Each Li a dynamic data-attribut
            li.dataset.answer = obj[`options`][i];
            //Insert the Option in the li
            li.innerHTML = obj[`options`][i];
        });
    }
 }
 function checkAnswer(rAnswer, count) {
    let choosenAnswer;
    for (let i = 0; i < flagLis.length; i++) {
        if (flagLis[i].classList.contains('active')) {
            choosenAnswer = flagLis[i].dataset.answer;
            if (rAnswer === choosenAnswer) {
                flagLis[i].classList.add('success');
                rightAnswer++;
                score.innerHTML = rightAnswer;
            } else {
                flagLis[i].classList.add('wrong');
            }
        }
    }
 }
