import React from 'react'

import CMaj from '../../../img/theory/scales/c-maj.svg'
import DMaj from '../../../img/theory/scales/d-maj.svg'
import GMaj from '../../../img/theory/scales/g-maj.svg'
import AMin from '../../../img/theory/scales/a-min.svg'
import CSharpMin from '../../../img/theory/scales/c-sharp-min.svg'
import EMin from '../../../img/theory/scales/e-min.svg'


export default function Scales() {
  return (
    <article className='theory__main__article' id='scales'>
            <h2 className="theory__main__article__header">Тональности</h2>
            <p className="theory__main__article__text">
            В музыкальных произведениях существует определенная
            система отношений звуков по высоте. Центром системы является тоника — основной опорный (устойчивый) звук.
            Всего устойчивых звуков три. Остальные звуки неустойчивые. Они тяготеют к устойчивым звукам.
            </p>
            <p className="theory__main__article__text">
            Л а д — это система звуков, которая объединяется центральным звуком или созвучием.
            </p>
            <p className="theory__main__article__text">
            Наиболее распространенные в классической музыке лады мажорный и минорный.
            </p>
            <p className="theory__main__article__text">
            Тональность — высота лада. Название тональности
            происходит от названия I ступени и лада. Например, если
            I ступень — звук до, а лад мажорный, то тональность до мажор; если I ступень — звук фа, а лад минорный, то тональность фа минор.
            </p>
            <p className="theory__main__article__text">
            Поступенное восходящее или нисходящее движение звуков лада называется гаммой. Звуки в гамме называются
            ступенями. В мажорной и минорной гамме семь ступеней. Иногда верхнюю I принимают за VIII ступень.
            </p>
            <p className="theory__main__article__text">
            <b>Мажорный лад</b> может быть натуральным, гармоническим
            и мелодическим. Приведены примеры для натурального мажора (он же используется в упражнениях).
            </p>
            <p className="theory__main__article__text">
            Строение гаммы натурального мажора:
            </p>
            <p className="theory__main__article__text">
            тон, тон, полутон, тон, тон, тон, полутон
            </p>
            <p className="theory__main__article__text">
            Строя таким образом мажорную гамму от звука до, получим гамму до мажор, от звука ре — ре мажор, от соль — соль
            мажор и т. д.:
            </p>
            <p className="theory__main__article__text">
                До мажор:
            </p>
            <p className="theory__main__article__text">
                <img src={CMaj} alt="CMaj" className='theory__main__article__image theory__main__article__scale'/>
            </p>
            <p className="theory__main__article__text">
                Ре мажор:
            </p>
            <p className="theory__main__article__text">
                <img src={DMaj} alt="DMaj" className='theory__main__article__image theory__main__article__scale'/>
            </p>
            <p className="theory__main__article__text">
                Соль мажор:
            </p>
            <p className="theory__main__article__text">
                <img src={GMaj} alt="GMaj" className='theory__main__article__image theory__main__article__scale'/>
            </p>
            <p className="theory__main__article__text">
            Минорный лад может быть натуральным, гармоническим
            и мелодическим. Приведены примеры для натурального минора (он же используется в упражнениях).
            </p>
            <p className="theory__main__article__text">
            Строение гаммы натурального минора:
            тон, полутон, тон, тон, полутон, тон, тон:
            </p>
            <p className="theory__main__article__text">
                Ля минор:
            </p>
            <p className="theory__main__article__text">
                <img src={AMin} alt="AMin" className='theory__main__article__image theory__main__article__scale'/>
            </p>
            <p className="theory__main__article__text">
                Ми минор:
            </p>
            <p className="theory__main__article__text">
                <img src={EMin} alt="EMin" className='theory__main__article__image theory__main__article__scale'/>
            </p>
            <p className="theory__main__article__text">
                До-диез минор:
            </p>
            <p className="theory__main__article__text">
                <img src={CSharpMin} alt="CSharpMin" className='theory__main__article__image theory__main__article__scale'/>
            </p>
            <p className="theory__main__article__text">
            Мажорные и минорные тональности называются параллельными, если у них одинаковый состав звуков и
            одинаковые ключевые знаки. Параллельная минорная гамма
            строится от VI ступени мажорной гаммы (быстро найти
            VI ступень можно через одну ступень вниз от I ступени мажора, то есть на малую терцию вниз). 
            Параллельная мажорная гамма строится от III ступени минора (через одну ступень вверх, то есть на малую терцию вверх). 
            Примеры параллельных гамм и тональностей: до мажор — ля минор,
            соль мажор — ми минор и т. д.
            </p>
            <p className="theory__main__article__text">
            Мажорные и минорные тональности называются одноимёнными, если у них одинаковая тоника, но разные
            ключевые знаки. Примеры одноимённых тональностей:
            до мажор — до минор, соль мажор — соль минор и т. д.
            </p>
            <p className="theory__main__article__text">
            Тональности одинаковой высоты, но разные по названию являются энгармоничёски равными. Примеры
            энгармонически равных тональностей: си мажор — добемоль мажор, до-диез мажор — ре-бемоль мажор и т. д.
            </p>
            </article>
  )
}
