import "./login.css";
import { useContext, useRef } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../context/Context";
import { authUser } from "../../context/ActionCreators";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, user, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    authUser(dispatch, userRef.current.value, passwordRef.current.value);
  };

  return (
    <div className='login'>
      {user && <Navigate to='/settings' replace={true} />}
      <span className='loginTitle'>Авторизация</span>
      <form action='' className='loginForm' onSubmit={handleSubmit}>
        <label>Модератор</label>
        <input className='loginInput' type='text' placeholder='Введите email...' ref={userRef} />
        <label>Пароль</label>
        <input className='loginInput' type='password' placeholder='Введите пароль...' ref={passwordRef} />
        <button className='loginButton' type='submit' disabled={isFetching}>
          Войти
        </button>
      </form>
    </div>
  );
}
