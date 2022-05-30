import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { logoutUser } from "../../context/ActionCreators";
import "./topbar.css";
import logo from "../../img/logo/logo.svg";
import placeholderUser from "../../img/user.png";

export default function TopBar() {
  const [toggleBurger, setToggleBurger] = useState(false)
  const { user, isFetching, dispatch } = useContext(Context);
  const PF = "/api/images/";
  const handleLogout = async () => {
    logoutUser(dispatch);
  };
  const handleMobile = () => {
    setToggleBurger(!toggleBurger)
  }

  useEffect(() => {
    setToggleBurger(false)
  },[])

  return (
    <>
    <div className='top'>
      <div className='topCenter desctopMenu'>
        <div className='menuItem'>
          <Link className='link' to='/'>
            <img className='logo' src={logo} alt='logo' draggable={false} />
          </Link>
        </div>
        <ul className='topList menuList'>
          { !user && (
            <>
            <li className='topListItem menuItem'>
              <Link className='link' to='/theory'>
                теория
              </Link>
            </li>
            <li className='topListItem menuItem'>
              <Link className='link' to='/exercises'>
                упражнения
              </Link>
            </li>
            <li className='topListItem menuItem'>
              <Link className='link' to='/instruments'>
                инструменты
              </Link>
            </li>
            </>
          )}
          <li className='topListItem menuItem'>
            <Link className='link' to='/blog'>
              блог
            </Link>
          </li>
          {! user && (
            <li className='topListItem menuItem'>
              <Link className="link" to="/contact">контакты</Link>
            </li>
          )}
          <li className='topListItem menuItem'>
            {user && (
              <Link className='link' to='/write'>
                создать пост
              </Link>
            )}
          </li>
          <li className='topListItem menuItem'>
            {user && user.level === 3 && (
              <Link className='link' to='/admin'>
                админ панель
              </Link>
            )}
          </li>
        </ul>
        <div className='topRight'>
          {user ? (
            <>
              <Link to='/settings'>
                <img
                  className='topImage'
                  src={user.profilePic ? PF + user.profilePic : placeholderUser}
                  alt='profile'
                  draggable={false}
                />
              </Link>
              <div className='exitBtn' onClick={handleLogout}>
                Выйти
              </div>
            </>
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                <Link className='link' to='/login'>
                  Admin
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className='mobileMenu' style={user && {top: 'calc(100vh - 70px)', justifyContent: 'space-around'}}>
        {/* here you put some code with logo and menu-burger */}
          {!user && (
            <>
            <div className="topCenter">
                <div className='menuItem'>
                  <Link className='link' to='/'>
                    <img className='logo' src={logo} alt='logo' draggable={false} />
                  </Link>
                </div>
                <li className='topListItem menuItem'>
                {!toggleBurger ? (
                  <div className="burger-menu" onClick={handleMobile}>
                    <span/>
                  </div>
                ) : (
                  <div className="burger-cross" onClick={handleMobile}/>
                )}
              </li>
            </div>
            </>
          )}
        
        {user && (
          <>
            <li className='topListItem menuItem'>
            <Link className='link' to='/blog'>
                блог
            </Link>
          </li>
          <li className='topListItem menuItem'>
            <Link className='link' to='/write'>
              +пост
            </Link>
          </li>
          </>
        )}
        {user && user.level === 3 && (
          <li className='topListItem menuItem'>
            <Link className='link' to='/admin'>
              админ
            </Link>
          </li>
        )}
      </div>
    </div>
    {toggleBurger && (
    <div className="mobileItems">
        <ul className='mobileList'>
            <li className='topListItem menuItem'>
              <Link className='link' to='/theory' onClick={() => {setToggleBurger(false)}}>
                теория
              </Link>
            </li>
            <li className='topListItem menuItem'>
              <Link className='link' to='/exercises' onClick={() => {setToggleBurger(false)}}>
                упражнения
              </Link>
            </li>
            <li className='topListItem menuItem'>
              <Link className='link' to='/instruments' onClick={() => {setToggleBurger(false)}}>
                инструменты
              </Link>
            </li>
          <li className='topListItem menuItem'>
            <Link className='link' to='/blog' onClick={() => {setToggleBurger(false)}}>
              блог
            </Link>
          </li>
          <li className='topListItem menuItem'>
            <Link className="link" to="/contact" onClick={() => {setToggleBurger(false)}}>контакты</Link>
          </li>
          <li className='topListItem menuItem'>
            <Link className='link' to='/login' onClick={() => {setToggleBurger(false)}}>Admin</Link>
          </li>
        </ul>
    </div>)}
  </>
  );
}
