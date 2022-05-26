import React, { /*useContext,*/ useContext, useEffect, useState } from "react";
// import { Context } from "../../context/Context";
import { createUser, getUsers } from "../../context/ActionCreators.js";
import placeholderUser from "../../img/user.png";
import { Context } from "../../context/Context";

import "./admin.css";
import { Link } from "react-router-dom";

export default function Admin() {
  const { dispatch, user, isFetching } = useContext(Context);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const PF = "/api/images/";

  // const [posts, setPosts] = useState([]);
  // const { search } = useLocation();
  // const { user, dispatch } = useContext(Context);
  const getAllUsers = () => getUsers(dispatch, 2).then((data) => setUsers(data));

  useEffect(() => {
    getAllUsers();
  }, []);

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const addNewUser = () => {
    createUser(newUser).then(() => getAllUsers());
  };

  return (
    <div id='admin'>
      <div className='users'>
        <div className='currentModerators'>
          <h2>Текущие модераторы:</h2>
          {users !== undefined && users.length > 0 ? (
            <>
              <div className='searchWrapper'>
                <input
                  className='search defaultInput'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Begin writing nick or email'
                />
                {search.length > 0 && (
                  <button className='clearSearch' onClick={() => setSearch("")}>
                    X
                  </button>
                )}
                {/* fa-icon-cross */}
              </div>
              <ul className='usersList'>
                {users
                  .filter((user) => user.username.indexOf(search) != -1 || user.email.indexOf(search) != -1)
                  .map((user) => (
                    <Link to={`/admin/${user._id}`} key={user._id}>
                      <li className='user'>
                        <div className='userImg'>
                          <img
                            src={user.profilePic ? PF + user.profilePic : placeholderUser}
                            alt=''
                            draggable={false}
                          />
                        </div>
                        <span>{user.username}</span>
                        <span>{user.email}</span>
                      </li>
                    </Link>
                  ))}
              </ul>
            </>
          ) : (
            <h4>модераторы не найдены</h4>
          )}
        </div>
        <div className='newUserForm'>
          <h2>Создать нового модератора</h2>
          <div>
            <label htmlFor='username'>Модератор</label>
            <input
              name='username'
              type={"text"}
              value={newUser.username}
              onChange={handleChange}
              className={"defaultInput"}
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              type={"text"}
              value={newUser.email}
              onChange={handleChange}
              className={"defaultInput"}
            />
          </div>
          <div>
            <label htmlFor='password'>Пароль</label>
            <input
              name='password'
              type={"password"}
              value={newUser.password}
              onChange={handleChange}
              className={"defaultInput"}
            />
          </div>
          <button className='defaultButton' onClick={addNewUser}>
            Создать
          </button>
        </div>
      </div>
    </div>
  );
}
