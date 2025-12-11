import React, { useReducer, ChangeEvent, FormEvent } from "react";
import styles from "./authorization.module.scss";
import picture from "../../images/Variant15.png";
import logo from "../../images/zaqaz.svg";
import { initialState, authReducer } from "./reducers/authorizationReduser";
import AuthPIN from "./authPIN";
import AuthError from "./authError";
import AuthorizationForm from "./authorizationForm";
import { AuthState } from "./reducers/authorizationReduser";
import validatePhoneNumber from "../../Utils/validatePhoneNumber";
import formatPhoneNumber from "../../Utils/formatPhoneNumber";
import { SET_PHONE_VALUE, SET_SHOW_PIN, SET_CODE } from "./reducers/authorizationActions";
import { LoginData } from "../../types/authorization";
import { userAPI } from "../../api/api";

interface AuthorizationProps {
  state: AuthState;
}

const Authorization: React.FC<AuthorizationProps> = () => { 

  const [state, dispatch] = useReducer(authReducer, initialState);

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedPhoneNumber = formatPhoneNumber(value);
    dispatch({ type: SET_PHONE_VALUE, payload: formattedPhoneNumber });
  };

  const handleOpenAuthPIN = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state.phoneValue)
    const isShow = validatePhoneNumber(state.phoneValue)
    if (isShow) {
      dispatch({ type: SET_SHOW_PIN, payload: true });
      console.log(state.isShowPin)
    }
  };

  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...state.code];
    newCode[index] = value;
    dispatch({ type: SET_CODE, payload: {index: index, value: value} });
  };

  const handleSubmitLogIn = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
  
    const loginData: LoginData = {
      phone: state.phoneValue, 
      code: state.code, 
    };
  
    try {
      const response = await userAPI.logIn(loginData);
      console.log("Успешный вход:", response);
  
      // Можно, например, сохранить токен
      if (response.token) {
        localStorage.setItem("key", response.token);
      }
    } catch (error) {
      console.error("Ошибка входа:", error);
    }
  };

  return (
    <div className={styles['authorization']}>
      <div className={styles["authorization__main"]}>
        {" "}
        <div className={styles["authorization__header"]}>
          <img  src={logo} className={styles["authorization__logo"]} alt="logo-zaqaz"></img>
        </div>
        <div className={styles["authorization__form-container"]}>
        {state.isShowPin? <AuthPIN submitLogIn={handleSubmitLogIn} codeChange={handleCodeChange} state={state} ></AuthPIN>: 
        state.isErrorAuth? <AuthError></AuthError> :
        <AuthorizationForm openAuthPIN={handleOpenAuthPIN} state={state} phoneChange={handlePhoneChange}></AuthorizationForm>
        }
        </div>
      </div>
      <img src={picture} className={styles["authorization__picture"]} alt="picture-orange"></img>
    </div>
  );
}

export default Authorization;
