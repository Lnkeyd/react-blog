import './audioChord.css'
import { useState } from 'react'
import {C3, Db3, D3, Eb3, E3, F3, Gb3, G3, Ab3, A3, Bb3, B3} from '../sounds/Sounds'
import {C4, Db4, D4, Eb4, E4, F4, Gb4, G4, Ab4, A4, Bb4, B4} from '../sounds/Sounds'
import React from 'react'

export default function AudioChord() {
    const [answer, setAnswer] = useState('')
    const [result, setResult] = useState('')
    const [currentTypeIndex, setCurrentTypeIndex] = useState(0)
    const [chord, setChord] = useState({type: 'Maj triad', value: [C3, E3, G3]})
    
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    const myAudioContext = new AudioContext();

    const sounds = [C3, Db3, D3, Eb3, E3, F3, Gb3, G3, Ab3, A3, Bb3, B3,
                    C4, Db4, D4, Eb4, E4, F4, Gb4, G4, Ab4, A4, Bb4, B4]

    function getRandomRootNote() {
        return Math.floor(Math.random() * 11)
        // возвращает радномный индекс у массива sounds первой октавы
    }

    function getRandomMinor() {
        const root = getRandomRootNote();
        setChord({type: 'Min triad', value: [sounds[root], sounds[root+3], sounds[root+7]]})
        // setTimeout(() => setMaj([]), 1000)
        // console.log(chord)
    }

    function getRandomMajor() {
        const root = getRandomRootNote();
        setChord({type: 'Maj triad', value: [sounds[root], sounds[root+4], sounds[root+7]]})
        // setTimeout(() => setMaj([]), 1000)
        // console.log(chord)
    }

    const types = [getRandomMajor, getRandomMinor]

    // function setRandomType() {
    //     const rand = types[Math.floor(Math.random() * 2)]
    //     // опять же, на 1 меньше, чем элементов
    //     rand()
    // }

    function playRef(refChord) {
        myAudioContext.resume().then(() => {
            const firstNote = new Audio(refChord[0]);
            const secondNote = new Audio(refChord[1]);
            const thirdNote = new Audio(refChord[2]);

            firstNote.loop = false;
            secondNote.loop = false;
            thirdNote.loop = false;

            firstNote.currentTime = 0;
            secondNote.currentTime = 0;
            thirdNote.currentTime = 0;

            if (refChord.length === 3) {
                firstNote.play();
                secondNote.play();
                thirdNote.play();
            } else {
                const forthNote = new Audio(refChord[3]);
                forthNote.loop = false;
                forthNote.currentTime = 0;

                firstNote.play();
                secondNote.play();
                thirdNote.play();
                forthNote.play();
            }

        })
    }


    function check(answer) {
        if (answer === chord.type) {
            setResult('✔️ Правильный ответ!')
        } else {
            setResult('❌ Неправильный ответ!')
        }
        
        setTimeout(() => setResult(''), 1000)
        // setAnswer('')

        let random = Math.floor(Math.random() * 1)
        if (types[random] === types[currentTypeIndex]) {
            if (random === types.length)
                random = 0
            else
                random = random + 1
        }
        setCurrentTypeIndex(random)
        const rand = types[currentTypeIndex]
        rand()
    }



  return (
      <div className="audio-note">
        <header>Прослушайте аккорд, нажав на Вопрос. Затем, определите его, нажав на соответствующую кнопку</header>
        <div className="chord-ref-wrap">
            <button className="chord-play-question" onClick={() => playRef(chord.value)}>Вопрос</button>
        </div>
        <div className="audio-chord-module">
            <div className="chord-row">
                <button className="chord-item" id='Maj triad' onClick={(e) => check(e.target.id)}>Мажорное трезвучие</button>
                <button className="chord-item" id='Min triad' onClick={(e) => check(e.target.id)}>Минорное трезвучие</button>
                <button className="chord-item" id='Dominant 7th' onClick={(e) => check(e.target.id)}>Dominant 7th</button>
                <button className="chord-item" id='Maj 7th' onClick={(e) => check(e.target.id)}>Maj 7th</button>
                <button className="chord-item" id='Min 7th' onClick={(e) => check(e.target.id)}>Min 7th</button>
            </div>
        </div>
        <div className="form">
            <h2 className='header'>Результат</h2>
            <div className="answer">{result}</div>
        </div>
        <footer>
            <small>Приведены две октавы, наиболее часто употребляемые при написании мелодий.
                <br/> Первая октава в тренажере соответствует третьей на фортепиано.
                <br/> Таким образом, нота С3 в тренажере соответствует первой клавише первой октавы и т.д.
                <br/> В данном упражнении референсом на слух выступает клавиша С3
            </small>
        </footer>
      </div>
  )
}
