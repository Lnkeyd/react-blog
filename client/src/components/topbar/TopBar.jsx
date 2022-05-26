import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { logoutUser } from "../../context/ActionCreators";
import "./topbar.css";
import logo from "../../img/logo/logo.svg";
import placeholderUser from "../../img/user.png";

export default function TopBar() {
  const { user, isFetching, dispatch } = useContext(Context);
  const PF = "/api/images/";
  const handleLogout = async () => {
    logoutUser(dispatch);
  };

  return (
    <div className='top'>
      <div className='topCenter'>
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
                Write post
              </Link>
            )}
          </li>
          <li className='topListItem menuItem'>
            {user && user.level === 3 && (
              <Link className='link' to='/admin'>
                Admin panel
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
                Logout
              </div>
            </>
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                <Link className='link' to='/login'>
                  LOGIN
                </Link>
              </li>
            </ul>
          )}
          {/* <i className='topSearchIcon fa-solid fa-magnifying-glass'></i> */}
        </div>
      </div>
      <div className='mobileMenu'>
        <li className='topListItem menuItem'>
          <Link className='link' to='/blog'>
            Blog
          </Link>
        </li>
        {user && (
          <li className='topListItem menuItem'>
            <Link className='link' to='/write'>
              Write post
            </Link>
          </li>
        )}
        {user && user.level === 3 && (
          <li className='topListItem menuItem'>
            <Link className='link' to='/admin'>
              Admin panel
            </Link>
          </li>
        )}
      </div>
    </div>
  );
}
