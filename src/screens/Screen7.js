import React from "react";
import Uppernav from "../components/Uppernav";
import styles from "./Screen7.module.scss";
import bowledIcon from "../assets/bowledIcon.png";
import sixIcon from "../assets/sixIcon.png";

function Screen7() {
  const isBowled = false;
  return (
    <>
      <Uppernav options={["empty", "bowledIcon", "empty"]} />
      <div className={styles.box1}>
        <div className={styles.upperSection}>
          {isBowled ? (
            <>
              <p>Oops!! You got</p>
              <p>Bowled</p>
            </>
          ) : (
            <>
              <p>And that’s a</p>
              <p>SIX!!</p>
            </>
          )}
        </div>
        <div className={styles.lowerSection}>
          {isBowled ? (
            <img src={bowledIcon} alt="bowledIcon" />
          ) : (
            <img src={sixIcon} alt="sixIcon" />
          )}
        </div>
      </div>
    </>
  );
}

export default Screen7;
