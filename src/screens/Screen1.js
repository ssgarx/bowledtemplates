import React from "react";
import { useNavigate } from "react-router-dom";
import Uppernav from "../components/Uppernav";
import styles from "./Screen1.module.scss";

function Screen1() {
  const navigate = useNavigate();

  return (
    <div className={styles.box1}>
      <Uppernav options={["empty", "bowledIcon", "profileIcon"]} />
      <div className={styles.options}>
        <p>Choose your game </p>
        <button onClick={() => navigate("/screen2")}>Cric5</button>
        <br />
        <button onClick={() => navigate("/screen2")}>CricTrumps</button>
        <br />
        <button onClick={() => navigate("/screen2")}>Tournaments</button>
        <br />
        <button onClick={() => navigate("/screen2")}>Weekly Leagues</button>
      </div>
    </div>
  );
}

export default Screen1;
