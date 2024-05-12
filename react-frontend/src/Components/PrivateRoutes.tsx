import React, { ComponentType } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../state/authState";

interface PrivateRouteProps {
  component: ComponentType;
  path: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const auth = useRecoilValue(authState);

  return (
    <Route
      {...rest}
      element={auth.isAuthenticated ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;