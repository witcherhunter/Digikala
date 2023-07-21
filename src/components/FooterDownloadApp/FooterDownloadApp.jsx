import styles from "./FooterDownloadApp.module.css";
import React from "react";
import {FooterDownloadAppLeft,FooterDownloadAppRight} from "../../db/images/FooterDownloadApp/FooterDownloadApp";

function FooterDownloadApp (){
    const FooterDownloadAppElements = FooterDownloadAppLeft.map((element) => {
        return (
            <div className={styles["img-element"]} key={element.id}>
                <img src={element.img} alt="" />
            </div>
        );
    });
    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <div className={styles.freshIcon}>
                    <img src={FooterDownloadAppRight[0].img} alt=""/>
                    <h5>
                        دانلود اپلیکیشن دیجی‌کالا
                    </h5>
                </div>
            </div>
            <div className={styles.left}>
                <div className={styles.img}>
                    {FooterDownloadAppElements}
                </div>
            </div>
        </div>
    )
} ;

export default FooterDownloadApp;