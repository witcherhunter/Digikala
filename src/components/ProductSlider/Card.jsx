import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <div key={props.id} className={styles.card}>
      <div className={styles.top}>
        <img src={props.img} alt="" />
      </div>
      <div className={styles.bottom}>
        <div className="title">{props.title}</div>
      </div>
    </div>
  );
}

export default Card;
