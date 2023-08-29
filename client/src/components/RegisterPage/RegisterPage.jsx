import React from "react";
import Style from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={Style.container}>
      <form className={Style.register}>
        <h1 className={Style.h1}>Register</h1>
        <div className={Style.cont}>
          <input className={Style.input} type="text" placeholder="Username" />
          <input className={Style.input} type="text" placeholder="Email" />
        </div>

        <div className={Style.cont}>
          <input
            className={Style.input}
            type="password"
            placeholder="Password"
          />
          <input
            className={Style.input}
            type="password"
            placeholder="Repeat Passowrd"
          />
        </div>
        <button className={Style.button}>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
