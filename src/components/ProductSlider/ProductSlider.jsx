import React, { useState } from "react";
import Card from "./Card";
import styles from "./ProductSlider.module.css";
import { productSliderImagesDB } from "../../db/dummyDb";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { HiOutlineArrowLeft } from "react-icons/hi";

function ProductSlider() {
  const [amaze, setAmaze] = useState();

  console.log(productSliderImagesDB);

  const productElements = productSliderImagesDB.map((obj) => {
    if (obj.img1) {
      return (
        <div key={obj.id} className={styles.card}>
          <div className={styles.top}>
            <img className={styles["amaze-text"]} src={obj.img1} alt="" />
            <img className={styles["amaze-image"]} src={obj.img} alt="" />
          </div>
          <div className={styles.bottom}>
            <div className={styles["amaze-title"]}>مشاهده همه </div>
          </div>
        </div>
      );
    }

    if (!obj.img) {
      return (
        <div key={obj.id} className={styles["card-last"]}>
          <div className={styles["circle-div"]}>
            <HiOutlineArrowLeft />
          </div>

          <p>{obj.title}</p>
        </div>
      );
    }
    return <Card key={obj.id} img={obj.img} title={obj.title} />;
  });

  console.log(productElements);

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 184;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 184;
  };
  return (
    <div className={styles.container}>
      <button
        className={`${styles["slide-button"]} ${styles.left}`}
        onClick={scrollLeft}
      >
        <FiChevronLeft />
      </button>
      <button
        className={`${styles["slide-button"]} ${styles.right}`}
        onClick={scrollRight}
      >
        <FiChevronRight />
      </button>
      <div id="content" className={styles.slider}>
        {productElements}
      </div>
    </div>
  );
}

export default ProductSlider;
