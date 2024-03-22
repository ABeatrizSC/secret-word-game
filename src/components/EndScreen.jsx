import './EndScreen.css'

export function EndScreen({ retry, score }) {
    return (
        <div className='content-container'>
            <h2>Fim de jogo!</h2>
            <p>A sua pontuação final foi <span>{score}</span></p>
            <button onClick={retry}>Jogar novamente</button>
        </div>
    )
}