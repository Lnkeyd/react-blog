import { useEffect, useState } from 'react'
import Piano from '../../../components/piano/Piano'
import './textChord.css'

export default function TextChord() {

    const [activeKeys, setActiveKeys] = useState([])
    const [answerChord, setAnswerChord] = useState([])
    const [result, setResult] = useState('')
    
    const chords = [
        {name: 'Cmaj', value: ['C3', 'E3', 'G3']},
        {name: 'C#maj', value: ['Db3', 'F3', 'Ab3']},
        {name: 'Dmaj', value: ['D3', 'Gb3', 'A3']},
        {name: 'D#maj', value: ['Eb3', 'G3', 'Bb3']},
        {name: 'Emaj', value: ['E3', 'Ab3', 'B3']},
        {name: 'Fmaj', value: ['F3', 'A3', 'C4']},
        {name: 'F#maj', value: ['Gb3', 'Bb3', 'Db4']},
        {name: 'Gmaj', value: ['G3', 'B3', 'D4']},
        {name: 'G#maj', value: ['Ab3', 'C4', 'Eb4']},
        {name: 'Amaj', value: ['A3', 'Db4', 'E4']},
        {name: 'A#maj', value: ['Bb3', 'D4', 'F4']},
        {name: 'Bmaj', value: ['B3', 'Eb4', 'Gb4']},
    ]


    const [chord, setChord] = useState(chords[Math.floor(Math.random() * 12)])

    // const handleAnswer = (answer) => {
    //     setAnswer([...answerKey, answer])
    // } FOR CHORDS AND SCALES

    const handleAnswer = (answer) => {
            setAnswerChord([...answerChord, answer.id])
            setActiveKeys([...activeKeys, answer])
        }

    // useEffect(() => {
    //     console.log(answerKey.id)
    // }, [])

    function compare(a1, a2) {
        return a1.length == a2.length && a1.every((val,index) =>val === a2[index])
    }

    function check() {
        if (compare(answerChord, chord.value)) {
            setResult('✔️ Правильный ответ!')
        } else if (answerChord == false) {
            setResult('⚠️ Клавиша не нажата!')
        } else {
            setResult('❌ Неправильный ответ!')
        }
        setActiveKeys(activeKeys.map(item => 
                    item.className.includes('white') ? 
                        item.style.backgroundColor = 'white' : 
                        item.style.backgroundColor = 'black' ))
        setActiveKeys([])
        setTimeout(() => setResult(''), 1000)
        setAnswerChord([])

        let random = Math.floor(Math.random() * 11)
        //всегда на 1 меньше, чем элементом в массиве
        if (chords[random].name === chord.name) {
            if (random === chords.length)
                random = 0
            else
                random = random + 1
        }
        setChord(chords[random])
    }



  return (
      <div className="text-note">
        <header>
            Начните определять аккорд с нижней тоники, последовательно нажимая клавиши на клавиатуре (3шт)
        </header>
        <Piano ansKeys = {handleAnswer}/>
        <div className="form">
            <h2 className='header'>Тест</h2>
            <div className="question">Определите аккорд: <b>{chord.name}</b></div>
            <button className="checkAnswer"onClick={check}>Check Your Answer!</button>
            <div className="answer">{result}</div>
        </div>
      </div>
  )
}
