const statusBattle = document.getElementById('statusBattle');
const buttons = document.querySelectorAll('.btnGame');
const buttonsContainer = document.querySelector('.buttonsContainer');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const roundNow = document.getElementById('roundNow');
const resetBtn = document.getElementById('resetBtn');
let gamerWin = 0;
let computerWin = 0;
let roundGame = 1;

inputGame()


function inputGame(){
    buttons.forEach(e => e.addEventListener("click", clickBtn));
    resetBtn.addEventListener('click',reset);
}

function clickBtn(){
    if (roundGame > 4) {
        gameOver();
    }
    const btnId = this.getAttribute('btnId');
    let choiceComputer = Math.floor(Math.random()*3+1);
    console.log(choiceComputer);

    choiceComputer = (choiceComputer == 1) ? "R" : (choiceComputer == 2) ? "P" : "S";
    
    whoWin(btnId, choiceComputer);
}

function whoWin(gamer,computer){
    console.log(roundGame);
    roundNow.textContent = `Round: ${roundGame} of 5`;
    roundGame++;
    if ((gamer == "R" && computer == "R") || (gamer == "P" && computer == "P") || (gamer == "S" && computer == "S")) {
        statusBattle.textContent = "It's a draw!";
    }else if((gamer == "R" && computer == "S") || (gamer == "P" && computer == "R") || (gamer == "S" && computer == "P")){
        gamerWin++;
        playerScore.textContent = `Player score: ${gamerWin}`;
        statusBattle.textContent = "You win!";
    }else{
        statusBattle.textContent = "Computer win!";
        computerWin++;
        computerScore.textContent = `Computer score: ${computerWin}`;
    }
}

function gameOver(){
    buttonsContainer.setAttribute("style","display:none;");
    resetBtn.removeAttribute("style");
    statusBattle.textContent = "Game over!";
}

function reset(){
    buttonsContainer.removeAttribute("style");
    resetBtn.setAttribute("style","display:none;");
    gamerWin = 0;
    computerWin = 0;
    roundGame = 1;
    playerScore.textContent = `Player score: ${gamerWin}`;
    computerScore.textContent = `Computer score: ${computerWin}`;
    roundNow.textContent = `Round: ${roundGame} of 5`;
    statusBattle.textContent = "Chooes your weapor!";
}