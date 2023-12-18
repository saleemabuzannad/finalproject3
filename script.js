
let currentIndex = 0;
let rightAnswer = 0;

function getQuestions() {
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questions = JSON.parse(this.responseText);
            console.log(questions);
        }
    }   
    myRequest.open("GET", "js/flag_questions.json",true);
}
        
getQuestions()
