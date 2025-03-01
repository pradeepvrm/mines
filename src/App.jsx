import { useEffect, useState } from 'react'
import './App.css'
import Square from './square/Square'

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let randomNums = []
let mines = 3
while (randomNums.length < mines) {
  let randomNum = getRandomNum(1, 26)
  if (!randomNums.includes(randomNum)) {
    randomNums.push(randomNum)
  }
}
console.log(randomNums)

function App() {
  
  const [GameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(100)
  const [tilesClicked, setTilesClicked] = useState(25)
  const [safeTiles, setSafeTiles] = useState(25 - mines)
  const [highScore, setHighScore] = useState(() => {
    const savedHighScore = localStorage.getItem('highScore')
    return savedHighScore ? parseFloat(savedHighScore) : 0
  })

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score)
    }
    localStorage.setItem('highScore', highScore)
  })

  let items = [];
  for (let index=1; index < 26; index++) {
    if (randomNums.includes(index)) {
      items.push(<Square 
        setScore={setScore} 
        gameOver={GameOver} 
        setGameOver={setGameOver} 
        key={index} 
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
        key={index}
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
        <p>Total Score</p>
        <p>{score.toFixed(2)}</p>
        <p>High Score</p>
        <p>{highScore.toFixed(2)}</p>
      </div>
      <div className='d-grid'>
        {items}
      </div>
    </div>
    </>
  )
}

export default App