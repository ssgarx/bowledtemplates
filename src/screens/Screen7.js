import React from "react";
import Uppernav from "../components/Uppernav";
import styles from "./Screen7.module.scss";
import bowledIcon from "../assets/bowledIcon.png";
import sixIcon from "../assets/sixIcon.png";
import { useNavigate } from "react-router-dom";

function Screen7() {
  const navigate = useNavigate();
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
        <div
          onClick={() => navigate("/screen8")}
          className={styles.lowerSection}
        >
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
