import React, { useState, useEffect, memo } from "react";
// import LayOut from "./layouts";
import { Switch, Route, Redirect } from "react-router-dom";
// import Cart from "@views/cart";
import LayOut from "@/layouts";
// import Dashboard from "@/views/dashboard";
import PropTypes from "prop-types";
import { routesType } from "@/config/routes";
import { tokenKey, getToken } from "@/utils/user";
import WhiteRouter from "@/components/whiteRouter";
import { findChildrenTree } from "@/utils/tree";
interface Iprops {
  routes: routesType[];
}
const AuthorRouter: React.FC<Iprops> = ({ routes }) => {
  console.log(routes);
  const token = getToken(tokenKey);
  console.log(token, "tokenaaaaaaaaaaaaaaa");
  const [initRoutes, setInitRoutes] = useState(routes);
  useEffect(() => {
    setInitRoutes(findChildrenTree(routes));
  }, [routes]);
  const renderRoutes = (routes: routesType[]) => {
    return routes.map((route, index) => (
      // Render more <Route>s with the same paths as
      // above, but different components this time.
      <Route key={index} path={route.path} component={route.component} />
    ));
  };
  return (
    <>
      {token ? (
        <LayOut>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/dashboard" push />}
          ></Route>
          <Route
            exact
            path="/Login"
            render={() => <Redirect to="/dashboard" push />}
          ></Route>
          <Switch>{renderRoutes(initRoutes)}</Switch>
        </LayOut>
      ) : (
        <Switch>
          <WhiteRouter />
        </Switch>
      )}
    </>
  );
};
AuthorRouter.propTypes = {
  routes: PropTypes.array.isRequired
};
export default memo(AuthorRouter);
