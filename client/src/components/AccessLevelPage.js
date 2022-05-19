import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../context/ActionCreators";
import { Context } from "../context/Context";

export const AccessLevelPage = ({ redirectTo, accessLevel }) => {
  const { user, isFetching, dispatch } = useContext(Context);

  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);

  if ((user === null && isFetching === false) || user === undefined || (user && user.level < accessLevel)) {
    return <Navigate to={redirectTo} replace={true} />;
  } else {
    return (
      <>
        <Outlet />
      </>
    );
  }
};
