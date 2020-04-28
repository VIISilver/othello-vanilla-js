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

    Adding click handlers to highlighted tiles.  Remove them at the moment any other tile is clicked.

    Move validation will be doing:
        Check for legal moves
        Set isHighlighted to true for all legal moves
        Add click handlers to highlighted tiles.
        
    Highlighted tile clicked
        Set isHighlighted to false for all tiles.
        Remove click handlers from all divs
        Logic for capturing pieces
        

*/
(function() {
    let body = document.getElementById("body");
    
    let currentPlayer = new CurrentPlayer("black");

    let board = [];

    body.onload = function() {
        document.getElementById("header").innerText = currentPlayer.color === "black" ? "Black player's turn" : "White player's turn";
        createBoard();
    }
    
    function CurrentPlayer(color) {
        this.color = color;
    }

    function Tile(id) {
        this.isHighlighted = false;
        this.id = id;
        this.color = "";
        this.moveValidation = function() {};
    }

    function checkForLegalMoves() {
        for (let y = board.length - 1; y >= 0; y--) {
            for (let x = 0; x < board[y].length; x++) {
                if (board[x][y].color === '') {
                    checkDirection(board[x][y], x, y);
                    
                }

            }
        }
    }

    function checkDirection(tile, x, y) {
        // Check if we are on the bottom row of the board

            // Check if the tile below is not the currentPlayer's color and that it is not an empty string

    }

    function createBoard() {

        for (let i = 7; i >= 0; i--) {
            let row = [];
            let divRow = document.createElement("div");
            divRow.setAttribute("class", "row");
    
    
            for (let j = 0; j < 8; j++) {
            
                let tile = document.createElement("div");
                tile.setAttribute("class", "tile");
                tile.setAttribute("id", `${j}${i}`);

                let piece = document.createElement("span");

                // TODO: Remove below
                tile.innerText = `${j}${i}`;

                tile.appendChild(piece);
                divRow.appendChild(tile);

                let tileObj = new Tile(`${j}${i}`);
                if (`${j}${i}` === "33" || `${j}${i}` === "44" || `${j}${i}` === "43" || `${j}${i}` === "34") {
                    addStartingPieces(tileObj, tile);
                }
                row.push(tileObj);
            }
    
            board.push(row);
            document.getElementById("board").appendChild(divRow);
        }
        checkForLegalMoves();
        console.log(board);
    }

    function addStartingPieces(tile, tileElement) {
        if (tile.id === "33" || tile.id === "44") {
            tile.color = "white";
            tileElement.setAttribute("class", "tile white");
        }
        else {
            tile.color = "black";
            tileElement.setAttribute("class", "tile black");
        }
    }

}())


