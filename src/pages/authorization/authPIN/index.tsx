import React, { useEffect, useRef, FormEventHandler, FC, ChangeEvent, KeyboardEvent } from "react";
import styles from "./authPIN.module.scss";
import { AuthState } from "../reducers/authorizationReduser";
import { LoginData } from "../../../types/authorization";

interface AuthPINProps {
  submitLogIn: FormEventHandler<HTMLFormElement>,
  state: AuthState,
  codeChange: (index: number, value: string) => void,
}

const AuthPIN: FC<AuthPINProps> = ({submitLogIn, state, codeChange}) => {
  
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) && value.length === 1) {
      codeChange(index, value);
      // Переводим фокус на следующий инпут, если текущий заполнен
      if (index < 3) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  // Обработчик для удаления цифры и перемещения назад
  const handleBackspace = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (state.code[index] === "" && index > 0) {
        inputsRef.current[index - 1]?.focus();
      } else {
        codeChange(index, "");
      }
    }
  };

  // Проверяем, все ли поля заполнены
  const isFormComplete = state.code.every((digit) => digit !== "");


  return (
    <div className={styles["authPIN-form"]}>
      <h1>Подтверждение номера</h1>
      <p>{`Чтобы подтвердить учетную запись, введите 4-значный код, отправленный на номер ${state.phoneValue}`}</p>
      <form
        className={styles["authPIN-form__form"]}
        onSubmit={submitLogIn}
      >
        <div className={styles["authPIN-form__input-container"]}>
        {state.code.map((digit, index) => (
                  <input
                    key={index}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleBackspace(e, index)}
                    className={styles["authPIN-form__input"]}
                    ref={(el) => {
                      inputsRef.current[index] = el;
                    }}
                  />
                ))}
                </div>
        {!state.isValidPhone && <span>{state.errorText}</span>}
        <button
          type="submit"
          disabled={!isFormComplete}
          className={`${styles["authPIN-form__submit-button"]} ${!isFormComplete ? styles["authPIN-form__submit-button--disabled"] : ""}`}
        >
          Подтвердить
        </button>
      </form>
    </div>
  );
}

export default AuthPIN;