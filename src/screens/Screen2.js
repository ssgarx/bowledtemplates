import React from "react";
import ShuffleBox from "../components/ShuffleBox";
import Uppernav from "../components/Uppernav";
import styles from "./Screen2.module.scss";
function Screen2() {
  return (
    <div className={styles.box1}>
      <Uppernav options={["empty", "bowledIcon", "empty"]} />
      <div className={styles.headingBox}>
        <p className={styles.mainHeading}>CricTrumps</p>
        <p className={styles.subHeading}>
          Getting your <br /> cards ready!
        </p>
      </div>
      <div className={styles.cardBox}>
        <ShuffleBox />
      </div>
    </div>
  );
}

export default Screen2;
