import React from 'react'

import Prima from '../../../img/theory/intervals/prima.svg'
import Min2nd from '../../../img/theory/intervals/min-2nd.svg'
import Maj2nd from '../../../img/theory/intervals/maj-2nd.svg'
import Min3rd from '../../../img/theory/intervals/min-3rd.svg'
import Maj3rd from '../../../img/theory/intervals/maj-3rd.svg'
import Quarte from '../../../img/theory/intervals/quarte.svg'
import Tritone from '../../../img/theory/intervals/tritone.svg'
import Quinte from '../../../img/theory/intervals/quinte.svg'
import Min6th from '../../../img/theory/intervals/min-6th.svg'
import Maj6th from '../../../img/theory/intervals/maj-6th.svg'
import Min7th from '../../../img/theory/intervals/min-7th.svg'
import Maj7th from '../../../img/theory/intervals/maj-7th.svg'
import Octave from '../../../img/theory/intervals/octave.svg'

export default function Intervals() {
  return (
    <article className='theory__main__article' id='intervals'>
            <h2 className="theory__main__article__header">Интервалы</h2>
            <p className="theory__main__article__text">
            Интервал — это сочетание двух звуков. Например:
            </p>
            <p className="theory__main__article__text">
                <img src={Quinte} alt="piano interval" className='theory__main__article__image'/>
                <img src={Maj2nd} alt="piano interval" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
            Интервал определяется двумя измерениями: количеством
            ступеней в интервале и количеством тонов в интервале.
            </p>
            <p className="theory__main__article__text">
            Таким образом, у интервалов две величины: количественная (ступеневая) и качественная (тоновая).
            </p>
            <p className="theory__main__article__text">
            Чтобы определить количество ступеней в интервале, надо посчитать в с е звуки, входящие в этот интервал. В приведенном выше примере в первый интервал входят пять звуков (ступеней), во второй — два звука (ступени).
            </p>
            <p className="theory__main__article__text">
            Названия интервалов связаны с количеством звуков.
            Они происходят от латинских числительных: прима (1), секунда (2), терция (3), кварта (4), квинта (5), секста (6), септима (7), октава (8).
            </p>
            <p className="theory__main__article__text">
            Интервалы в пределах октавы называются простыми,
            интервалы шире октавы — составными.
            </p>
            <p className="theory__main__article__text">
            Если сравнить две секунды: до — ре и ми — фа, то при
            одинаковом количестве ступеней (две) у них оказывается
            разное количество тонов: до — ре — один тон, ми — фа —
            полтона. Таким же образом отличаются друг от друга и все
            другие интервалы. Имея одинаковую ступеневую величину;
            они отличаются по тоновой величине.
            </p>
            <p className="theory__main__article__text">
            Полное измерение интервала и его название включает в
            себя ступеневую и тоновую величину. Тоновая (качественная) величина обозначается словами: большой, малый,
            чистый, увеличенный, уменынённый и др. Ступеневая величина обозначается, как было указано выше, числительными.
            Таким образом получаем следующие простые интервалы:
            </p>
            <p className="theory__main__article__text">
                Чистая прима (0пт между нотами)
            </p>
            <p className="theory__main__article__text">
                <img src={Prima} alt="Prima" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
                 Малая (1пт) и большая (2пт) секунда,
            </p>
            <p className="theory__main__article__text">
                <img src={Min2nd} alt="Min2nd" className='theory__main__article__image'/>
                <img src={Maj2nd} alt="Maj2nd" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
                Малая (3пт) и большая (4пт) терция, 
            </p>
            <p className="theory__main__article__text">
                <img src={Min3rd} alt="Min3rd" className='theory__main__article__image'/>
                <img src={Maj3rd} alt="Maj3rd" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
                Чистая кварта (5пт),
            </p>
            <p className="theory__main__article__text">
                <img src={Quarte} alt="Quarte" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
            Тритон (6пт), тритон также энгармонически равен увеличенной кварте и уменьшенной квинте 
            </p>
            <p className="theory__main__article__text">
                <img src={Tritone} alt="Tritone" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
            Чистая квинта (7пт),
            </p>
            <p className="theory__main__article__text">
                <img src={Quinte} alt="Quinte" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
            Малая (8пт) и большая секста (9пт),
            </p>
            <p className="theory__main__article__text">
                <img src={Min6th} alt="Min6th" className='theory__main__article__image'/>
                <img src={Maj6th} alt="Maj6th" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
            Малая (10пт) и большая септима (11пт),
            </p>
            <p className="theory__main__article__text">
                <img src={Min7th} alt="Min7th" className='theory__main__article__image'/>
                <img src={Maj7th} alt="Maj7th" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
            Октава (12пт).
            </p>
            <p className="theory__main__article__text">
                <img src={Octave} alt="prima" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
            Для правильного построения интервала надо сначала отсчитать от данного звука нужное количество ступеней, а затем количество тонов. Например: чтобы построить малую
            терцию от звука до, отсчитывается три ступени (до — р е — 
            ми), проверяется количество тонов (2 тона) и уменьшается
            до нужного количества тонов ( 1.5 тона); причем в данном
            случае для уменьшения на полтона следует понизить звук
            ми. Таким образом получаем малую терцию: до — ми-бемоль.
            </p>
            </article>
  )
}
