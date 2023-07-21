import React, { useRef, useState } from "react";
import styles from "./PopularBrands.module.css";
import { PopularBrandsDB } from "../../db/dummyDb";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
// import {HiOutlineArrowLeft} from "react-icons/hi";
import PopularBrandsCard from "./PopularBrandsCard";

function PopularBrands() {
  const carousel = useRef();
  const [displayLeftButton, setDisplayLeftButton] = useState(true);
  const [displayRightButton, setDisplayRightButton] = useState(false);
  const PopularBrandsElements = PopularBrandsDB.map((obj) => {
    return <PopularBrandsCard key={obj.id} img={obj.img} />;
  });

  const scrollLeft = () => {
    console.log("kirekhar left");
    document.getElementById("content").scrollLeft -= 145;
  };
  const scrollRight = () => {
    console.log("kirekhar right");
    document.getElementById("content").scrollLeft += 145;
  };

  const displayButtonsHandler = () => {
    Math.abs(carousel.current.scrollLeft) == 0
      ? setDisplayRightButton(false)
      : setDisplayRightButton(true);

    let scrollWidth =
      carousel.current.scrollWidth - carousel.current.clientWidth;
    Math.abs(carousel.current.scrollLeft) == scrollWidth
      ? setDisplayLeftButton(false)
      : setDisplayLeftButton(true);
    console.log("handle handle");
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>محبوب‌ترین برندها</h3>
      </div>
      {displayLeftButton && (
        <button
          className={`${styles["slide-button"]} ${styles.left}`}
          onClick={scrollLeft}
        >
          <FiChevronLeft />
        </button>
      )}
      {displayRightButton && (
        <button
          className={`${styles["slide-button"]} ${styles.right}`}
          onClick={scrollRight}
        >
          <FiChevronRight />
        </button>
      )}
      <div
        onMouseOver={displayButtonsHandler}
        ref={carousel}
        id="content"
        className={styles.slider}
      >
        {PopularBrandsElements}
      </div>
    </div>
  );
}

export default PopularBrands;
