/* 

- User clicks on a move 
 [x]   - clicking the button activates an onclick event where the move is passed as parameter
 [x]      -- playerMove(move)  -> onClick="playerMove(rock)"
 [x]   - inside playerMove
 []       - bring up correct image for html display
 [x]       - set move to a const
 [x]       - call AiMove
 [x]   - inside Ai move
 [x]       - For now, create random move.
 [x]       - call setResult
 [x]   - inside setResult
 [x]       - create switch statement to calculate winner
 [x]       - set winner variable
 [x]       - increment corect score
 [x]       - call getResult
 [x]   - inside getResult
 [x]       - set player move, aiMove, winner as an object to variable
 [x]       - push object to array to Moves
 [x]       - set limit for amount of moves stored.
 [x]       - call logResult
 [x]   - inside LogResult
 [x]       - display results array in table
    

*/

let userMove,
    compMove,
    result,
    winner,
    round,
    setMove,
    movesLength;
let userScore = 0;
let compScore = 0;

let moves = [];

const reset = () => {

    userMove = null;
    compMove = null;
    result = "Please select your move!";
    winner = null;
    round = null;
    setMove = null;
    movesLength = null;
    userScore = 0;
    compScore = 0;
    moves = [];

    document.querySelector('.result').innerHTML = result;
    document.getElementById('user-score').innerHTML = userScore;
    document.getElementById('comp-score').innerHTML = compScore;

    console.log(moves);
}

const playerChoice = (move) => {
    userMove = move;

    compChoice();
};

const compChoice = () => {

    compMove = Math.floor(Math.random() * 3);

    switch (compMove) {
        case 0:
            compMove = "Rock"
            break;
        case 1:
            compMove = "Paper"
            break;
        case 2:
            compMove = "Scissors"
            break;
    }

    getResult();
};

const getResult = () => {

    switch (userMove + compMove) {
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            result = `You both selected ${userMove}. It's a Tie!`;
            winner = "Tie";
            break;
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            result = `${userMove} beats ${compMove}. You Win!`;
            winner = "Player";
            userScore++;
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            result = `${userMove} gets beaten by ${compMove}. You Lose!`;
            winner = "Computer";
            compScore++;
            break;
    }

    document.querySelector('.result').innerHTML = result;
    document.getElementById('user-score').innerHTML = userScore;
    document.getElementById('comp-score').innerHTML = compScore;

    setResult();
};

const setResult = () => {
    setMove = {
        playerMove: userMove,
        computerMove: compMove,
        winner: winner,
    };

    moves.push(setMove);

    if (moves.length > 5) {
        moves.shift();
    }

    movesLength = moves.length - 1;
    logResult();
}

const logResult = () => {
    for (let i = 0; i < moves.length; i++) {
        document.querySelector('.player' + i).innerHTML = moves[movesLength - i].playerMove;
        document.querySelector('.computer' + i).innerHTML = moves[movesLength - i].computerMove;
        document.querySelector('.result' + i).innerHTML = moves[movesLength - i].winner;
    }
}