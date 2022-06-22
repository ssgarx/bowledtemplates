import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import dummyCard from "../assets/dummyCard.svg";
import styles from "./Slides.module.scss";

function Slides() {
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  return (
    <div className={styles.carouselBox}>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        ariaLabel="dummyCard"
        infiniteLoop={true}
        autoPlay={isAutoPlay}
        interval={2000}
        onSwipeStart={() => {
          setIsAutoPlay(false);
        }}
      >
        <div>
          <p className={styles.card_title}>Rohit Sharma</p>
          <img src={dummyCard} alt="dummyCard" />
        </div>
        <div>
          <p className={styles.card_title}>Rohit Sharma</p>
          <img src={dummyCard} alt="dummyCard" />
        </div>
        <div>
          <p className={styles.card_title}>Rohit Sharma</p>
          <img src={dummyCard} alt="dummyCard" />
        </div>
      </Carousel>
    </div>
  );
}

export default Slides;
