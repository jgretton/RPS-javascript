let userScore = 0;
let compScore = 0;
let round = 1;

const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const round_div = document.querySelector('.round > h1')



const letterConverter = letter => {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}
const getComputerChoice = () => {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};


const win = (user, computer) => {
    userScore++;

    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${letterConverter(user)} beats ${letterConverter(computer)}. You Win!`;
}

const lose = (user, computer) => {
    compScore++;

    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${letterConverter(user)} gets beaten by ${letterConverter(computer)}. You Lose!`;
}

const draw = (user, computer) => {
    result_div.innerHTML = `Both chose ${letterConverter(user)}. It's a draw!`;
}



const game = (userChoice) => {
    round++;
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }


}

const main = () => {
    rock_div.addEventListener('click', () => {
        game("r");
    });

    paper_div.addEventListener('click', () => {
        game("p");
    });

    scissors_div.addEventListener('click', () => {
        game("s");
    });

}

main();