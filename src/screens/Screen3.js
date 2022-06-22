import React from "react";
import Uppernav from "../components/Uppernav";
import styles from "./Screen3.module.scss";
import Slides from "../components/Slides";
import ProfileBox from "../components/ProfileBox";

function Screen3() {
  return (
    <div className={styles.box1}>
      <Uppernav options={["backIcon", "bowledIcon", "profileIcon"]} />
      <div className={styles.upperContent}>
        <ProfileBox />
        <div className={styles.linkBox}>
          <p>Your Team </p>
        </div>
      </div>
      <Slides />
      <div className={styles.lowerContent}>
        <p>Tap to select the card</p>
      </div>
    </div>
  );
}

export default Screen3;
