import React from "react";
import styles from "./Uppernav.module.scss";
import hamIcon from "../assets/icons/hamIcon.svg";
import bowledIcon from "../assets/icons/bowledIcon.svg";
import profileIcon from "../assets/icons/profileIcon.svg";
import backIcon from "../assets/icons/backIcon.svg";
import { useNavigate } from "react-router-dom";
function Uppernav({ options }) {
  const navigate = useNavigate();
  return (
    <div className={styles.box1}>
      {options.map((option, index) => {
        return option !== "empty" ? (
          <div
            onClick={() => {
              if (option === "backIcon") {
                navigate(-1);
              } else if (option === "profileIcon") {
                navigate("/screen10");
              } else if (option === "bowledIcon") {
                navigate("/");
              }
            }}
            key={index}
            className={styles.option}
          >
            <img
              src={
                option === "hamIcon"
                  ? hamIcon
                  : option === "backIcon"
                  ? backIcon
                  : option === "bowledIcon"
                  ? bowledIcon
                  : profileIcon
              }
              alt="icon"
            />
          </div>
        ) : (
          <div
            key={index}
            style={{
              visibility: "hidden",
            }}
          />
        );
      })}
    </div>
  );
}

export default Uppernav;
