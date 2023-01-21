import { ReactNode } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { RequireAuthProps } from "./RequireAuthProps";

export const RequireAuth = (props: RequireAuthProps): JSX.Element => {
  // const user = useSelector(userSelector);
  // const dispatch = useDispatch();
  const { children, isAuth, isRequire } = props;

  let location = useLocation();

  if (isAuth === false && isRequire === true) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export const NoRequireAuth = (props: any) => {
  const { isAuth, to = "/", children } = props;
  return !isAuth ? children : <Navigate to={to} replace />;
};
