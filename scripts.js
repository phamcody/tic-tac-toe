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
            }

            else {
                e.target.textContent = friend.symbol;
                boardCheck(turn, e);
                turn = true;
            }

            cube.disabled = true;
            console.log(gameboard.board);
        })
    })}


    return {
        drawOnBoard,
    };
})();

game.drawOnBoard();


//







//

