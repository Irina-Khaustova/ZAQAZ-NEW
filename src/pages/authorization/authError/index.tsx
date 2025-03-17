import React, { useEffect } from "react";
import styles from "./authError.module.scss";

function AuthError() {
  return (
    <div className={styles['authorization']}>
      <div className={styles["authorization__main"]}>
        {" "}
        <div className={styles["authorization__header"]}>
          
        </div>
      </div>
      
    </div>
  );
}

export default AuthError;