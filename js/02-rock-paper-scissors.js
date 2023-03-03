let userChoice = prompt('Please, choose between rock, paper, scissors.');


let computerChoice = Math.floor(Math.random() * 3 +1);


switch (computerChoice) {
    case 1:
        computerChoice = 'rock'
        break
    case 2:
        computerChoice = 'paper'
        break
    case 3:
        computerChoice = 'scissor'
        break
    default:
        break;
}

if(userChoice == 'rock' && computerChoice == 'paper') {
    alert('The computer chose PAPER, you chose ROCK. You loose. Try again');

} else if(userChoice == 'rock' && computerChoice == 'scissors') {
    alert('The computer chose SCISSORS, you chose ROCK. You win!');

} else if(userChoice == 'rock' && computerChoice == 'rock') {
    alert('The computer chose ROCK, you chose ROCK.It is a tie! Try again.');

} else if(userChoice == 'paper' && computerChoice == 'paper') {
    alert('The computer chose PAPER, you chose PAPER.. It is a tie! Try again.');

} else if(userChoice == 'paper' && computerChoice == 'rock') {
    alert('The computer chose ROCK, you chose PAPER.You won!');

}else if(userChoice == 'paper' && computerChoice == 'scissors') {
    alert('The computer chose SCISSORS, you chose PAPER.You lost Try again.');

}else if(userChoice == 'scissors' && computerChoice == 'scissors') {
    alert('The computer chose SCISSORS, you chose SCISSORS.It is a tie! Try again.');

} else if(userChoice == 'scissors' && computerChoice == 'paper') {
    alert('The computer chose PAPER, you chose SCISSORS.You won!');

}else if(userChoice == 'scissors' && computerChoice == 'rock') {
    alert('The computer chose ROCK, you chose SCISSORS.You lost Try again.');

} else {
    alert('You entered something different than rock, paper, scissors. Try again.');
}




