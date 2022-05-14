import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import './topbar.css'
import logo from '../../img/logo/logo.svg'


export default function TopBar() {
    const {user, dispatch} = useContext(Context)
    const PF = "http://localhost:5000/images/"
    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }

    return (
    <div className='top'>
        <div className="topCenter">
            <ul className='topList menuList'>
                <li className='topListItem menuItem'>
                    <Link className="link" to="/"><img className="logo" src={logo} alt="logo" /></Link>
                </li>
                <li className='topListItem menuItem'>
                    <Link className="link" to="/theory">теория</Link>
                </li>
                <li className='topListItem menuItem'>
                    <Link className="link" to="/exercises">упражнения</Link>
                </li>
                <li className='topListItem menuItem'>
                    <Link className="link" to="/instruments">инструменты</Link>
                </li>
                <li className='topListItem menuItem'>
                    <Link className="link" to="/blog">блог</Link>
                </li>
                <li className='topListItem menuItem' style={user ? {marginRight: 15} : {marginRight: 0}}>
                    <Link className="link" to="/contact">контакты</Link>
                </li>
                <li className='topListItem'>
                    {user && <Link className="link" to="/write">WRITE</Link>}
                </li>
                <li className='topListItem' onClick={handleLogout}>
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            
            {
                user ? (
                    <Link to="/settings">
                        <img 
                        className="topImage" 
                        src={PF + user.profilePic}
                        alt="profile" 
                        />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )
            }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}