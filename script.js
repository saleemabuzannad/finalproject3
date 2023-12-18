//Select Elements
let countspan = document.querySelector('.count span')


function getQuestions() {
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questions = JSON.parse(this.responseText);
            //Number Of Question Each New Game
                     let qCount = 10;
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