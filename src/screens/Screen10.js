import React from "react";
import Uppernav from "../components/Uppernav";
import styles from "./Screen10.module.scss";

import OptionsBox from "../components/OptionsBox";

import dummyProfile from "../assets/icons/dummyProfile.svg";
import editIcon from "../assets/icons/editIcon.svg";
import profileIcon from "../assets/icons/profileIcon.svg";
import homeIcon from "../assets/icons/homeIcon.svg";
import assetsIcon from "../assets/icons/assetsIcon.svg";
import cartIcon from "../assets/icons/cartIcon.svg";
import chartIcon from "../assets/icons/chartIcon.svg";
import walletIcon from "../assets/icons/walletIcon.svg";
import settingsIcon from "../assets/icons/settingsIcon.svg";
import shareIcon from "../assets/icons/shareIcon.svg";
import helpIcon from "../assets/icons/helpIcon.svg";
import logoutIcon from "../assets/icons/logoutIcon.svg";

function Screen10() {
  return (
    <>
      <Uppernav options={["backIcon", "bowledIcon", "empty"]} />
      <div className={styles.box1}>
        <div className={styles.iconBox}>
          <div>
            <img src={dummyProfile} alt="dummyProfle" />
          </div>
          <div>
            <p>Rahul</p>
            <p>
              Edit
              <span>
                <img src={editIcon} alt="editIcon" />
              </span>
            </p>
          </div>
        </div>
        <OptionsBox icon={profileIcon} name="My profile" />
        <OptionsBox icon={homeIcon} name="Home" />
        <OptionsBox icon={assetsIcon} name="My Assets" />
        <OptionsBox icon={cartIcon} name="Marketplace" />
        <OptionsBox icon={chartIcon} name="Leaderboard" />
        <OptionsBox icon={walletIcon} name="My Wallet" />
        <OptionsBox icon={settingsIcon} name="Setting" />
        <OptionsBox icon={shareIcon} name="Invite" />
        <OptionsBox icon={helpIcon} name="Help" />
        <OptionsBox icon={logoutIcon} name="Logout" />
      </div>
    </>
  );
}

export default Screen10;
