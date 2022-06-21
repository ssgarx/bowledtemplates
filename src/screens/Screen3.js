import React from "react";
import Uppernav from "../components/Uppernav";
import styles from "./Screen3.module.scss";
import dummyProfile from "../assets/icons/dummyProfile.svg";
import Slides from "../components/Slides";

function Screen3() {
  return (
    <div className={styles.box1}>
      <Uppernav options={["backIcon", "bowledIcon", "profileIcon"]} />
      <div className={styles.upperContent}>
        <div className={styles.profileBox}>
          <div className={styles.profile1}>
            <img src={dummyProfile} alt="dummyProfile" />
            <p>you</p>
          </div>
          <div className={styles.score}>
            <p>0 -0</p>
          </div>
          <div className={styles.profile2}>
            <img src={dummyProfile} alt="dummyProfile" />
            <p>opponent</p>
          </div>
        </div>
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
