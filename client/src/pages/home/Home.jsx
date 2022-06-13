import './home.css'

export default function Home() {

  return (
        <div className="toHome">
          <div className="toHome__opacity"></div>
            <div className="noOpacity">
              <h1 className="home__header">
                music tutor
              </h1>
              <h2 className="home__h2">
                исследуйте мир музыки!
              </h2>
              <div className="home__maintext">
                <div className="home__item">
                Сервис предназначен для ознакомления с основами теории музыки и часто используемыми музыкальными инструментами
                </div>
                <div className="home__item">
                Хотите почитать статьи на смежные темы от наших авторов? Рекомендуем посетить наш блог
                </div>
                <div className="home__item">
                Ознакомиться с представлениями о базовой музыкальной теории можно, непосредственно, в данном разделе
                </div>
                <div className="home__item">
                Если вы захотите проверить свои теоретические способности, переходите в раздел упражнения, и тренируйтесь, сколько угодно
                </div>
              </div>
              
              <div className="home__footer">
                Проводите время за любимым занятием и обучайтесь интерактивно!
              </div>
            </div>
        </div>
  )
}
