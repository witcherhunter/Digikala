import React from "react";
import styles from "./InStory.module.css";
import { inStoryDB } from "../../db/dummyDb";

function InStory() {
  const inStoryElements = inStoryDB.map((element) => {
    return (
      <div className={styles["instory-element"]} key={element.id}>
        {/* <div className={styles["img-border"]}> */}
        <img src={element.img} alt={element.title} />
        {/* </div> */}
        <h5>{element.title}</h5>
      </div>
    );
  });
  return (
    <div className={styles["instory-container"]}>
      <div className={styles.instory}>{inStoryElements}</div>
    </div>
  );
}

export default InStory;
