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

export function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

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

    console.log(word)
    console.log(category)
    console.log(wordLetters)

    setGameStage(stages[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <>
      <h1>Secret Word Game</h1>
      {gameStage == 'start' && <StartScreen startGame={startGame}/>}
      {gameStage == 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage == 'end' && <EndScreen retry={retry} />}
      <Footer />
    </>
  )
}

