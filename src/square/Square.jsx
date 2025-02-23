import './Square.css';
import { useState } from 'react';

function Square({mine, gameOver, setGameOver, setScore}) {
    const [clicked, setClicked] = useState(false)

    function mineCheck() {
        if (!clicked) {
            setClicked(true)
            if (mine) {
                setGameOver(true)
                setScore(0)
            }
            else {
                setScore((score) => {
                    return score * 2
                })
            }
        }
    }

    return (
        <div className={`square-item ${(clicked || gameOver) ? (mine ? 'mine-square' : 'safe-square'): ''}`}
        onClick={mineCheck}>
            
        </div>
    )
}

export default Square