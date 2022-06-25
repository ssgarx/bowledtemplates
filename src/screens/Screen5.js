import React from "react";
import styles from "./Screen5.module.scss";
import Uppernav from "../components/Uppernav";
import Timer from "../components/Timer";
import dummyCard from "../assets/dummyCard.svg";
import { useNavigate } from "react-router-dom";

function Screen5() {
  const navigate = useNavigate();
  return (
    <>
      <Uppernav options={["backIcon", "bowledIcon", "profileIcon"]} />
      <div className={styles.box1}>
        <div className={styles.nameBox}>
          <p>Rohit Sharma</p>
          <Timer />
        </div>
        <div className={styles.statBox}>
          <p>You selected</p>
          <div>
            <p>stat</p>
            <p>00.00</p>
          </div>
        </div>
        <div onClick={() => navigate("/screen6")} className={styles.cardBox}>
          <img src={dummyCard} alt="dummyCard" />
        </div>
      </div>
    </>
  );
}

export default Screen5;
