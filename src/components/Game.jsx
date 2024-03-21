import './Game.css'

export function Game({ verifyLetter}) {
    return (
        <div className='game-container'>
            <p>Pontuação: <span className="points">000</span></p>
            <h2>Adivinhe a palavra: </h2>
            <p>Dica: <span className='tip'>Comida</span></p>
            <p>Você ainda possui <span>X</span> tentativa(s).</p>
            <div className="word-container">
                <span className='letter'>A</span>
                <span className="blank-square"></span>
            </div>
            <div className="letter-container">
                <p>Tente adivinhar uma letra da palavra:</p>
                <form className='form'>
                    <input type="text" maxLength={1} required/>
                    <button>Enviar</button>
                </form>
            </div>
            <div className='wrong-letters-container'>
                <p>Letras já utilizadas:</p>
                <div>
                    <span>A, </span>
                    <span>B, </span>
                </div>
            </div>
        </div>
    )
}