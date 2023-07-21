import React from "react";
import styles from "./Features.module.css";
import { featureDB } from "../../db/dummyDb";

function Features() {
    const featureElements = featureDB.map((element) => {
        return (
            <div className={styles["feature-element"]} key={element.id}>
                {/* <div className={styles["img-border"]}> */}
                <img src={element.img} alt={element.title} />
                {/* </div> */}
                <h5>{element.title}</h5>
            </div>
        );
    });
    return (
        <div className={styles["feature-container"]}>
            <div className={styles.feature}>{featureElements}</div>
        </div>
    );
}

export default Features;
