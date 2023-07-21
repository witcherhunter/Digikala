import React from "react";
import styles from './Offer.module.css';
import {OfferDB} from "../../db/dummyDb";

function Offer() {
    const OfferElements = OfferDB.map((element) => {
        return (
            <div className={styles["Offer-element"]} key={element.id}>
                <div className={styles.img}>
                    <img src={element.img} alt={element.title}/>
                </div>
                <p>{element.title}</p>
            </div>
        );
    });
    return (
        <React.Fragment>
            <div className={styles.Container}>
                <div className={styles.header}>
                    <h3>دسته بندی های دیجی کالا</h3>
                </div>

                <div className={styles.Offer}>
                    {OfferElements}
                </div>
            </div>
        </React.Fragment>
    )
};

export default Offer;