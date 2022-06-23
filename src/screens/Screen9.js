import React from "react";
import Uppernav from "../components/Uppernav";
import styles from "./Screen9.module.scss";
import cupIcon from "../assets/icons/cupIcon.svg";
import LeaderBoard from "../components/LeaderBoard";

function Screen9() {
  return (
    <>
      <Uppernav options={["backIcon", "bowledIcon", "profileIcon"]} />
      <div className={styles.headerBox}>
        <p className={styles.primaryHeading}>
          Leaderboard
          <span>
            <img src={cupIcon} alt="cupIcon" />
          </span>
        </p>
        <p className={styles.secondaryHeading}>Top 50</p>
      </div>
      <LeaderBoard />
    </>
  );
}

export default Screen9;
