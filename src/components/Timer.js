import React from "react";
import styles from "./Timer.module.scss";
import timerIcon from "../assets/icons/timerIcon.svg";
function Timer() {
  return (
    <div className={styles.box1}>
      <span>
        <img src={timerIcon} alt="timerIcon" />
      </span>
      00:00
    </div>
  );
}

export default Timer;
