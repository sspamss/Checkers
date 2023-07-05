// create class Piece
class Piece
{
    // create method constructor, parameter list includes row and column
    constructor(row, column)
    {
        // add attribute row to this class, set equal to the row parameter
        setAttribe("row", row);
        // add attribute column to this class, set equal to the column parameter
        setAttribe("column", column);
    }
 
    // create method compare, parameter list includes piece
    compare(piece)
    {
        // return the result of 
        // row attribute of piece object is equal to this class's row attribute AND
        // column attribute of piece object is equal to this class's column attribute
        return (piece.row == this.row) && (piece.column == this.column);
    }
}

// declare a constant modal, set equal to document, getElementById, passing "easyModal" as an argument
const modal = document.getElementById("easyModal");
// declare a variable game, set equal to document, getElementById, passing "game"
const game = document.getElementById("game");
// declare a variable currentPlayer, set equal to the value 1
let currentPlayer = 1;
// declare an empty array posNewPosition
let posNewPosition = [];
// declare an empty array capturedPosition
let capturedPosition = [];

// declare a 2-d array board, set equal to data set
//    row 0:  0, -1, 0, -1, 0, -1, 0, -1, 0, -1
//    row 1:  -1, 0, -1, 0, -1, 0, -1, 0, -1, 0
//    row 2:  0, -1, 0, -1, 0, -1, 0, -1, 0, -1
//    row 3:  -1, 0, -1, 0, -1, 0, -1, 0, -1, 0
//    row 4:  0, 0, 0, 0, 0, 0, 0, 0, 0, 0
//    row 5:  0, 0, 0, 0, 0, 0, 0, 0, 0, 0
//    row 6:  0, 1, 0, 1, 0, 1, 0, 1, 0, 1
//    row 7:  1, 0, 1, 0, 1, 0, 1, 0, 1, 0
//    row 8:  0, 1, 0, 1, 0, 1, 0, 1, 0, 1
//    row 9:  1, 0, 1, 0, 1, 0, 1, 0, 1, 0
let board = [
    [0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
    [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
    [0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
    [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
];

// call function buildBoard
buildBoard();