import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./0.App"; // react-router-6基本
// import App from "./1.App"; // 初步建立mini-react-router
import App from "./2.App"; // 实现路由切换
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
