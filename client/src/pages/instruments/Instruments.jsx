import React from 'react'
import './instruments.css'
import modelGuitar from './models/guitar.gltf'
import modelPiano from './models/piano.gltf'
import Poster from './poster.webp'

export default function Instruments() {
  return (
      <>
      <h1 className="header">AR-модели</h1>
      {/* <model-viewer> HTML element */}
      <div className="flex">
        <div className="item">
          <h2 className="itemHeader">Пианино</h2>
          <model-viewer bounds="tight" enable-pan src={modelPiano} ar ar-modes="scene-viewer webxr quick-look" camera-controls environment-image="neutral" poster="poster.webp" shadow-intensity="1">
            <button className="Hotspot" slot="hotspot-1" data-position="0.10311043161480096m 0.03136855791328863m 0.44048808402476786m" data-normal="0.4379191054388588m 0.6712524671169783m 0.5980359374494142m" data-visibility-attribute="visible">
                <div className="HotspotAnnotation">●Педали● - это рычаги, что приводятся в действие нажатием ногой. Современные инструменты имеют от двух до трех педалей, чья основная функция – менять звучание струн. На рояле или фортепиано эти механизмы определяют тембр звука, его продолжительность и динамику.</div>
            </button><button className="Hotspot" slot="hotspot-2" data-position="-0.4187114809818611m 0.4893797543066202m 0.543112440346326m" data-normal="0m 0.999999999999991m 1.3435886108395827e-7m" data-visibility-attribute="visible">
                <div className="HotspotAnnotation">Количество клавиш у фортепиано и пианино равно 88 для стандартных современных инструментов. Клавиши обозначают производные ступени-ноты.</div>
            </button><button className="Hotspot" slot="hotspot-3" data-position="-0.19983805249307746m 0.5934102556451553m -0.44407133662828635m" data-normal="0m 0.999999999999991m 1.3435886108395827e-7m" data-visibility-attribute="visible">
                <div className="HotspotAnnotation">Рояль сохраняет форму оригинального фортепиано, в котором струны натянуты горизонтально и обладают большим потенциалом для создания объемного звучания.</div>
            </button>
            <div className="progress-bar hide" slot="progress-bar">
                <div className="update-bar"></div>
            </div>
            <button slot="ar-button" id="ar-button">
                View in your space
            </button>
            <div id="ar-prompt">
                <img src="ar_hand_prompt.png" alt='ar-prompt'/>
            </div>
          </model-viewer>     
          <script src="script.js"></script>
        </div>
        <div className="item">
          <h2 className="itemHeader">Гитара</h2>
          <model-viewer bounds="tight" enable-pan src={modelGuitar} ar ar-modes="scene-viewer webxr quick-look" camera-controls environment-image="neutral" poster={Poster} shadow-intensity="1" camera-orbit="89.25deg 91.95deg auto">
            <button className="Hotspot" slot="hotspot-1" data-position="0.11611111033293926m -0.1343806201727089m 0.34002556064709455m" data-normal="1m 0m 0m" data-visibility-attribute="visible">
                <div className="HotspotAnnotation">●Тремоло●
                    механическое устройство в виде рычага, дающее возможность изменения высоты тона с помощью движения этого рычага.</div>
            </button><button className="Hotspot" slot="hotspot-2" data-position="0.1161111103329387m 0.21345377036236207m 0.5326200212907104m" data-normal="1m 0m 0m" data-visibility-attribute="visible">
                <div className="HotspotAnnotation">●Дека●
                    корпус гитары выполнен из красного дерева, формы мягкие и округлые</div>
            </button><button className="Hotspot" slot="hotspot-3" data-position="0.12190731411896084m 0.012542284552528454m 0.22027403221758113m" data-normal="1m 0m 0m" data-visibility-attribute="visible">
                <div className="HotspotAnnotation">●Хамбакер●
                    Звукосниматели такого типа обеспечивают плотность и мощность звучания инструмента</div>
            </button>
            <div className="progress-bar hide" slot="progress-bar">
                <div className="update-bar"></div>
            </div>
            <button slot="ar-button" id="ar-button">
                View in your space
            </button>
            <div id="ar-prompt">
                <img src="ar_hand_prompt.png" alt='ar-prompt'/>
            </div>
          </model-viewer>  
          <script src="script.js"></script>
        </div>
      </div>
    {/* Loads <model-viewer> for browsers: */}
    {/* <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script> */}
    </>
  )
}
