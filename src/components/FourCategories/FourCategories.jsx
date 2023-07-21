import React from "react";
import styles from "./FourCategories.module.css";
import { fourCategoriesDB } from "../../db/dummyDb";
import one from "./1.jpg";
import two from "./2.jpg";
import three from "./3.jpg";
import four from "./4.jpg";

function FourCategories() {
  const category = fourCategoriesDB.map((card) => {
    console.log("index= ", card.id);

    return (
      <div className={styles.category}>
        <div className={styles.top}>
          <h3>{card.name}</h3>
          <span>{card.description}</span>
        </div>
        <div className={styles.middle}>
          {card.product.map((pd) => {
            return (
              <span>
                <img src={pd.img} alt="" />
              </span>
            );
          })}
        </div>

        <div className={styles.bottom}>
          <a href="#">
            &#60; <span>مشاهده</span>
          </a>
        </div>
      </div>
    );
  });

  console.log(fourCategoriesDB[1].product);
  return <div className={styles["cat-container"]}>{category}</div>;
}

export default FourCategories;
