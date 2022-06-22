import React from "react";
import styles from "./ProfileBox.module.scss";
import dummyProfile from "../assets/icons/dummyProfile.svg";

function ProfileBox() {
  return (
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
  );
}

export default ProfileBox;
