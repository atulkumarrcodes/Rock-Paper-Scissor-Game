let h2 = document.querySelector("#headline");
let playerhand = document.querySelector("#player-hand");
let computerhand = document.querySelector("#computer-hand");
let score = document.querySelector("#score");
let stonebtn = document.querySelector("#stone");
let paperbtn = document.querySelector("#paper");
let scissorbtn = document.querySelector("#scissor");
let btncontainer = document.querySelector(".controls");
let options = ["stone" , "paper", "scissor"];
let playerscore = 0;
let computerscore = 0;



btncontainer.addEventListener("click" , (event)=>{
    if(event.target.tagName !== "BUTTON"){
        return
    }

    playerhand.textContent = "✊";
    computerhand.textContent = "✊";

    h2.innerText = "ROCK... PAPER... SCISSORS..."
    playerhand.classList.add("shake-player");
    computerhand.classList.add("shake-computer");

    let playerChoice = event.target.getAttribute("id");
    console.log(playerChoice);
    let random = Math.floor(Math.random()*3);
    let computerChoice = options[random];
    console.log(computerChoice);

    setTimeout(() => {
    playerhand.classList.remove("shake-player");
    computerhand.classList.remove("shake-computer");

    if ((playerChoice == "stone") && (computerChoice == "paper")) {
        computerscore++;
        h2.innerText = "COMPUTER WINS";
    } else if ((playerChoice == "paper") && (computerChoice == "scissor")) {
        computerscore++;
        h2.innerText = "COMPUTER WINS";
    } else if ((playerChoice == "scissor") && (computerChoice == "stone")) {
        computerscore++;
        h2.innerText = "COMPUTER WINS";
    } else if (computerChoice == playerChoice) {
        h2.innerText = "IT'S A TIE!";
    } else {
        playerscore++;
        h2.innerText = "YOU WON";
    }

   const emojis = { stone: "✊", paper: "✋", scissor: "✌️" };

   playerhand.textContent = emojis[playerChoice];
   computerhand.textContent = emojis[computerChoice];


    console.log("player ", playerscore);
    console.log("computer", computerscore);
    score.innerText = `${computerscore} / ${playerscore}`;
   }, 1500);


})