import React from 'react'
// import { useState, useEffect } from 'react'
// import useSound from 'use-sound'
import './exercises.css'
// import {C3, Db3, D3, Eb3, E3, F3, Gb3, G3, Ab3, A3, Bb3, B3} from './sounds/Sounds'
// import {C4, Db4, D4, Eb4, E4, F4, Gb4, G4, Ab4, A4, Bb4, B4} from './sounds/Sounds'
import note from '../../img/svg/note.svg'
import chord from '../../img/svg/chord.svg'
import scale from '../../img/svg/scale.svg'
import interval from '../../img/svg/interval.svg'
import { Link } from 'react-router-dom'


export default function Exercises() {

    // window.AudioContext = window.AudioContext||window.webkitAudioContext;
    // const myAudioContext = new AudioContext();

    // const [notes, setNotes] = useState([])
    // const [result, setResult] = useState('')
    // const [activeKeys, setActiveKeys] = useState([])
    // const [scales, setScales] = useState([])

    // const C = [
    //     C3, E3, G3
    // ]

    // const allScales = [
    //     [
    //         'Cmaj | Amin', C3, D3, E3, F3, G3, A3, B3, C4, D4, E4, F4, G4, A4, B4
    //     ],
    //     [
    //         'Dmaj | Bmin', D3, E3, Gb3, G3, A3, B4, Db4
    //     ],
    //     [
    //         'Emaj | C#min', E3, Gb3, Ab3, A3, B3, Db4, Eb4, E4
    //     ],
    //     [
    //         'Fmaj | Dmin', F3, G3, A3, Bb3, B3, C4, D4, E4
    //     ],
    //     [
    //         'Gmaj | Emin', G3, A3, B3, C3, D3, E3, Gb3
    //     ]
    // ]

    // function checkScales(myNote) {
    //     const filteredScales = allScales.filter(item => {
    //         return item.includes(myNote)
    //     })
    //     const nameScales = filteredScales.map((item) => <li key={item[0]}>{item[0]}</li>)
    //     setScales([nameScales])
    // }

    // useEffect(() => console.log(activeKeys), [activeKeys]);

    // function GoPlay(note, event) {
    //     myAudioContext.resume().then(() => {
    //         const mySound = new Audio(note);
    //         mySound.loop = false;
    //         mySound.currentTime = 0;
    //         mySound.play();

    //         event.target.className.includes('white') ? 
    //             event.target.style.backgroundColor = 'rgb(255, 103, 103)' : 
    //             event.target.style.backgroundColor = 'rgb(216, 69, 69)'

    //         setActiveKeys([...activeKeys, event])

    //         setNotes([
    //             ...notes, note
    //         ]);
    //         checkScales(note)
    //     })
    // }

    // function check(chord) {

    //     const res = chord.length === C.length && chord.every((item, index)=> item === C[index])

    //     if (res === true) {
    //             setResult('✔️ Your Answer is Correct!')
    //     } else {
    //         setResult('❌ Incorrect Answer!')
    //     }

    //     setActiveKeys(activeKeys.map(item => 
    //         item.target.className.includes('white') ? 
    //             item.target.style.backgroundColor = 'white' : 
    //             item.target.style.backgroundColor = 'black' ))
    //     setActiveKeys([])
    //     setNotes([])
    //     setTimeout(() => setResult(''), 1000)
    // }

  return (
      
    // <div className="container">
    //     <div className="piano">
    //         <button className="key white" id='C3' onClick={(e) => {GoPlay(C3, e)}}></button>
    //         <button className="key black" id="Db3" onClick={(e) => {GoPlay(Db3, e)}}></button>
    //         <button className="key white" id="D3" onClick={(e) => {GoPlay(D3, e)}}></button>
    //         <button className="key black" id="Eb3" onClick={(e) => {GoPlay(Eb3, e)}}></button>
    //         <button className="key white" id="E3" onClick={(e) => {GoPlay(E3, e)}}></button>
    //         <button className="key white" id="F3" onClick={(e) => {GoPlay(F3, e)}}></button>
    //         <button className="key black" id="Gb3" onClick={(e) => {GoPlay(Gb3, e)}}></button>
    //         <button className="key white" id="G3" onClick={(e) => {GoPlay(G3, e)}}></button>
    //         <button className="key black" id="Ab3" onClick={(e) => {GoPlay(Ab3, e)}}></button>
    //         <button className="key white" id="A3" onClick={(e) => {GoPlay(A3, e)}}></button>
    //         <button className="key black" id="Bb3" onClick={(e) => {GoPlay(Bb3, e)}}></button>
    //         <button className="key white" id="B3" onClick={(e) => {GoPlay(B3, e)}}></button>
            
    //         <button className="key white" id='C4' onClick={(e) => {GoPlay(C4, e)}}></button>
    //         <button className="key black" id="Db4" onClick={(e) => {GoPlay(Db4, e)}}></button>
    //         <button className="key white" id="D4" onClick={(e) => {GoPlay(D4, e)}}></button>
    //         <button className="key black" id="Eb4" onClick={(e) => {GoPlay(Eb4, e)}}></button>
    //         <button className="key white" id="E4" onClick={(e) => {GoPlay(E4, e)}}></button>
    //         <button className="key white" id="F4" onClick={(e) => {GoPlay(F4, e)}}></button>
    //         <button className="key black" id="Gb4" onClick={(e) => {GoPlay(Gb4, e)}}></button>
    //         <button className="key white" id="G4" onClick={(e) => {GoPlay(G4, e)}}></button>
    //         <button className="key black" id="Ab4" onClick={(e) => {GoPlay(Ab4, e)}}></button>
    //         <button className="key white" id="A4" onClick={(e) => {GoPlay(A4, e)}}></button>
    //         <button className="key black" id="Bb4" onClick={(e) => {GoPlay(Bb4, e)}}></button>
    //         <button className="key white" id="B4" onClick={(e) => {GoPlay(B4, e)}}></button>
    //     </div>
    //     <div className="form">
    //         <h2>Form</h2>
    //         <button className="checkAnswer"onClick={() => {check(notes)}}>Check Your Answer!</button>
    //         <div className="">{result}</div>
    //     </div>

    //     <br />
    //     <br />
    //     <br />

    //     <div className="scales">
    //         <h2>Detect Scales</h2>
    //         <div className="">
    //             <ul>{scales}</ul>
    //         </div>
    //     </div>

        <div className="training">
            <div className="mode">
              <h2 className='header'>Текстовый режим</h2>
                <Link className="link module" to="/exercises/text-note">
                  <div className="background">
                    <img src={note} alt="" className="icon" />
                  </div>
                  <div className="description">Определите ноту по названию</div>
                </Link>
                <Link className="link module" to="/exercises/text-note">
                  <div className="background">
                    <img src={chord} alt="" className="icon" />
                  </div>
                  <div className="description">Определите аккорд по названию</div>
                </Link>
                <Link className="link module" to="/exercises/text-note">
                  <div className="background">
                    <img src={scale} alt="" className="icon" />
                  </div>
                  <div className="description">Определите тональность по названию</div>
                </Link>
            </div>
            
            <div className="mode">
              <h2 className='header'>Аудио-режим</h2>
              <Link className="link module" to="/exercises/text-note">
                  <div className="background">
                    <img src={scale} alt="" className="icon" />
                  </div>
                  <div className="description">Определите тональность по названию</div>
                </Link>
            </div>
        </div>
  )
}