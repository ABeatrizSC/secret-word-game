import { useState, useRef } from 'react'
import './Game.css'

export function Game({ verifyLetter, pickedCategory, pickedWord, letters, guessedLetters, wrongLetters, guesses, score}) {
    const [letterInput, setLetterInput] = useState('')
    const letterInputRef = useRef(null) //references

    function handleSubmit(e) {
        e.preventDefault()
        verifyLetter(letterInput)
        setLetterInput('')
        letterInputRef.current.focus()
    }

    return (
        <div className='content-container'>
            <p>Pontuação: <span className="points">{score}</span></p>
            <h2>Adivinhe a palavra: </h2>
            <p>Dica: <span className='tip'>{pickedCategory}</span></p>
            <p>Você ainda possui <span>{guesses}</span> tentativa(s).</p>
            <div className="word-container">
                {letters.map((letter, i) =>
                    guessedLetters.includes(letter) ? (
                        <span key={i} className='letter'>{letter}</span>
                    ) : (
                        <span key={i} className="blank-square"></span>
                    )
                )}
            </div>
            <div className="letter-container">
                <p>Tente adivinhar uma letra da palavra:</p>
                <form onSubmit={handleSubmit} className='form'>
                    <input 
                        type="text" 
                        maxLength={1} 
                        required onChange={(e) => setLetterInput(e.target.value)} 
                        value={letterInput}
                        ref={letterInputRef} //set reference
                    />
                    <button>Enviar</button>
                </form>
            </div>
            <div className='wrong-letters-container'>
                <p>Letras já utilizadas:</p>
                <div>
                    {wrongLetters.map((letter, i) => (
                        <span key={i}>{letter}, </span>
                    ))}
                </div>
            </div>
        </div>
    )
}