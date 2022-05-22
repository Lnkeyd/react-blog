const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "DELETE_USER":
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    case "UPDATE_START":
      return {
        ...state,
        isFetching: true,
      };
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "UPDATE_FAILURE":
      return {
        user: state.user,
        isFetching: false,
        error: true,
      };

    case "USER_START":
      return {
        user: null,
        isFetching: true,
        error: null,
      };
    case "USER_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: null,
      };
    case "USER_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default Reducer;

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
