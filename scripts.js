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
    let turn = true;
    let cubes = document.querySelectorAll('.cube');
    let xScore = 0;
    let oScore = 0;
    let message = document.querySelector('.message');
    let xMessage = document.querySelector('.xScore');
    let oMessage = document.querySelector('.oScore');
    let mode = document.getElementById('mode');
    let gameWin = false;

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
                gameWin = true;
            }
        else if (gameboard.board[1][0] === "X" &&
            gameboard.board[1][1] === "X" &&
            gameboard.board[1][2] === "X") {
                scorePoints("X");
                gameWin = true;
        }
        else if (gameboard.board[2][0] === "X" &&
            gameboard.board[2][1] === "X" &&
            gameboard.board[2][2] === "X") {
                scorePoints("X");
                gameWin = true;
            }
        else if (gameboard.board[0][0] === "X" &&
            gameboard.board[1][1] === "X" &&
            gameboard.board[2][2] === "X") {
                scorePoints("X");
                gameWin = true;
        }
        else if (gameboard.board[0][2] === "X" &&
            gameboard.board[1][1] === "X" &&
            gameboard.board[2][0] === "X") {
                scorePoints("X");
                gameWin = true;
            }
        else if (gameboard.board[0][0] === "X" &&
            gameboard.board[1][0] === "X" &&
            gameboard.board[2][0] === "X") {
                scorePoints("X");
                gameWin = true;
            }
        else if (gameboard.board[0][1] === "X" &&
            gameboard.board[1][1] === "X" &&
            gameboard.board[2][1] === "X") {
                scorePoints("X");
                gameWin = true;
            }
        else if (gameboard.board[0][2] === "X" &&
            gameboard.board[1][2] === "X" &&
            gameboard.board[2][2] === "X") {
                scorePoints("X");
                gameWin = true;
            }
        else if (gameboard.board[0][0] === "O" &&
            gameboard.board[0][1] === "O" &&
            gameboard.board[0][2] === "O") {
                scorePoints("O");
                gameWin = true;
            }
        else if (gameboard.board[1][0] === "O" &&
            gameboard.board[1][1] === "O" &&
            gameboard.board[1][2] === "O") {
                scorePoints("O");
                gameWin = true;
        }
        else if (gameboard.board[2][0] === "O" &&
            gameboard.board[2][1] === "O" &&
            gameboard.board[2][2] === "O") {
                scorePoints("O");
                gameWin = true;
            }
        else if (gameboard.board[0][0] === "O" &&
            gameboard.board[1][1] === "O" &&
            gameboard.board[2][2] === "O") {
                scorePoints("O");
                gameWin = true;
        }
        else if (gameboard.board[0][2] === "O" &&
            gameboard.board[1][1] === "O" &&
            gameboard.board[2][0] === "O") {
                scorePoints("O");
                gameWin = true;
            }
        else if (gameboard.board[0][0] === "O" &&
            gameboard.board[1][0] === "O" &&
            gameboard.board[2][0] === "O") {
                scorePoints("O");
                gameWin = true;
            }
        else if (gameboard.board[0][1] === "O" &&
            gameboard.board[1][1] === "O" &&
            gameboard.board[2][1] === "O") {
                scorePoints("O");
                gameWin = true;
            }
        else if (gameboard.board[0][2] === "O" &&
            gameboard.board[1][2] === "O" &&
            gameboard.board[2][2] === "O") {
                scorePoints("O");
                gameWin = true;
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
                gameWin = true;
        }
    }


    const restartButton = document.querySelector('.restart');
    restartButton.addEventListener('click', () => {
        restartGame();
        xScore = 0;
        oScore = 0;
        xMessage.textContent = "-";
        oMessage.textContent = "-";
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

    function aiDraw(choice) {
        let area = document.getElementById(choice);
        area.classList.add('oCube');
        area.disabled = true;
        area.textContent = friend.symbol;
        turn = true;
        checkWinCondition();
    }

    const aiPlay = () => {
        if (gameWin) {
            return
        }
        if (gameboard.board[0][0] !== "" &&
            gameboard.board[0][1] !== "" &&
            gameboard.board[0][2] !== "" &&
            gameboard.board[1][0] !== "" &&
            gameboard.board[1][1] !== "" &&
            gameboard.board[1][2] !== "" &&
            gameboard.board[2][0] !== "" &&
            gameboard.board[2][1] !== "" &&
            gameboard.board[2][2] !== ""
        ) {
            return;
        }

        // come back to later and turn this section of code
        // into a function
        else {
            let choice = Math.floor(Math.random() * 9)
            if (choice === 0) {
                if (gameboard.board[0][0] === "") {
                    gameboard.board[0][0] = friend.symbol;
                    aiDraw(choice+1)
                }
                else {
                    aiPlay();
                }
            }

            else if (choice === 1) {
                if (gameboard.board[0][1] === "") {
                    gameboard.board[0][1] = friend.symbol;
                    aiDraw(choice+1)
                }
                else {
                    aiPlay();
                }
            }

            else if (choice === 2) {
                if (gameboard.board[0][2] === "") {
                    gameboard.board[0][2] = friend.symbol;
                    aiDraw(choice+1)
                }
                else {
                    aiPlay();
                }
            }

            else if (choice === 3) {
                if (gameboard.board[1][0] === "") {
                    gameboard.board[1][0] = friend.symbol;
                    aiDraw(choice+1)
                }
                else {
                    aiPlay();
                }
            }

            else if (choice === 4) {
                if (gameboard.board[1][1] === "") {
                    gameboard.board[1][1] = friend.symbol;
                    aiDraw(choice+1)
                }
                else {
                    aiPlay();
                }
            }

            else if (choice === 5) {
                if (gameboard.board[1][2] === "") {
                    gameboard.board[1][2] = friend.symbol;
                    aiDraw(choice+1)
                }
                else {
                    aiPlay();
                }
            }

            else if (choice === 6) {
                if (gameboard.board[2][0] === "") {
                    gameboard.board[2][0] = friend.symbol;
                    aiDraw(choice+1)
                }
                else {
                    aiPlay();
                }
            }

            else if (choice === 7) {
                if (gameboard.board[2][1] === "") {
                    gameboard.board[2][1] = friend.symbol;
                    aiDraw(choice+1)
                }
                else {
                    aiPlay();
                }
            }

            else if (choice === 8) {
                if (gameboard.board[2][2] === "") {
                    gameboard.board[2][2] = friend.symbol;
                    aiDraw(choice+1)
                }
                else {
                    aiPlay();
                }
            }
        }
    }

    const play = () => {Array.from(cubes).forEach((cube) => {
        cube.addEventListener('click', (e) => {
            if (mode.options[mode.selectedIndex].text === "computer") {
                if (turn) {
                    gameWin = false;
                    e.target.textContent = user.symbol;
                    boardCheck(turn, e);
                    turn = false;
                    message.textContent = "O Turn";
                    e.target.classList.remove('oCube');
                    setTimeout(function() {
                        aiPlay();
                    }, 200)
                }
            }

            else {
                if (turn) {
                    e.target.textContent = user.symbol;
                    boardCheck(turn, e);
                    turn = false;
                    message.textContent = "O Turn";
                    e.target.classList.remove('oCube');
                }
                else {
                    e.target.textContent = friend.symbol;
                    boardCheck(turn, e);
                    turn = true;
                    message.textContent = "X Turn";
                    e.target.classList.add('oCube');
                }
            }

            cube.disabled = true;
            checkWinCondition();
        })

    })}


    return {
        play
    };
})();

game.play();


//







//

