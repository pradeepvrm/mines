import './Square.css'
import { useState } from 'react'

function Square({
    isMine, 
    gameOver, 
    setGameOver, 
    setScore,
    tilesClicked,
    setTilesClicked,
    safeTiles,
    setSafeTiles
    }) {
    const [clicked, setClicked] = useState(false)

    function mineCheck() {
        if (!clicked) {
            setClicked(true)
            if (isMine) {
                setGameOver(true)
                setScore(0)
            }
            else {
                setTilesClicked(tilesClicked - 1)
                setSafeTiles(safeTiles - 1)
                setScore(score => score * tilesClicked / safeTiles)
            }
        }
    }
    
    return (
        <div className={`square-item ${(clicked || gameOver) ? (isMine ? 'mine-square' : 'safe-square'): ''}`}
        onClick={mineCheck}>
            
        </div>
    )
}

export default Square