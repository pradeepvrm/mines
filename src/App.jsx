import { useState } from 'react';
import './App.css'
import Square from './square/Square'

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let randomNums = []
while (randomNums.length < 3) {
  let randomNum = getRandomNum(1, 26)
  if (!randomNums.includes(randomNum)) {
    randomNums.push(randomNum)
  }
}
console.log(randomNums);

function App() {
  
  const [GameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(100)

  let items = [];
  for (let index=1; index < 26; index++) {
    if (randomNums.includes(index)) {
      items.push(<Square setScore={setScore} gameOver={GameOver} setGameOver={setGameOver} key={index} mine={true} />)
    }
    else {
      items.push(<Square setScore={setScore} gameOver={GameOver} setGameOver={setGameOver} key={index}/>);
    }
  }

  return (
    <>
    <div className='d-flex gap-10'>
      <div className='totalScore'>
        <p>Total Score</p>
        <p>{score}</p>
      </div>
      <div className='d-grid'>
        {items}
      </div>
    </div>
    </>
  )
}

export default App