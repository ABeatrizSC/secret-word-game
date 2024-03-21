import './Game.css'

export function Game({ verifyLetter}) {
    return (
        <div>
            <button onClick={verifyLetter}>Finalizar jogo</button>
        </div>
    )
}