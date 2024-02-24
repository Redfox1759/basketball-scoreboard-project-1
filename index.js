let scoreELHome = document.getElementById("score-el-home");
let scoreELGuest = document.getElementById("score-el-guest");
let periodEl = document.getElementById("period-el")
let round = 0
let countHome = 0;
let countGuest = 0;


//home section score
function add1Home() {
    countHome = countHome + 1;
    scoreELHome.textContent = countHome;
}

function add2Home() {
    countHome = countHome + 2;
    scoreELHome.textContent = countHome;
}

function add3Home(){
    countHome = countHome + 3;
    scoreELHome.textContent = countHome;
}

//guest section score
function add1Guest(){
     countGuest = countGuest + 1;
    scoreELGuest.textContent = countGuest;
}

function add2Guest(){
    countGuest = countGuest + 2;
    scoreELGuest.textContent = countGuest;
}

function add3Guest(){
    countGuest = countGuest + 3;
    scoreELGuest.textContent = countGuest;
}

function reset(){
    countGuest = 0;
    scoreELGuest.textContent = 0;
    countHome = 0;
    scoreELHome.textContent = 0;
    round = 0; 
    periodEl.textContent = "PERIOD: " 
    scoreELGuest.style.color = "#F94F6D"
    scoreELHome.style.color = "#F94F6D"
}

function newPeriod(){
    round = round + 1
    periodEl.textContent += round + " - " ;
}

function leader(){
     if( scoreELHome.textContent > scoreELGuest.textContent ){
         scoreELHome.style.color = "green";
     } else {
         scoreELGuest.style.color = "green"
     }
 }