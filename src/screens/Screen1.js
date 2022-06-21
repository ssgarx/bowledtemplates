import React from "react";
import Uppernav from "../components/Uppernav";
import styles from "./Screen1.module.scss";

function screen1() {
  return (
    <div className={styles.box1}>
      <Uppernav options={["empty", "bowledIcon", "profileIcon"]} />
      <div className={styles.options}>
        <p>Choose your game </p>
        <button>Cric5</button>
        <br />
        <button>CricTrumps</button>
        <br />
        <button>Tournaments</button>
        <br />
        <button>Weekly Leagues</button>
      </div>
    </div>
  );
}

export default screen1;
