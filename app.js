let userScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll('.Rock, .Paper, .Scissors');
let message = document.querySelector('.message');
let uerScoreParagraph = document.querySelector('.userScore-p1');
let computerScoreParagraph = document.querySelector('.computerScore-p1');

let drawGame = (userChoice, computerChoice) => {
    message.innerText = `Game was draw. Play again. Your choice (${userChoice}) is equal to computer choice (${computerChoice})`;
    message.style.backgroundColor = 'white';
    message.style.color = 'black';
};

let messageWin = (userWin, userChoice, computerChoice) => {
    if (userWin){
        message.innerText = `You are win. Your choice (${userChoice}) beats computer choice (${computerChoice})`;
        message.style.backgroundColor = 'green';
        userScore++;
        uerScoreParagraph.innerText = userScore;
    }
    else{
        message.innerText = `You are lose. computer choice (${computerChoice}) beats your choice (${userChoice})`;
        message.style.backgroundColor = 'red';
        computerScore++;
        computerScoreParagraph.innerText = computerScore;
    }
};

let computerPlayGame = () => {
    let options = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * 3);
    return options[index];
};

let playGame = (userChoice) => {
   let computerChoice = computerPlayGame();
   if (userChoice === computerChoice){
       drawGame(userChoice, computerChoice); 
   } else {
    let userWin = true;
    if(userChoice === 'Rock'){
        userWin = computerChoice === 'Paper' ? false : true;
    } else if (userChoice === 'Paper'){
        userWin = computerChoice === 'Scissors' ? false : true; 
    } else {
        userWin = computerChoice === 'Rock' ? false : true;
    }
    messageWin(userWin, userChoice, computerChoice);
   };
};


choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('class');
        playGame(userChoice);
    }); 
});

    
