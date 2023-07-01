const gameboard = (() => {
    const board = [['', '', ''], ['', '', ''], ['', '', '']];
    return {
        board
    };
})();

const playerFactory = (symbol) => {
    symbol;
    return {
        symbol
    }
}

const game = (() => {
    let user = playerFactory('X');
    let friend = playerFactory('O');
    let computer = playerFactory('O');
    let turn = true;
    let cubes = document.querySelectorAll('.cube');
    let xScore = 0;
    let oScore = 0;
    let message = document.querySelector('.message');
    let xMessage = document.querySelector('.xScore');
    let oMessage = document.querySelector('.oScore');

    const restartGame = () => {
        Array.from(cubes).forEach((cube) => {
            cube.textContent = '';
            gameboard.board = [['', '', ''], ['', '', ''], ['', '', '']];
            cube.disabled = false;
            turn = true;
            message.textContent = "Start game";
        }
    )}

    const scorePoints = (symbol) => {
        Array.from(cubes).forEach((cube) => {
            cube.disabled = true;
        })
        if (symbol === "X") {
            xScore++
            xMessage.textContent = xScore;
            message.textContent = "X WINS";
        }
        else if (symbol === "O") {
            oScore++
            oMessage.textContent = oScore;
            message.textContent = "O WINS"
        }
        else {
            message.textContent = "DRAW";
        }
        setTimeout(function() {
            restartGame();
        }, 2500)
    }

    const checkWinCondition = () => {
        if (gameboard.board[0][0] === "X" &&
            gameboard.board[0][1] === "X" &&
            gameboard.board[0][2] === "X") {
                scorePoints("X");
            }
        else if (gameboard.board[1][0] === "X" &&
            gameboard.board[1][1] === "X" &&
            gameboard.board[1][2] === "X") {
                scorePoints("X");
        }
        else if (gameboard.board[2][0] === "X" &&
            gameboard.board[2][1] === "X" &&
            gameboard.board[2][2] === "X") {
                scorePoints("X");
            }
        else if (gameboard.board[0][0] === "X" &&
            gameboard.board[1][1] === "X" &&
            gameboard.board[2][2] === "X") {
                scorePoints("X");
        }
        else if (gameboard.board[0][2] === "X" &&
            gameboard.board[1][1] === "X" &&
            gameboard.board[2][0] === "X") {
                scorePoints("X");
            }
        else if (gameboard.board[0][0] === "X" &&
            gameboard.board[1][0] === "X" &&
            gameboard.board[2][0] === "X") {
                scorePoints("X");
            }
        else if (gameboard.board[0][1] === "X" &&
            gameboard.board[1][1] === "X" &&
            gameboard.board[2][1] === "X") {
                scorePoints("X");
            }
        else if (gameboard.board[0][2] === "X" &&
            gameboard.board[1][2] === "X" &&
            gameboard.board[2][2] === "X") {
                scorePoints("X");
            }
        else if (gameboard.board[0][0] === "O" &&
            gameboard.board[0][1] === "O" &&
            gameboard.board[0][2] === "O") {
                scorePoints("O");
            }
        else if (gameboard.board[1][0] === "O" &&
            gameboard.board[1][1] === "O" &&
            gameboard.board[1][2] === "O") {
                scorePoints("O");
        }
        else if (gameboard.board[2][0] === "O" &&
            gameboard.board[2][1] === "O" &&
            gameboard.board[2][2] === "O") {
                scorePoints("O");
            }
        else if (gameboard.board[0][0] === "O" &&
            gameboard.board[1][1] === "O" &&
            gameboard.board[2][2] === "O") {
                scorePoints("O");
        }
        else if (gameboard.board[0][2] === "O" &&
            gameboard.board[1][1] === "O" &&
            gameboard.board[2][0] === "O") {
                scorePoints("O");
            }
        else if (gameboard.board[0][0] === "O" &&
            gameboard.board[1][0] === "O" &&
            gameboard.board[2][0] === "O") {
                scorePoints("O");
            }
        else if (gameboard.board[0][1] === "O" &&
            gameboard.board[1][1] === "O" &&
            gameboard.board[2][1] === "O") {
                scorePoints("O");
            }
        else if (gameboard.board[0][2] === "O" &&
            gameboard.board[1][2] === "O" &&
            gameboard.board[2][2] === "O") {
                scorePoints("O");
            }
        else if (gameboard.board[0][0] !== "" &&
            gameboard.board[0][1] !== "" &&
            gameboard.board[0][2] !== "" &&
            gameboard.board[1][0] !== "" &&
            gameboard.board[1][1] !== "" &&
            gameboard.board[1][2] !== "" &&
            gameboard.board[2][0] !== "" &&
            gameboard.board[2][1] !== "" &&
            gameboard.board[2][2] !== "") {
                scorePoints('DRAW');
        }
    }


    const restartButton = document.querySelector('.restart');
    restartButton.addEventListener('click', () => {
        restartGame();
        xScore = 0;
        oScore = 0;
        xMessage.textContent = xScore;
        oMessage.textContent = oScore;
    })

    

    const boardCheck = (turn, e) => {
        if (e.target.id <= 3) {
            if (turn) {
                gameboard.board[0][e.target.id-1] = user.symbol;
            }
            else {
                gameboard.board[0][e.target.id-1] = friend.symbol;
            }
        }
        else if (e.target.id <= 6) {
            if (turn) {
                gameboard.board[1][e.target.id-4] = user.symbol;
            }
            else {
                gameboard.board[1][e.target.id-4] = friend.symbol;
            }
        }
        else {
            if (turn) {
                gameboard.board[2][e.target.id-7] = user.symbol;
            }
            else {
                gameboard.board[2][e.target.id-7] = friend.symbol;
            }

        }
    }

    const drawOnBoard = () => {Array.from(cubes).forEach((cube) => {
        cube.addEventListener('click', (e) => {
            if (turn) {
                e.target.textContent = user.symbol;
                boardCheck(turn, e);
                turn = false;
                message.textContent = "O Turn";
            }

            else {
                e.target.textContent = friend.symbol;
                boardCheck(turn, e);
                turn = true;
                message.textContent = "X Turn";
            }

            cube.disabled = true;
            checkWinCondition();
        })

    })}


    return {
        drawOnBoard,
        restartGame
    };
})();

game.drawOnBoard();


//







//

