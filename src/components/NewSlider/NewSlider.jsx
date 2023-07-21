import React, { useRef, useState, useEffect } from "react";
import styles from "./NewSlider.module.css";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { productSliderImagesDB } from "../../db/dummyDb";
import Icon from "./Icon";

function NewSlider() {
  const [displayLeftButton, setDisplayLeftButton] = useState(true);
  const [displayRightButton, setDisplayRightButton] = useState(false);
  //   let product = useRef();
  let carousel = useRef();
  const scrollRightButton = () => {
    carousel.current.scrollLeft += 182 + 2;
    console.log(carousel.current.scrollWidth - carousel.current.clientWidth);
    console.log(carousel.current.scrollLeft == 0 ? "none" : "block");
  };
  const scrollLeftButton = () => {
    carousel.current.scrollLeft -= 182 + 2;
    let scrollWidth =
      carousel.current.scrollWidth - carousel.current.clientWidth;
    // console.log(carousel.current.scrollWidth - carousel.current.clientWidth);
    console.log(carousel.current.scrollLeft);
    console.log(scrollWidth);
    console.log(
      Math.abs(carousel.current.scrollLeft) == scrollWidth ? "none" : "block"
    );
  };

  // useEffect(() => {
  //   Math.abs(carousel.current.scrollLeft) == 0
  //     ? setDisplayRightButton(false)
  //     : setDisplayRightButton(true);
  //   console.log("useEffect right");
  // }, []);

  // useEffect(() => {
  //   let scrollWidth =
  //     carousel.current.scrollWidth - carousel.current.clientWidth;
  //   Math.abs(carousel.current.scrollLeft) == scrollWidth
  //     ? setDisplayLeftButton(false)
  //     : setDisplayLeftButton(true);
  //   console.log("useEffect left");
  // }, []);

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

  const productElements = productSliderImagesDB.map((obj) => {
    return (
      <div id="product" key={obj.id} className={styles.product}>
        <div className={styles["inner-product"]}>
          <img src={obj.img} alt="" />
          <span>{obj.title}</span>
        </div>
      </div>
    );
  });

  // useEffect(() => {
  //   setDisplayButton(carousel.scrollWidth);
  // });

  // useEffect(() => {
  //   let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
  //   console.log(scrollWidth);
  // }, [displayButton]);

  const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    console.log(scrollWidth);
    // arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    // arrowIcons[1].style.display =
    //   carousel.scrollLeft == scrollWidth ? "none" : "block";
  };

  return (
    <div
      onMouseOver={displayButtonsHandler}
      className={styles["slider-container"]}
    >
      {/* <FiChevronLeft
        onClick={scrollLeftButton}
        className={`${styles.icon} ${styles.left}`}
      /> */}
      {displayLeftButton && (
        <Icon
          onClick={scrollLeftButton}
          className={`${styles.icon} ${styles.left}`}
        />
      )}

      <div ref={carousel} id="carousel" className={styles.carousel}>
        {productElements}
      </div>
      {/* <FiChevronRight
        onClick={scrollRightButton}
        className={`${styles.icon} ${styles.right}`}
      /> */}
      {displayRightButton && (
        <Icon
          onClick={scrollRightButton}
          className={`${styles.icon} ${styles.right}`}
        />
      )}
    </div>
  );
}

export default NewSlider;
