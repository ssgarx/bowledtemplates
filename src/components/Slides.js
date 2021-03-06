import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Slides.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummyCard from "../assets/dummyCard.svg";
import { useNavigate } from "react-router-dom";

function Slides() {
  const navigate = useNavigate();

  const settings = {
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <>
          <p className={styles.playerName}>Rohit Sharma</p>
          <img
            onClick={() => navigate("/screen4")}
            src={dummyCard}
            alt="dummyCard"
          />
        </>
        <>
          <p className={styles.playerName}>Lorem Ipsum</p>
          <img
            onClick={() => navigate("/screen4")}
            src={dummyCard}
            alt="dummyCard"
          />
        </>
        <>
          <p className={styles.playerName}>Dolor Sit</p>
          <img
            onClick={() => navigate("/screen4")}
            src={dummyCard}
            alt="dummyCard"
          />
        </>
      </Slider>
    </div>
  );
}

export default Slides;
