import React from "react";
import style from "./LoginPage.module.css";
const LoginPage = () => {
  return (
    <form className={style.login}>
      <h1>Login</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
