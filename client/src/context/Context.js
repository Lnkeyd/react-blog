import { createContext, useEffect, useReducer } from "react";
import { getUser } from "./ActionCreators";
import Reducer from "./Reduce";

const INITIAL_STATE = {
  user: null,
  isFetching: true,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    getUser(dispatch);
  }, []);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}>
      {children}
    </Context.Provider>
  );
};
