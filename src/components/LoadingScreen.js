import React from "react";
import styles from "./LoadingScreen.module.scss";

function LoadingScreen() {
  return (
    <div className={styles.box1}>
      <div className={styles.spinner} />
    </div>
  );
}

export default LoadingScreen;
