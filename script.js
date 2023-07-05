// STUDENT:     Pam Kitsuwan
// ASSIGNMENT:  Checkers
// DATE:        5 July 2023

class Piece
{
    // Initialize the row and column of a checker piece
    constructor(row, column)
    {
        this.row = row;
        this.column = column;
    }

    // Return true if two pieces occupy the same position
    compare(piece)
    {
        return (piece.row == this.row) && (piece.column == this.column);
    }
}

// Call this div when the game is over
const modal = document.getElementById("easyModal")
// Call this div to display the board
const game = document.getElementById("game");
// White player goes first
let currentPlayer = 1;
// Array of possible positions
let posNewPosition = [];
// Array of captured positions
let capturedPosition = [];
// 0 = unoccupied, -1 = black occupied, 1 = white occupied
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

// Run the game
buildBoard();