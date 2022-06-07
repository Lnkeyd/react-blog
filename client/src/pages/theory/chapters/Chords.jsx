import React from 'react'

import Maj3rd from '../../../img/theory/chords/maj-3rd.svg'
import Min3rd from '../../../img/theory/chords/min-3rd.svg'
import Aug3rd from '../../../img/theory/chords/aug-3rd.svg'
import Dim3rd from '../../../img/theory/chords/dim-3rd.svg'

import Maj7th from '../../../img/theory/chords/maj-7th.svg'
import Min7th from '../../../img/theory/chords/min-7th.svg'
import Dominant7th from '../../../img/theory/chords/dominant-7th.svg'
import Dim7th from '../../../img/theory/chords/dim-7th.svg'
import HalfDim7th from '../../../img/theory/chords/half-dim-7th.svg'

export default function Chords() {
  return (
    <article className='theory__main__article' id='chords'>
            <h2 className="theory__main__article__header">Аккорды</h2>
            <p className="theory__main__article__text">
            Аккорд — это сочетание трех или более звуков. В классической музыке звуки в аккордах расположены по терциям.
            Мы будем рассматривать именно такие аккорды.
            </p>
            <p className="theory__main__article__text">
            Каждый звук в аккорде имеет свое название. Нижний
            звук (основной) называется примой, второй звук — терцией, третий звук — квинтой, четвертый — септимой и т. д.
            </p>
            <p className="theory__main__article__text">
            Аккорд, в котором три звука расположены по терциям,
            называется трезвучием. Виды трезвучий: мажорное, минорное, увеличенное и уменьшенное. Вид трезвучий зависит
            от их интервального состава.
            </p>
            <p className="theory__main__article__text">
            Мажорное трезвучие состоит из большой и малой терций; между крайними звуками — чистая квинта:
            </p>
            <p className="theory__main__article__text">
                <img src={Maj3rd} alt="Maj3rd" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
            Минорное трезвучие состоит из малой и большой терций; между крайними звуками — чистая квинта:
            </p>
            <p className="theory__main__article__text">
                <img src={Min3rd} alt="Min3rd" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
            Увеличенное трезвучие состоит из двух больших терций; между крайними звуками — увеличенная квинта:
            </p>
            <p className="theory__main__article__text">
                <img src={Aug3rd} alt="Aug3rd" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
            Уменьшенное трезвучие состоит из двух малых терций; между крайними звуками — уменьшенная квинта:
            </p>
            <p className="theory__main__article__text">
                <img src={Dim3rd} alt="Dim3rd" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
            Аккорд, в котором четыре звука расположены по терциям, называется септаккордом. 
            Между крайними звуками — септима (отсюда название и сокращенное обозначение: 7). 
            Виды септаккордов зависят от септимы между крайними звуками и трезвучия, лежащего в основе. 
            Вот некоторые из них:
            </p>
            <p className="theory__main__article__text">
                Большой мажорный септаккорд:
            </p>
            <p className="theory__main__article__text">
                <img src={Maj7th} alt="Maj7th" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
                Большой минорный септаккорд:
            </p>
            <p className="theory__main__article__text">
                <img src={Min7th} alt="Min7th" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
                Доминантсептаккорд:
            </p>
            <p className="theory__main__article__text">
                <img src={Dominant7th} alt="Dominant7th" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
                Малый уменьшенный септаккорд:
            </p>
            <p className="theory__main__article__text">
                <img src={HalfDim7th} alt="HalfDim7th" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
                Уменьшенный септаккорд:
            </p>
            <p className="theory__main__article__text">
                <img src={Dim7th} alt="Dim7th" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
            Трезвучия и септаккорды строятся от всех ступеней мажора и минора.
            </p>
            </article>
  )
}
