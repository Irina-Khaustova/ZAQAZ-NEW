import React, { useEffect, useReducer } from "react";
import styles from "./authorization.module.scss";
import picture from "../../images/Variant15.png";
import logo from "../../images/zaqaz.svg";
import { AuthAction, initialState, authReducer } from "./reducers/authorizationReduser";
import AuthPIN from "./authPIN";
import AuthError from "./authError";
import AuthorizationForm from "./authorizationForm";

function Authorization() {

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <div className={styles['authorization']}>
      <div className={styles["authorization__main"]}>
        {" "}
        <div className={styles["authorization__header"]}>
          <img  src={logo} className={styles["authorization__logo"]} alt="logo-zaqaz"></img>
        </div>
        <div className={styles["authorization__form-container"]}>
        {state.isShowPin? <AuthPIN></AuthPIN>: 
        state.isErrorAuth? <AuthError></AuthError> :
        <AuthorizationForm></AuthorizationForm>
        }
        </div>
      </div>
      <img src={picture} className={styles["authorization__picture"]} alt="picture-orange"></img>
    </div>
  );
}

export default Authorization;
