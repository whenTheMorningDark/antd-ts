import React from "react";
// import LayOut from "./layouts";

// import { sayHello } from "./util";
// import Cart from "@views/cart";
const Main: React.FC = ({ children }) => {
  console.log(children);
  return (
    <div className="Main">
      {/* <AuthorRouter /> */}
      {children}
      {/* <LayOut /> */}
    </div>
  );
};

export default Main;
