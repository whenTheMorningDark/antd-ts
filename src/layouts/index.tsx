import React from "react";
import SideBar from "./components/sidebar";
// import Main from "./components/main";
import "./index.css";
// import { sayHello } from "./util";
// import Cart from "@views/cart";

const layouts: React.FC = ({ children }) => {
  console.log(children);
  return (
    <div className="layouts">
      <SideBar />
      <div className="main">{children}</div>
      {/* <Main /> */}
    </div>
  );
};

export default layouts;
