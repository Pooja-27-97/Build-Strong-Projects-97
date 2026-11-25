let gameSeq = [];
let userSeq = [];

let btnColor = ["red", "aqua", "orchid", "yellow"];

let gameStarted = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(gameStarted == false) {
        console.log("Game started");
        gameStarted = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function() {
        btn.classList.remove("gameFlash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },250);
} 

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random() * 3);
    let randColor = btnColor[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
}

function btnPress() {
    let btn = this;
    userFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) btn.addEventListener("click", btnPress);