import React from "react";
import styles from "./OptionsBox.module.scss";
import backIcon from "../assets/icons/backIcon.svg";

function OptionsBox({ icon, name }) {
  return (
    <div className={styles.optionBox}>
      <div>
        <img src={icon} alt="profileIcon" />
        <p>{name}</p>
        <div></div>
      </div>
      <div>
        <img src={backIcon} alt="backIcon" />
      </div>
    </div>
  );
}

export default OptionsBox;
