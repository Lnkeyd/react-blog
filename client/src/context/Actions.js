export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = () => ({
  type: "LOGIN_SUCCESS",
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Logout = () => ({
  type: "LOGOUT",
});

export const UpdateStart = (userCredentials) => ({
  type: "UPDATE_START",
});

export const UpdateSuccess = (user) => ({
  type: "UPDATE_SUCCESS",
  payload: user,
});

export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});

export const DeleteUser = () => ({
  type: "DELETE_USER",
});

export const UserStart = () => ({
  type: "USER_START",
});

export const UserSuccess = (user) => ({
  type: "USER_SUCCESS",
  payload: user,
});

export const UserFailure = () => ({
  type: "USER_FAILURE",
});
