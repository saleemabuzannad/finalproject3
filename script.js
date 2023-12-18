//Select Elements
let countspan = document.querySelector('.count span')
let flagimgDiv = document.querySelector('.flag-img')
let flagimg = document.querySelector('.flag-img img')
let flagOptions = document.querySelector('.flag-options ul')
let flaglis= document.querySelectorAll('.flag-options ul li')

let currentIndex = 0; 


function getQuestions() { 
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questions = JSON.parse(this.responseText);
            //Number Of Question Each New Game
                     let qCount = 5;
                     questionsNum(qCount)
          
        }
    }   
    myRequest.open("GET", "js/flag_questions.json",true);
    myRequest.send();
}
        
getQuestions();

function QuestionNum(num) {
countspan.innerHTML = num;


}

function addQuestionData(obj, count){
if(currentIndex < count) {
    flagimg.src= `img/${obj.img}`;
}

}