import React from "react";
// import LayOut from "./layouts";
import { whiteRouter, constRouter } from "@/config/routes";
import { routesType } from "@/config/routes";
import { Route, useLocation, useHistory, Redirect } from "react-router-dom";
import login from "@views/login";
const WhiteRouter: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const whitePath = whiteRouter.map((v) => v.path);
  console.log(location);
  const pathname = location.pathname;
  const renderRoutes = (routes: routesType[]) => {
    return routes.map((route, index) => (
      <Route key={index} path={route.path} component={route.component} />
    ));
  };
  const renderLogin = () => {
    // <Route component={login}>
    //   <Redirect to={`Login`} />
    // </Route>;
    <Route exact path="/Login" component={login}></Route>;
    console.log("zxczxc");
    history.push("/Login");
  };
  return (
    <>
      {whitePath.indexOf(pathname) !== -1
        ? renderRoutes(whiteRouter)
        : renderLogin()}
    </>
  );
};
export default WhiteRouter;
