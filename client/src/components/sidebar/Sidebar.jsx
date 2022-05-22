// import { useEffect, useState } from "react";
import "./sidebar.css";
// import axios from "axios";

export default function Sidebar() {
  // const [cats, setCats] = useState([]);

  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axios.get("/api/categories");
  //     setCats(res.data);
  //   };
  //   getCats();
  // }, []);

  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          className='sidebarImg'
          src='https://images.pexels.com/photos/3007347/pexels-photo-3007347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt=''
          draggable={false}
        />
        <p>
          Lorem ipsum, dolor sit am quam commodi natus, maiores similique obcaecati quaerat sit am quam commodi natus,
          maiores similique obcaecati.
        </p>
      </div>
      {/* <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className='link'>
              <li className='sidebarListItem'>{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fa-brands fa-facebook-f'></i>
          <i className='sidebarIcon fa-brands fa-twitter'></i>
          <i className='sidebarIcon fa-brands fa-twitch'></i>
          <i className='sidebarIcon fa-brands fa-instagram'></i>
        </div>
      </div> */}
    </div>
  );
}
