/*
    Two types of pieces white and black
    Black always goes first
    Players alternate turns unless:
        If there are no legal moves the oppposing player places another piece

    A minimum of 1 piece must be captured on each turn
        Highlight the legal moves
    
    Capturing pieces can happen horizontally, vertically, or diagonally
    Capturing pieces is completed by having two pieces sandwich your opponents pieces
    Captured pieces become the capturing players color
    The game ends when there are no spaces left to fill or all of the tiles on the board are the same color
    If either of the game ending conditions are fulfilled the winner is determined by the player with the highest number of their color pieces on the board.

    2 Classes needed

    Player
        Black: boolean
        Active: boolean

    Board Tile
        isHighlighted: boolean
        id: string
        color: string = ""
        moveValidation: function {
            Checks whether this tile is a legal move for the current player
        }

*/
(function() {
    let body = document.getElementById("body");
    
    let blackPlayer = new Player(true);
    let whitePlayer = new Player(false);

    let board = [];

    body.onload = function() {
        document.getElementById("header").innerText = "Othello";
        createBoard();
    
        console.log("it works");
    }
    
    function Player(blackBool) {
        this.black = blackBool;
        this.active = blackBool;
    }

    function Tile(id) {
        this.isHighlighted = false;
        this.id = id;
        this.color = "";
        this.moveValidation = function() {};
    }

    function createBoard() {

        for (let i = 7; i >= 0; i--) {
            let row = [];
            let divRow = document.createElement("div");
            divRow.setAttribute("class", "row");
    
    
            for (let j = 0; j < 8; j++) {
            
                let tile = document.createElement("div");
                tile.setAttribute("class", "tile");
                tile.setAttribute("id", `${i}${j}`);

                tile.innerText = `${i}${j}`;

                divRow.appendChild(tile);

                let tileObj = new Tile(`${i}${j}`);
                row.push(tileObj)
            }
    
            board.push(row);
            document.getElementById("board").appendChild(divRow);
        }
    
        console.log(board);
    }

}())


