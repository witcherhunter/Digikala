import React from "react";
import styles from "./Banner.module.css";

function Banner(props) {

    const elements = props.data; 
    const BannerElements = elements.map((element) => {
        return (
            <div className={styles["banner-element"]} key={element.id}>
                <img src={element.img} alt={element.title} />
            </div>
        );
    });
    return (
        <div className={styles["Container"]}>
            <div className={styles.banner}>{BannerElements}</div>
        </div>
    );
}

export default Banner;