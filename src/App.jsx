import { useEffect, useState } from 'react'
import './App.css'
import Square from './square/Square'
import MineHandler from './components/mineHandler';


function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomNums(mines) {
  let randomNums = []
  while (randomNums.length < mines) {
    let randomNum = getRandomNum(1, 26)
    if (!randomNums.includes(randomNum)) {
      randomNums.push(randomNum)
    }
  }
  return randomNums
}

function App() {
  
  const [mines, setMines] = useState(3)
  const [GameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(100)
  const [tilesClicked, setTilesClicked] = useState(25)
  const [safeTiles, setSafeTiles] = useState(25 - mines)
  const [highScore, setHighScore] = useState(() => {
    const savedHighScore = localStorage.getItem('highScore')
    return savedHighScore ? parseFloat(savedHighScore) : 0
  })
  const [randomNums, setRandomNums] = useState(() => generateRandomNums(mines))

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score)
    }
    localStorage.setItem('highScore', highScore)
  })

  function resetGame() {
    setGameOver(false)
    setScore(100)
    setTilesClicked(25)
    setSafeTiles(25-mines)
    setRandomNums(generateRandomNums(mines))
  }

  let items = [];
  for (let index=1; index < 26; index++) {
    if (randomNums.includes(index)) {
      items.push(<Square 
        setScore={setScore} 
        gameOver={GameOver} 
        setGameOver={setGameOver} 
        key={`square-${index}-${GameOver}`}
        isMine={true}
        tilesClicked={tilesClicked}
        setTilesClicked={setTilesClicked}
        safeTiles={safeTiles}
        setSafeTiles={setSafeTiles}
        />)
    }
    else {
      items.push(<Square 
        setScore={setScore} 
        gameOver={GameOver} 
        setGameOver={setGameOver} 
        key={`square-${index}-${GameOver}`}
        tilesClicked={tilesClicked}
        setTilesClicked={setTilesClicked}
        safeTiles={safeTiles}
        setSafeTiles={setSafeTiles}
        />)
    }
  }

  return (
    <>
    <div className='d-flex gap-10'>
      <div className='totalScore'>
        <MineHandler 
          mines={mines}
          setMines={setMines}
          gameOver={GameOver}
        />
       
        <p>Total Score</p>
        <p>{score.toFixed(2)}</p>
        <p>High Score</p>
        <p>{highScore.toFixed(2)}</p>
        
      </div>
      <div>
        <div className='d-grid'>
          {items}
        </div>
        <div className='resetBtn'>{GameOver? <button onClick={resetGame}>Play again</button>:null}</div>
      </div>
    </div>
    </>
  )
}

export default App