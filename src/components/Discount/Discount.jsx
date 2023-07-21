import styles from "./Discount.module.css";
import {Fresh, FreshIcon, Img} from "../../db/images/Discount/Dicount";
import React from "react";
import {HiOutlineArrowLeft} from "react-icons/hi";

function Discount() {
    const imgElements = Img.map((element) => {
        return (
            <div className={styles["img-element"]} key={element.id}>
                <img src={element.img} alt={element.title}/>
            </div>
        );
    });
    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <div className={styles.freshIcon}>
                    <img src={FreshIcon[0].img} alt=""/>
                </div>
                <div className={styles.fresh}>
                    <img src={Fresh[0].img} alt=""/>
                </div>
                <div className={styles.text}>
                    <p>تا 42% تخفیف</p>
                </div>
            </div>
            <div className={styles.left}>
                <div className={styles.img}>
                    {imgElements}
                </div>
                <div className={styles.leftText}>
                    <span>
                        <p>بیش از 90 کالا</p>
                    </span>
                    <HiOutlineArrowLeft className={styles.icon}/>
                </div>
            </div>
        </div>
    )
};

export default Discount;