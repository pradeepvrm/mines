function MineHandler({
        mines,
        setMines,
        gameOver
    }) {

    function increment() {
        if (mines < 24 && gameOver === true) {
            setMines(mines + 1)
        }
    }

    function decrement() {
        if (mines > 1 && gameOver === true) {
            setMines(mines - 1)
        }
    }

  return (
    <section className='controls'>
        <button onClick={decrement}>-</button>
            <div>
                <p>mines</p>
                <p>{mines}</p>
            </div>
        <button onClick={increment}>+</button>
    </section>
  );
}

export default MineHandler;
