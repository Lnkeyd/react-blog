import { useEffect, useState } from 'react'
import Piano from '../../../components/piano/Piano'
import './textChord.css'

export default function TextChord() {

    const [activeKeys, setActiveKeys] = useState([])
    const [answerChord, setAnswerChord] = useState([])
    const [result, setResult] = useState('')
    
    const chords = [
        {name: 'Cmaj', value: ['C3', 'E3', 'G3']},
        {name: 'Dmaj', value: ['D3', 'Gb3', 'A3']},
        {name: 'Emaj', value: ['E3', 'Ab3', 'B3']},
        {name: 'Fmaj', value: ['F3', 'A3', 'C4']},
        {name: 'Gmaj', value: ['G3', 'B3', 'D4']},
        {name: 'Amaj', value: ['A3', 'Db4', 'E4']},
        {name: 'Bmaj', value: ['B3', 'Eb4', 'Gb4']},
    ]


    const [chord, setChord] = useState(chords[Math.floor(Math.random() * 6)])

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

        setChord(chords[Math.floor(Math.random() * 6)])
    }



  return (
      <div className="text-note">
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
