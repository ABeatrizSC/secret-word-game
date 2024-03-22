import './styles/App.css'
import { StartScreen } from './components/StartScreen'
import { Game } from './components/Game'
import { EndScreen } from './components/EndScreen'
import { Footer } from './components/Footer'
import { useCallback, useEffect, useState } from 'react'
import { wordsList } from './data/words'

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]

const guessesNumber = 3

export function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesNumber)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category }
  }

  const startGame = () => {
    const { word, category } = pickWordAndCategory()

    //create an array of letters
    let wordLetters = word.split('')
    wordLetters = wordLetters.map((letter) => letter.toLowerCase())

    //fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }

  const verifyLetter = (letterInput) => {
    const normalizedLetter = letterInput.toLowerCase()

    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      alert('Letra já utilizada')
      return
    }

    //push guessed letter or remove a guess
    //letters = variavel state
    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, 
        normalizedLetter //add/push
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, 
        normalizedLetter //add/push
      ])
      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  function resetLetterStates() {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if (guesses == 0) {
      resetLetterStates()
      setGameStage(stages[2].name)
    }
  }, [guesses])

  const retry = () => {
    setScore(0)
    setGuesses(guessesNumber)
    setGameStage(stages[0].name)
  }

  return (
    <>
      <h1>Secret Word Game</h1>
      {gameStage == 'start' && <StartScreen startGame={startGame}/>}
      {gameStage == 'game' && <Game 
        verifyLetter={verifyLetter} 
        pickedCategory={pickedCategory}
        pickedWord={pickedWord}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}
      {gameStage == 'end' && <EndScreen 
        retry={retry} 
        score={score}
      />}
      <Footer />
    </>
  )
}

