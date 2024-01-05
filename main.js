const squares = document.querySelectorAll('.square')
const restartBtn = document.querySelector('.restart-btn')
const statusText = document.querySelector('.status-text')

const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


let currentSquares = Array(9).fill('');

let currentPlayer = "X"

let running = false

initializeGame()

function initializeGame() {
    squares.forEach(square => square.addEventListener("click", squareClicked))
    restartBtn.addEventListener("click", restartGame)
    statusText.textContent = `${currentPlayer}'s turn`
    running = true
}

function squareClicked(){
    const squareIndex = this.getAttribute("squareIndex")
    if(currentSquares[squareIndex] != "" || !running){

        return
    }

    updateSquares(this, squareIndex)
    // changePlayer()
    checkWinner(squareIndex)

}

function updateSquares(square , index){
    currentSquares[index] = currentPlayer
    square.textContent = currentPlayer


}

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`
}

function checkWinner(){
    
    for(let i = 0; i < winCondition.length; i++) {
        [a,b,c] =  currentSquares[winCondition[i]];

        if (
          currentSquares[a] == "" ||
          currentSquares[b] == "" ||
          currentSquares[a] == ""
        )
        {
            continue;
        }
        if(currentSquare[a] == currentSquare[b] && currentSquare[b] == currentSquare[c])
    }
    
}

function restartGame(){

}