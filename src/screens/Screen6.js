import React from "react";
import Uppernav from "../components/Uppernav";
import styles from "./Screen6.module.scss";
import dummyCard from "../assets/dummyCard.svg";
import dummyOppCard from "../assets/dummyOppCard.svg";
import { useNavigate } from "react-router-dom";

function Screen6() {
  const navigate = useNavigate();
  return (
    <>
      <Uppernav options={["empty", "bowledIcon", "empty"]} />
      <div className={styles.box1}>
        <div className={styles.opponentSection}>
          <p>Opponent’s card</p>
          <div
            onClick={() => navigate("/screen7")}
            className={styles.oppCardBox}
          >
            <img src={dummyOppCard} alt="dummyOppCard" />
          </div>
        </div>
        <div className={styles.mySection}>
          <div className={styles.nameBox}>
            <p>Rohit Sharma</p>
          </div>
          <div className={styles.statBox}>
            <p>You selected</p>
            <div>
              <p>stat</p>
              <p>00.00</p>
            </div>
          </div>
          <div onClick={() => navigate("/screen7")} className={styles.cardBox}>
            <img src={dummyCard} alt="dummyCard" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen6;
