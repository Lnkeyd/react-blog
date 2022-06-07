import React from 'react'
import TheoryNotes from '../../../img/theory/notes/theory-notes-keyboard-names.svg'

export default function Notes() {
  return (
    <article className='theory__main__article' id='notes'>
            <h2 className="theory__main__article__header">Ноты</h2>
            <p className="theory__main__article__text">
            Существует семь основных звуков: до, ре, ми, фа, соль,
            ля, си. Они соответствуют белым клавишам фортепиано.
            </p>
            <p className="theory__main__article__text">
            Кроме основных существуют производные звуки. Они
            образуются от повышения или понижения (альтерации)
            основных. Знаки, указывающие на эти изменения, называются знаками альтерации. Они пишутся следующим
            образом:
            </p>
            <p className="theory__main__article__text">
                диез "#" — повышение на полтона (пт),
            </p>
            <p className="theory__main__article__text">
            бемоль "♭" — понижение на полтона (пт)
            </p>
            <p className="theory__main__article__text">
            бекар "&#9838;" — отказ от предыдущих знаков.
            </p>
            <p className="theory__main__article__text">
                <img src={TheoryNotes} alt="piano notes" className='theory__main__article__image'/>
            </p>
            <p className="theory__main__article__text">
            Равенство звуков по высоте при различном их значении
            и написании называется энгармонизмом звуков. Например: си-диез энгармонически равен звуку до, фа-диез равен звуку соль-бемоль и т. д.
            </p>
            <p className="theory__main__article__text">
            Кроме слоговых применяются буквенные обозначения
            звуков, основанные на латинском алфавите:   
            </p>
            <p className="theory__main__article__text">
                С/c - до, D/d - ре, E/e - ми, F/f - фа, G/g - соль, A/a - ля, B/b - си.
            </p>
            <p className="theory__main__article__text">
            Производные ступени обозначаются путем прибавления
            к названию ноты знака альтерации, например:
            </p>
            <p className="theory__main__article__text">
                F# - фа-диез, D♭ - ре-бемоль.
            </p>
            <p className="theory__main__article__text">
            Для обозначения тональности нужно назвать ее I ступень
            и лад. Например:
            </p>
            <p className="theory__main__article__text">
                Cmaj - до-мажор, Gmin - соль-минор.
            </p>
            </article>
  )
}
