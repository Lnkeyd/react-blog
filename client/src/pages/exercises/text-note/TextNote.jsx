import { useEffect, useState } from 'react'
import Piano from '../../../components/piano/Piano'
import './textNote.css'

export default function TextNote() {

    const [activeKeys, setActiveKeys] = useState([])
    const [answerKey, setAnswer] = useState('')
    const [result, setResult] = useState('')
    const [key, setKey] = useState('C3')
    
    const keys = [
        'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3',
        'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4'
    ]

    // const handleAnswer = (answer) => {
    //     setAnswer([...answerKey, answer])
    // } FOR CHORDS AND SCALES

    const handleAnswer = (answer) => {
            setAnswer(answer.id)
            setActiveKeys([...activeKeys, answer])
        }

    // useEffect(() => {
    //     console.log(answerKey.id)
    // }, [])

    function check() {
        if (answerKey === key) {
            setResult('✔️ Правильный ответ!')
        } else if (!answerKey) {
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
        setAnswer('')

        setKey(keys[Math.floor(Math.random() * 24)])
    }



  return (
      <div className="text-note">
        <Piano ansKeys = {handleAnswer}/>
        <div className="form">
            <h2 className='header'>Тест</h2>
            <div className="question">Нажмите на клавишу: <b>{key}</b></div>
            <button className="checkAnswer"onClick={check}>Check Your Answer!</button>
            <div className="answer">{result}</div>
        </div>
      </div>
  )
}
