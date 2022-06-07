import React from 'react'
import './theory.css'
import { useState } from 'react'

import Intro from './chapters/Intro'
import Notes from './chapters/Notes'
import Intervals from './chapters/Intervals'
import Chords from './chapters/Chords'
import Scales from './chapters/Scales'


export default function Theory() {

const [toggleAside, setToggleAside] = useState (false)

  return (
    <>
    <div className="theory__menu" onClick={() => setToggleAside(!toggleAside)}>{!toggleAside ? 'Разделы' : 'Закрыть'}</div>
    <div className="theory">
        <aside className="theory__aside">
            <a className="theory__aside__item" href="#intro">Введение</a>
            <a className="theory__aside__item" href="#notes">Ноты</a>
            <a className="theory__aside__item" href="#intervals">Интервалы</a>
            <a className="theory__aside__item" href="#chords">Аккорды</a>
            <a className="theory__aside__item" href="#scales">Тональности</a>
        </aside>
        {
            toggleAside && (
            <aside className="mobile__theory__aside">
                <a className="mobile__theory__aside__item" href="#intro" onClick={() => setToggleAside(false)}>Введение</a>
                <a className="mobile__theory__aside__item" href="#notes" onClick={() => setToggleAside(false)}>Ноты</a>
                <a className="mobile__theory__aside__item" href="#intervals" onClick={() => setToggleAside(false)}>Интервалы</a>
                <a className="mobile__theory__aside__item" href="#chords" onClick={() => setToggleAside(false)}>Аккорды</a>
                <a className="mobile__theory__aside__item" href="#scales" onClick={() => setToggleAside(false)}>Тональности</a>
            </aside>
            )
        }    
        <main className="theory__main">
            <Intro/>
            <Notes/>
            <Intervals/>
            <Chords/>
            <Scales/>
        </main>
    </div>
    </>
  )
}
