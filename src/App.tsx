import React from "react";
import "./App.css";
import { constRouter } from "@/config/routes";
// import { tokenKey, getToken } from "@/utils/user";
import { BrowserRouter as Router } from "react-router-dom";
// import LayOut from "./layouts";

// import { sayHello } from "./util";
// import Cart from "@views/cart";
import AuthorRouter from "@/components/authorRouter";
console.log("zouzouzozu");
const App: React.FC = () => {
  // const token = getToken(tokenKey);
  return (
    <div className="App">
      <Router>
        <AuthorRouter routes={constRouter} />
      </Router>
    </div>
  );
};

export default App;
