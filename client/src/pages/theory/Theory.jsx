import React from 'react'
import './theory.css'
import { useState } from 'react'

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
            <article className='theory__main__article' id='intro'>
            <h2 className="theory__main__article__header">Введение</h2>
            <p className="theory__main__article__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe optio eius at suscipit ipsam dolores explicabo, reprehenderit, minus, impedit praesentium enim aspernatur in ullam delectus ab perferendis doloremque nam recusandae!
                Necessitatibus a eius, dolores perspiciatis aliquam facilis tempore praesentium ea, fuga debitis distinctio dignissimos, labore natus illum vitae et velit aliquid! Ut voluptatibus blanditiis a rem sequi magni molestiae explicabo!
                Sit magni velit et, laboriosam at cum corporis ipsa assumenda tempora deleniti qui neque! Ipsa reiciendis temporibus magnam nisi. Quaerat reprehenderit magni, animi placeat fuga recusandae nesciunt. Perspiciatis, odit aut.
                Quam nulla consequuntur, est soluta illum at mollitia non perferendis id laudantium, placeat similique incidunt quia. Et amet explicabo libero dolores, fugiat dolorum facere dignissimos nisi eius culpa quibusdam non!
                Deleniti dolorum non accusamus voluptatem. Architecto, perferendis. Fugiat, animi aut. Fuga, rerum illum? Quis, porro dolor, suscipit quibusdam quidem non rem aspernatur ratione harum explicabo adipisci deserunt omnis commodi delectus.
                Possimus harum aliquam magni quibusdam explicabo praesentium eius sint voluptatem ab molestias porro, aut est dicta fugiat perferendis dolores amet exercitationem, tempore distinctio quidem! Incidunt, enim. Quisquam, ut. Vero, autem?
                Voluptatem consequuntur vitae asperiores, minus laborum ipsam cum, nesciunt nemo id rerum quasi quis reiciendis fuga voluptates esse optio, deserunt sint. In corrupti consequuntur animi amet iste pariatur quas mollitia?
                Magnam, nemo. Ex, voluptates aperiam? Sed optio, dolores, nam nostrum dolorum, eaque distinctio expedita minima ratione eos nobis quidem modi tempore ad amet suscipit autem soluta ipsum quis repudiandae quia.
                Deserunt dolores aperiam quos ipsum impedit! Dolorum saepe voluptates facere pariatur consequatur itaque nesciunt, illum exercitationem porro voluptate quasi quaerat quam culpa sit. Rem totam voluptatibus mollitia deleniti alias dicta!
                Consectetur, minus fugiat illo voluptas nam non quam veritatis cumque voluptatem deserunt officiis facere voluptatum voluptate veniam tempore commodi quia. Error ex natus molestias vero tempore alias, omnis velit. Corrupti?
            </p>
            </article>
            <article className='theory__main__article' id='notes'>
            <h2 className="theory__main__article__header">Ноты</h2>
            <p className="theory__main__article__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe optio eius at suscipit ipsam dolores explicabo, reprehenderit, minus, impedit praesentium enim aspernatur in ullam delectus ab perferendis doloremque nam recusandae!
                Necessitatibus a eius, dolores perspiciatis aliquam facilis tempore praesentium ea, fuga debitis distinctio dignissimos, labore natus illum vitae et velit aliquid! Ut voluptatibus blanditiis a rem sequi magni molestiae explicabo!
                Sit magni velit et, laboriosam at cum corporis ipsa assumenda tempora deleniti qui neque! Ipsa reiciendis temporibus magnam nisi. Quaerat reprehenderit magni, animi placeat fuga recusandae nesciunt. Perspiciatis, odit aut.
                Quam nulla consequuntur, est soluta illum at mollitia non perferendis id laudantium, placeat similique incidunt quia. Et amet explicabo libero dolores, fugiat dolorum facere dignissimos nisi eius culpa quibusdam non!
                Deleniti dolorum non accusamus voluptatem. Architecto, perferendis. Fugiat, animi aut. Fuga, rerum illum? Quis, porro dolor, suscipit quibusdam quidem non rem aspernatur ratione harum explicabo adipisci deserunt omnis commodi delectus.
                Possimus harum aliquam magni quibusdam explicabo praesentium eius sint voluptatem ab molestias porro, aut est dicta fugiat perferendis dolores amet exercitationem, tempore distinctio quidem! Incidunt, enim. Quisquam, ut. Vero, autem?
                Voluptatem consequuntur vitae asperiores, minus laborum ipsam cum, nesciunt nemo id rerum quasi quis reiciendis fuga voluptates esse optio, deserunt sint. In corrupti consequuntur animi amet iste pariatur quas mollitia?
                Magnam, nemo. Ex, voluptates aperiam? Sed optio, dolores, nam nostrum dolorum, eaque distinctio expedita minima ratione eos nobis quidem modi tempore ad amet suscipit autem soluta ipsum quis repudiandae quia.
                Deserunt dolores aperiam quos ipsum impedit! Dolorum saepe voluptates facere pariatur consequatur itaque nesciunt, illum exercitationem porro voluptate quasi quaerat quam culpa sit. Rem totam voluptatibus mollitia deleniti alias dicta!
                Consectetur, minus fugiat illo voluptas nam non quam veritatis cumque voluptatem deserunt officiis facere voluptatum voluptate veniam tempore commodi quia. Error ex natus molestias vero tempore alias, omnis velit. Corrupti?
            </p>
            </article>
            <article className='theory__main__article' id='intervals'>
            <h2 className="theory__main__article__header">Интервалы</h2>
            <p className="theory__main__article__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe optio eius at suscipit ipsam dolores explicabo, reprehenderit, minus, impedit praesentium enim aspernatur in ullam delectus ab perferendis doloremque nam recusandae!
                Necessitatibus a eius, dolores perspiciatis aliquam facilis tempore praesentium ea, fuga debitis distinctio dignissimos, labore natus illum vitae et velit aliquid! Ut voluptatibus blanditiis a rem sequi magni molestiae explicabo!
                Sit magni velit et, laboriosam at cum corporis ipsa assumenda tempora deleniti qui neque! Ipsa reiciendis temporibus magnam nisi. Quaerat reprehenderit magni, animi placeat fuga recusandae nesciunt. Perspiciatis, odit aut.
                Quam nulla consequuntur, est soluta illum at mollitia non perferendis id laudantium, placeat similique incidunt quia. Et amet explicabo libero dolores, fugiat dolorum facere dignissimos nisi eius culpa quibusdam non!
                Deleniti dolorum non accusamus voluptatem. Architecto, perferendis. Fugiat, animi aut. Fuga, rerum illum? Quis, porro dolor, suscipit quibusdam quidem non rem aspernatur ratione harum explicabo adipisci deserunt omnis commodi delectus.
                Possimus harum aliquam magni quibusdam explicabo praesentium eius sint voluptatem ab molestias porro, aut est dicta fugiat perferendis dolores amet exercitationem, tempore distinctio quidem! Incidunt, enim. Quisquam, ut. Vero, autem?
                Voluptatem consequuntur vitae asperiores, minus laborum ipsam cum, nesciunt nemo id rerum quasi quis reiciendis fuga voluptates esse optio, deserunt sint. In corrupti consequuntur animi amet iste pariatur quas mollitia?
                Magnam, nemo. Ex, voluptates aperiam? Sed optio, dolores, nam nostrum dolorum, eaque distinctio expedita minima ratione eos nobis quidem modi tempore ad amet suscipit autem soluta ipsum quis repudiandae quia.
                Deserunt dolores aperiam quos ipsum impedit! Dolorum saepe voluptates facere pariatur consequatur itaque nesciunt, illum exercitationem porro voluptate quasi quaerat quam culpa sit. Rem totam voluptatibus mollitia deleniti alias dicta!
                Consectetur, minus fugiat illo voluptas nam non quam veritatis cumque voluptatem deserunt officiis facere voluptatum voluptate veniam tempore commodi quia. Error ex natus molestias vero tempore alias, omnis velit. Corrupti?
            </p>
            </article>
            <article className='theory__main__article' id='chords'>
            <h2 className="theory__main__article__header">Аккорды</h2>
            <p className="theory__main__article__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe optio eius at suscipit ipsam dolores explicabo, reprehenderit, minus, impedit praesentium enim aspernatur in ullam delectus ab perferendis doloremque nam recusandae!
                Necessitatibus a eius, dolores perspiciatis aliquam facilis tempore praesentium ea, fuga debitis distinctio dignissimos, labore natus illum vitae et velit aliquid! Ut voluptatibus blanditiis a rem sequi magni molestiae explicabo!
                Sit magni velit et, laboriosam at cum corporis ipsa assumenda tempora deleniti qui neque! Ipsa reiciendis temporibus magnam nisi. Quaerat reprehenderit magni, animi placeat fuga recusandae nesciunt. Perspiciatis, odit aut.
                Quam nulla consequuntur, est soluta illum at mollitia non perferendis id laudantium, placeat similique incidunt quia. Et amet explicabo libero dolores, fugiat dolorum facere dignissimos nisi eius culpa quibusdam non!
                Deleniti dolorum non accusamus voluptatem. Architecto, perferendis. Fugiat, animi aut. Fuga, rerum illum? Quis, porro dolor, suscipit quibusdam quidem non rem aspernatur ratione harum explicabo adipisci deserunt omnis commodi delectus.
                Possimus harum aliquam magni quibusdam explicabo praesentium eius sint voluptatem ab molestias porro, aut est dicta fugiat perferendis dolores amet exercitationem, tempore distinctio quidem! Incidunt, enim. Quisquam, ut. Vero, autem?
                Voluptatem consequuntur vitae asperiores, minus laborum ipsam cum, nesciunt nemo id rerum quasi quis reiciendis fuga voluptates esse optio, deserunt sint. In corrupti consequuntur animi amet iste pariatur quas mollitia?
                Magnam, nemo. Ex, voluptates aperiam? Sed optio, dolores, nam nostrum dolorum, eaque distinctio expedita minima ratione eos nobis quidem modi tempore ad amet suscipit autem soluta ipsum quis repudiandae quia.
                Deserunt dolores aperiam quos ipsum impedit! Dolorum saepe voluptates facere pariatur consequatur itaque nesciunt, illum exercitationem porro voluptate quasi quaerat quam culpa sit. Rem totam voluptatibus mollitia deleniti alias dicta!
                Consectetur, minus fugiat illo voluptas nam non quam veritatis cumque voluptatem deserunt officiis facere voluptatum voluptate veniam tempore commodi quia. Error ex natus molestias vero tempore alias, omnis velit. Corrupti?
            </p>
            </article>
            <article className='theory__main__article' id='scales'>
            <h2 className="theory__main__article__header">Тональности</h2>
            <p className="theory__main__article__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe optio eius at suscipit ipsam dolores explicabo, reprehenderit, minus, impedit praesentium enim aspernatur in ullam delectus ab perferendis doloremque nam recusandae!
                Necessitatibus a eius, dolores perspiciatis aliquam facilis tempore praesentium ea, fuga debitis distinctio dignissimos, labore natus illum vitae et velit aliquid! Ut voluptatibus blanditiis a rem sequi magni molestiae explicabo!
                Sit magni velit et, laboriosam at cum corporis ipsa assumenda tempora deleniti qui neque! Ipsa reiciendis temporibus magnam nisi. Quaerat reprehenderit magni, animi placeat fuga recusandae nesciunt. Perspiciatis, odit aut.
                Quam nulla consequuntur, est soluta illum at mollitia non perferendis id laudantium, placeat similique incidunt quia. Et amet explicabo libero dolores, fugiat dolorum facere dignissimos nisi eius culpa quibusdam non!
                Deleniti dolorum non accusamus voluptatem. Architecto, perferendis. Fugiat, animi aut. Fuga, rerum illum? Quis, porro dolor, suscipit quibusdam quidem non rem aspernatur ratione harum explicabo adipisci deserunt omnis commodi delectus.
                Possimus harum aliquam magni quibusdam explicabo praesentium eius sint voluptatem ab molestias porro, aut est dicta fugiat perferendis dolores amet exercitationem, tempore distinctio quidem! Incidunt, enim. Quisquam, ut. Vero, autem?
                Voluptatem consequuntur vitae asperiores, minus laborum ipsam cum, nesciunt nemo id rerum quasi quis reiciendis fuga voluptates esse optio, deserunt sint. In corrupti consequuntur animi amet iste pariatur quas mollitia?
                Magnam, nemo. Ex, voluptates aperiam? Sed optio, dolores, nam nostrum dolorum, eaque distinctio expedita minima ratione eos nobis quidem modi tempore ad amet suscipit autem soluta ipsum quis repudiandae quia.
                Deserunt dolores aperiam quos ipsum impedit! Dolorum saepe voluptates facere pariatur consequatur itaque nesciunt, illum exercitationem porro voluptate quasi quaerat quam culpa sit. Rem totam voluptatibus mollitia deleniti alias dicta!
                Consectetur, minus fugiat illo voluptas nam non quam veritatis cumque voluptatem deserunt officiis facere voluptatum voluptate veniam tempore commodi quia. Error ex natus molestias vero tempore alias, omnis velit. Corrupti?
            </p>
            </article>
        </main>
    </div>
    </>
  )
}
