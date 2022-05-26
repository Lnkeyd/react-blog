import { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import "./settings.css";
import axios from "axios";
import { deleteUser, getUser } from "../../context/ActionCreators";
import { UpdateFailure, UpdateStart, UpdateSuccess } from "../../context/Actions";
import placeholderUser from "../../img/user.png";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function Settings() {
  const PF = "/api/images/";
  const data = useParams();
  const navigate = useNavigate();

  const { user, dispatch } = useContext(Context);
  const [currentUser, setCurrentUser] = useState({ username: "", email: "", password: "" });
  useEffect(() => {
    if (data.id) {
      getUser(dispatch, data.id).then((data) => setCurrentUser(data));
    } else if (user) {
      setCurrentUser(user);
    }
  }, []);

  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(UpdateStart());

    const updatedUser = JSON.parse(JSON.stringify(currentUser));

    try {
      if (file) {
        const data = new FormData();

        var filename = file.name;
        filename = filename.replace(currentUser._id, "");
        updatedUser.profilePic = filename;

        data.append("name", currentUser._id + filename);
        data.append("file", file);
        updatedUser.profilePic = filename;
        try {
          await axios.post("/api/upload", data);
        } catch (err) {}
      } else {
        delete updatedUser.profilePic;
      }
      const res = await axios.put("/api/users/" + updatedUser._id, updatedUser);
      setSuccess(true);
      if (data && Object.keys(data).length === 0) {
        dispatch(UpdateSuccess(res.data));
      }
      setCurrentUser(res.data);
    } catch (err) {
      dispatch(UpdateFailure());
    }
  };
  const handleDelete = async () => {
    deleteUser(dispatch, user._id, currentUser._id);
    if (data && data.id) {
      navigate("/admin", { replace: true });
    }
  };

  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>
            {data && data.id ? `Update ${currentUser.username}'s Account` : "Обновить данные"}
          </span>
          <span className='settingsDeleteTitle' onClick={handleDelete}>
            {data && data.id ? `Delete ${currentUser.username} Account` : "Удалить аккаунт"}
          </span>
        </div>
        <form action='' className='settingsForm' onSubmit={handleSubmit}>
          <label>Изображение профиля</label>
          <div className='settingsPP'>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : currentUser.profilePic
                  ? PF + currentUser.profilePic
                  : placeholderUser
              }
              alt=''
              draggable={false}
            />
            <label htmlFor='fileInput'>
              <i className='settingsPPIcon fa-solid fa-user'></i>
            </label>
            <input
              type='file'
              id='fileInput'
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label htmlFor='username'>Модератор</label>
          <input
            type='text'
            name='username'
            placeholder={"username"}
            onChange={handleChange}
            value={currentUser.username || ""}
          />
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder={"placeholder"}
            onChange={handleChange}
            value={currentUser.email || ""}
          />
          <label htmlFor='password'>Пароль</label>
          <input
            type='password'
            name='password'
            placeholder='password'
            onChange={handleChange}
            value={currentUser.password || ""}
          />
          <button className='settingsSubmit defaultButton' type='submit'>
            Обновить
          </button>
          {success && <span style={{ color: "teal" }}>Ваш профиль был обновлен...</span>}
        </form>
      </div>
    </div>
  );
}
