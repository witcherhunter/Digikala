import styles from "./FooterPhone.module.css";
import React from "react";
function FooterPhone(){
    return(
        <div className={styles.container}>
            <ul>
                <li>
                    تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱
                </li>
                <li>
                    <div className={styles["vertical-line-light"]}></div>
                </li>
                <li>
                    ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
                </li>
            </ul>
        </div>
    )
}

export default FooterPhone;