import React, { useState } from "react";
import ProfileBox from "../components/ProfileBox";
import Timer from "../components/Timer";
import Uppernav from "../components/Uppernav";
import styles from "./Screen4.module.scss";
import dummyCard from "../assets/dummyCard.svg";

function Screen4() {
  const [selectedStatIndex, setSelectedStatIndex] = useState(null);
  const handleStatSelection = (index) => {
    setSelectedStatIndex((prev) => {
      if (prev === index) {
        return null;
      } else {
        return index;
      }
    });
  };
  return (
    <>
      <Uppernav options={["backIcon", "bowledIcon", "profileIcon"]} />
      <div className={styles.box1}>
        <ProfileBox />
        <div className={styles.linkBox}>
          <p>Your Team </p>
          <Timer />
        </div>
        <div className={styles.cardBox}>
          <p>Rohit Sharma</p>
          <div className={styles.card}>
            <img src={dummyCard} alt="dummyCard" />
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.statBox}>
          {[...Array(8)].map((_, index) => {
            return (
              <div
                key={index}
                onClick={() => handleStatSelection(index)}
                style={
                  selectedStatIndex === index
                    ? { border: "2px solid #ff2b6e" }
                    : {}
                }
              >
                <p
                  style={
                    selectedStatIndex === index ? { color: "#ff2b6e" } : {}
                  }
                >
                  stat
                </p>
                <p
                  style={
                    selectedStatIndex === index ? { color: "#ff2b6e" } : {}
                  }
                >
                  00.00
                </p>
              </div>
            );
          })}
        </div>
        <div className={styles.btnBox}>
          <button
            style={
              selectedStatIndex != null
                ? {
                    background:
                      "linear-gradient(180deg, #FF2B6E 0%, #01002A 136.35%)",
                  }
                : {}
            }
          >
            {selectedStatIndex === null ? "Start the game" : "Play"}{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Screen4;
