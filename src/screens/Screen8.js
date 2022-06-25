import React from "react";
import Uppernav from "../components/Uppernav";

import styles from "./Screen8.module.scss";

import CXPIcon from "../assets/icons/CXPIcon.svg";
import whatsappIcon from "../assets/icons/whatsappIcon.svg";
import instagramIcon from "../assets/icons/instagramIcon.svg";
import twitterIcon from "../assets/icons/twitterIcon.svg";
import facebookIcon from "../assets/icons/facebookIcon.svg";
import { useNavigate } from "react-router-dom";

function Screen8() {
  const navigate = useNavigate();
  return (
    <>
      <Uppernav options={["empty", "bowledIcon", "empty"]} />
      <div className={styles.box1}>
        <div className={styles.infoSection}>
          <p>CricTrumps</p>
          <p>Wohooo!!!!</p>
          <p>You won!</p>
          <p>
            <span>
              <img src={CXPIcon} alt="CXPIcon" />
            </span>
            1000 CXPs
          </p>
        </div>
        <div className={styles.mediaSection}>
          <p className={styles.header}>Share with your friends</p>
          <div>
            <img src={whatsappIcon} alt="whatsappIcon" />
            <img src={instagramIcon} alt="instagramIcon" />
            <img src={twitterIcon} alt="twitterIcon" />
            <img src={facebookIcon} alt="facebookIcon" />
          </div>
          <p onClick={() => navigate("/screen9")} className={styles.redirect}>
            View leaderboard
          </p>
        </div>
        <div className={styles.btnBox}>
          <button onClick={() => navigate("/")}>Play Again</button>
        </div>
      </div>
    </>
  );
}

export default Screen8;
