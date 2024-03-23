export function EndScreen({ retry, score }) {
    return (
        <div className='content-container'>
            <h1>Secret Word Game</h1>
            <h2>Fim de jogo!</h2>
            <p>A sua pontuação final foi <span className="guesses-span">{score}</span></p>
            <button onClick={retry}>Jogar novamente</button>
        </div>
    )
}