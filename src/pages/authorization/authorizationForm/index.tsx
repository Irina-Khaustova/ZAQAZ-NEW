import React, { useEffect } from "react";
import { FC, ChangeEvent } from "react";
import styles from "./authorizationForm.module.scss";

function AuthorizationForm() {

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
   
  };


  return (
    <div className={styles["authorization-form"]}>
      <h1>Добавить номер</h1>
      <p>Мы должны подтвердить его, отправив сообщение</p>
      <label htmlFor="phone" className={styles["authorization-form__label"]}>
    Телефон
  </label>
      <form className={styles["authorization-form__form"]}>
        <input id="phone" type="tel"className={styles["authorization-form__input-phone"]}></input>
      </form>
    </div>
  );
}

export default AuthorizationForm;
