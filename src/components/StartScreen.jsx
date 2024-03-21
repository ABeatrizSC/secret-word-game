import './StartScreen.css'

export function StartScreen({ startGame }) {
    return (
        <div className='content-container'>        
            <p>Clique no botão abaixo para jogar!</p>
            <button onClick={startGame}>Começar o jogo</button>
         </div>
    )
}