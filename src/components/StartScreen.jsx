export function StartScreen({ startGame }) {
    return (
        <div className='content-container'>         <h1>Secret Word Game</h1>
            <p>Clique no botão abaixo para jogar!</p>
            <button onClick={startGame}>Começar o jogo</button>
         </div>
    )
}