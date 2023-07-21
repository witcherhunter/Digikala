import React from "react";
import styles from "./FooterLogo.module.css";
import LoginIcon from "@mui/icons-material/Login";
import footerlogo from "../../db/images/FooterLogo/Footerlogo";

function FooterLogo() {
    const logo = footerlogo[0].img;
    return (
        <React.Fragment>
            <div className={styles.footer}>
                <div className={styles["footer-left"]}>
                    <div className={styles["footer-user"]}>
                        <span className={styles["footer-span"]}>بازگشت به بالا</span>
                        <LoginIcon className={styles["login-icon"]} />
                    </div>
                </div>
                <div className={styles["footer-right"]}>
                    <img
                        className={styles["footer-logo"]}
                        src={logo}
                        alt=""
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default FooterLogo;