const squares = document.querySelectorAll('.square')
const restartBtn = document.querySelector('.restart-btn')
const statusText = document.querySelector('.status-text')

const winConditions = [
// Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
// Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
// Diagonals
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
   const squareIndex = this.getAttribute("squareIndex");
    if(currentSquares[squareIndex] != "" || !running){

        return
    }

    updateSquares(this, squareIndex)
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

// function checkWinner(){
//     let roundwon = false

    
//     for(let i = 0; i < winConditions.length; i++) {
//         const condition = winConditions[i]
//         const squareA = currentSquares[condition[0]];
//         const squareB = currentSquares[condition[1]];
//         const squareC = currentSquares[condition[2]];
//         if (squareA == "" || squareB == "" || squareC == "")
//         {
//             continue;
//         }
//         if(squareA == squareB && squareB == squareC){
            
//             roundwon = true
//             break
//         }
//     }
//     // console.log(currentPlayer)

//     if(roundwon){

//         statusText.textContent = `${currentPlayer}'s Wins!`
//         running = false;
//     } else if(!currentSquares.includes('')){
//         statusText.textContent = `Draw!`
//     } else{
//         changePlayer()
//     }


// }



// function restartGame(){
//     currentPlayer = "X"
//     currentSquares = Array(9).fill('')
//     statusText.textContent = `${currentPlayer}'s turn`
//     squares.forEach(square => square.textContent = "")
//     running = true
// }

function checkWinner() {
  let roundwon = false;
  let winningCondition = -1; // Menambahkan variabel untuk menyimpan kondisi kemenangan

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const [a, b, c] = condition;
    if (
      currentSquares[a] !== "" &&
      currentSquares[a] === currentSquares[b] &&
      currentSquares[a] === currentSquares[c]
    ) {
      roundwon = true;
      winningCondition = i; // Menyimpan indeks kondisi kemenangan
      break;
    }
}


if (roundwon) {
    statusText.textContent = `${currentPlayer}'s Wins!`;
    highlightWinningLine(winningCondition); // Memanggil fungsi untuk menyoroti garis kemenangan
    running = false;
  } else if (!currentSquares.includes("")) {
    statusText.textContent = `Draw!`;
  } else {
    changePlayer();
  }
}

// function highlightWinningLine(winningConditionIndex) {
//   const winningCondition = winConditions[winningConditionIndex];

//   console.log(winningCondition)
//   // Menemukan elemen-elemen (baris/kolom) yang menang dan menambahkan kelas CSS
//   for (let i = 0; i < winningCondition.length; i++) {
//     const index = winningCondition[i];
//     squares[index].classList.add("winning-line");
//   }
// }

function restartGame() {
  currentPlayer = "X";
  currentSquares = Array(9).fill("");
  statusText.textContent = `${currentPlayer}'s turn`;
  squares.forEach((square) => square.classList.remove("winning-line"));
  squares.forEach((square) => (square.textContent = ""));
  running = true;
}


function highlightWinningLine(winningConditionIndex) {
    const winningCondition = winConditions[winningConditionIndex]

    for(let i = 0; i < winningCondition.length; i++) {
        const index = winningCondition[i]
        squares[index].classList.add("winning-line")
    }
}

