import axios from "axios";
import {
  DeleteUser,
  LoginFailure,
  LoginStart,
  LoginSuccess,
  Logout,
  UpdateFailure,
  UserFailure,
  UserStart,
  UserSuccess,
} from "./Actions";

const userEndpoint = "/api/users";
const authEndpoint = "/api/auth";

export const authUser = async (dispatch, username, password) => {
  dispatch(LoginStart());
  try {
    const res = await axios.post(`${authEndpoint}/login`, {
      username,
      password,
    });
    if (res.status === 200) {
      dispatch(LoginSuccess());
      getUser(dispatch);
    }
  } catch (err) {
    dispatch(LoginFailure());
  }
};

export const logoutUser = async (dispatch) => {
  try {
    await axios.post(`${authEndpoint}/logout`);
    dispatch(Logout());
  } catch {
    dispatch(LoginFailure());
  }
};

export const getUser = async (dispatch, id) => {
  try {
    if (id) {
      const res = await axios.get(`${userEndpoint}/${id}`);
      return res.data;
    } else {
      dispatch(UserStart());
      const res = await axios.get(userEndpoint);

      dispatch(UserSuccess(res.data));
    }
  } catch {
    dispatch(UserFailure());
  }
};

export const deleteUser = async (dispatch, userId, targetId) => {
  try {
    await axios.delete(`${userEndpoint}/` + targetId);
    if (userId == targetId) {
      dispatch(DeleteUser());
    }
  } catch (err) {
    dispatch(UpdateFailure());
  }
};

export const getUsers = async (dispatch, level) => {
  try {
    const res = await axios.get(`${userEndpoint}/all/${level}`);
    return res.data;
  } catch (err) {
    dispatch(UserFailure());
    console.log(err);
  }
};

export const createUser = async (data) => {
  try {
    await axios.post(`${authEndpoint}/register`, data);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
