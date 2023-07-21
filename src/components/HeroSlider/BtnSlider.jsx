import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "./BtnSlider.module.css";
function BtnSlider({ direction, moveSlide }) {

  return (
    <button
      className={
        direction === "next"
          ? `${styles["btn-slide"]} ${styles.next}`
          : `${styles["btn-slide"]} ${styles.prev}`
      }
      onClick={moveSlide}
    >
      <ArrowBackIosIcon
        className={
          direction === "next"
            ? `${styles.btnImage} ${styles["btn-next"]}`
            : `${styles.btnImage} ${styles["btn-prev"]}`
        }
      />
    </button>
  );
}

export default BtnSlider;
