import React from "react";
import styles from "./ShuffleBox.module.scss";
import mixCard from "../assets/mixCard.svg";

function ShuffleBox() {
  // translate(-50%, ${25 * (arraySize - (index + 1)) + 1}%)

  return (
    <div className={styles.box1}>
      <div className={styles.card1}>
        <img className={styles.mixCard} src={mixCard} alt="mixCard" />
      </div>
      <div className={styles.card2}>
        <img className={styles.mixCard} src={mixCard} alt="mixCard" />
      </div>
      <div className={styles.card3}>
        <img className={styles.mixCard} src={mixCard} alt="mixCard" />
      </div>
      <div className={styles.card4}>
        <img className={styles.mixCard} src={mixCard} alt="mixCard" />
      </div>
      <div className={styles.card5}>
        <img className={styles.mixCard} src={mixCard} alt="mixCard" />
      </div>
    </div>
  );
}

export default ShuffleBox;
