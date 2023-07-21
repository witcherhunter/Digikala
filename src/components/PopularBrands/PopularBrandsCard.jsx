import React from "react";
import styles from "./PopularBrandsCard.module.css";

function PopularBrandsCard(props) {
    return (
        <div key={props.id} className={styles.card}>
            <div className={styles.top}>
                <img src={props.img} alt="" />
            </div>
        </div>
    );
}

export default PopularBrandsCard;