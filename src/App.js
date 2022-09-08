import './App.css';
import Board from './Component/Board';
import { useEffect, useState } from 'react';
import ScoreCard from './Component/Score_Card';

function App() {
  const boardWinCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const [board, setBoard] = useState(Array(9).fill(null))
  const [whosTurn, setWhosTurn] = useState(false)
  const [winnerPoint, setWinnerPoint] = useState({ xScore: 0, oScore: 0 })
  const [gameOver, setGameOver] = useState(false)
  const [winner, setWinner] = useState()
  const [isModelVisible,setIsModelVisible] = useState()

  // const modelClose = () => {
  //   var modal = document.getElementById("myModal");
  //   modal.style.display = "none";
  // }
  
  // useEffect(() => {
  //   // isModalVisible && 
  //   var modal = document.getElementById("myModal");
  //   modal.style.display = "block";
  //   if (modal.style.display = "block") {
  //     setInterval(modelClose, 3000)
  //   }
  // }, [winner])

  // useEffect(() => {
  //   var modal = document.getElementById("myModal");
  //   modal.style.display = "none";
  // }, [])


  const boxClickHandler = (boxIndex) => {
    console.log('boxIndex', boxIndex)
    const boardUpdated = board.map((value, index) => {
      if (index === boxIndex) {
        return whosTurn ? "X" : "O";
      }
      else {
        return value;
      }
    })
    setBoard(boardUpdated)
    setWhosTurn(!whosTurn)
    const winner = winerHandler(boardUpdated)

    if (winner) {
      if (winner === "O") {
        let { oScore } = winnerPoint;
        oScore += 1;
        setWinnerPoint({ ...winnerPoint, oScore })
      } else {
        let { xScore } = winnerPoint
        xScore += 1
        setWinnerPoint({ ...winnerPoint, xScore })
      }
    }
  }

  useEffect(() => {
    let reset = 0
    board.map((value) => {
      if (value === "X" || value && "O" || value !== null) {
        reset += 1;
        if (reset === 9) {
          resetGame()
        }
      }
    })
  }, [board])

  const winerHandler = (board) => {
    for (let i = 0; i <= boardWinCondition.length; i++) {
      const [x, y, z] = boardWinCondition[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        return board[x]
        // setWinner(board[x])
        // setBoard(Array(9).fill(null))
      }
    }
  }

  const resetGame = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }

  if (winnerPoint) {
    const { xScore, oScore } = winnerPoint
    if (xScore + oScore === 3) {
      if (xScore < oScore) {
        setWinner("Player 2 || O is Winner")
        // alert("oScore is Winner")
      }
      else {
        setWinner("Player 1 || X is Winner")
        // alert("xScore is Winner")
      }
      setIsModelVisible(true)
      setWinnerPoint({ xScore: 0, oScore: 0 })
      resetGame()
    }
    console.log("total", xScore + oScore)
    console.log('xScore', xScore)
    console.log('oScore', oScore)
  }



  return (
    <div className="App">

      <h1>TIC  TAC  TOE</h1>

      <ScoreCard whosTurn={whosTurn} winnerPoint={winnerPoint} />
      <Board board={board} onClick={gameOver ? resetGame : boxClickHandler} />
      <button className="reset" onClick={resetGame}> Reset</button>


      {isModelVisible &&
        <div id="myModal" className="modal">
          <div className="modal-content">
          <span class="close" onClick={() => setIsModelVisible(false)}>&times;</span>
            <p>{winner} </p>
          </div>
        </div>
      }
    </div>

  );
}

export default App;
