import React from "react";
import { useNavigate } from "react-router-dom";
import ShuffleBox from "../components/ShuffleBox";
import Uppernav from "../components/Uppernav";
import styles from "./Screen2.module.scss";
function Screen2() {
  const navigate = useNavigate();
  return (
    <div className={styles.box1}>
      <Uppernav options={["empty", "bowledIcon", "empty"]} />
      <div className={styles.headingBox}>
        <p className={styles.mainHeading}>CricTrumps</p>
        <p className={styles.subHeading}>
          Getting your <br /> cards ready!
        </p>
      </div>
      <div onClick={() => navigate("/screen3")} className={styles.cardBox}>
        <ShuffleBox />
      </div>
    </div>
  );
}

export default Screen2;
