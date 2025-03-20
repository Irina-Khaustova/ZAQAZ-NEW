import React, { useReducer } from "react";
import { FC, ChangeEvent, FormEvent } from "react";
import styles from "./authorizationForm.module.scss";
import { authReducer, initialState } from "../reducers/authorizationReduser";
import validatePhoneNumber from "../../../Utils/validatePhoneNumber";
import {
  SET_PHONE_ERROR,
  SET_PHONE_VALUE,
} from "../reducers/authorizationActions";
import formatPhoneNumber from "../../../Utils/formatPhoneNumber";

const AuthorizationForm: FC = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedPhoneNumber = formatPhoneNumber(value);
    dispatch({ type: SET_PHONE_VALUE, payload: formattedPhoneNumber });
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className={styles["authorization-form"]}>
      <h1>Добавить номер</h1>
      <p>Мы должны подтвердить его, отправив сообщение</p>
      <form className={styles["authorization-form__form"]} onSubmit={submitForm}>
        <label htmlFor="phone" className={styles["authorization-form__label"]}>
          Номер телефона
        </label>
        <input
          id="phone"
          type="tel"
          value={state.phoneValue}
          className={styles["authorization-form__input-phone"]}
          onChange={handlePhoneChange}
        ></input>
        {!state.isValidPhone && <span>{state.errorText}</span>}
        <button type="submit" className={styles["authorization-form__submit-button"]}>Войти</button>
      </form>
    </div>
  );
};

export default AuthorizationForm;
