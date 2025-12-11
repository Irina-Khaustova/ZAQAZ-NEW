import React from "react";
import { FC, FormEventHandler , ChangeEventHandler} from "react";
import styles from "./authorizationForm.module.scss";
import {  AuthState } from "../reducers/authorizationReduser";

interface AuthorizationFormProps {
  openAuthPIN: FormEventHandler<HTMLFormElement>,
  state: AuthState,
  phoneChange: ChangeEventHandler,
}

const AuthorizationForm: FC<AuthorizationFormProps> = ({openAuthPIN, state, phoneChange}) => {

  return (
    <div className={styles["authorization-form"]}>
      <h1>Добавить номер</h1>
      <p>Мы должны подтвердить его, отправив сообщение</p>
      <form
        className={styles["authorization-form__form"]}
        onSubmit={openAuthPIN}
      >
        <label htmlFor="phone" className={styles["authorization-form__label"]}>
          Номер телефона
        </label>
        <input
          id="phone"
          type="tel"
          value={state.phoneValue}
          className={styles["authorization-form__input-phone"]}
          onChange={phoneChange}
        ></input>
        {!state.isValidPhone && <span>{state.errorText}</span>}
        <button
          type="submit"
          className={styles["authorization-form__submit-button"]}
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default AuthorizationForm;
