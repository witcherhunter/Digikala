import styles from "./FooterSubcategories.module.css";
import React from "react";
import footerSubcategoriesDB from "../../db/images/FooterSubcategories/footerSubcategories";

function FooterSubcategories() {
  const FooterSubcategoriesElements = footerSubcategoriesDB.map((element) => {
    return (
      <div className={styles["FooterSubcategoriesElements"]} key={element.id}>
        <a href="/">
          <img src={element.img} />
        </a>
      </div>
    );
  });
  return <div className={styles.container}>{FooterSubcategoriesElements}</div>;
}

export default FooterSubcategories;
