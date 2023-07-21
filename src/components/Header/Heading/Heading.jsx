import React from "react";
import styles from "./Heading.module.css";
// import Search from "../../utilities/Search/Search";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import SearchIcon from "@mui/icons-material/Search";

function Heading() {
  return (
    <React.Fragment>
      <div className={styles.header}>
        <div className={styles["header-left"]}>
          <ShoppingCartIcon className={styles["cart-icon"]} />

          <div className={styles["vertical-line-light"]}></div>
          <div className={styles["header-user"]}>
            <span className={styles["header-span"]}>ثبت نام</span>
            <div className={styles["vertical-line-thick"]}></div>
            <span className={styles["header-span"]}>ورود</span>
            <LoginIcon className={styles["login-icon"]} />
          </div>
        </div>
        <div className={styles["header-right"]}>
          <div className={styles["header-search-bar"]}>
            <input
              className={styles["header-search-input"]}
              placeholder="جستجو"
            />
            <SearchIcon className={styles["header-search-icon"]} />
          </div>
          <img
            className={styles["header-logo"]}
            src="./images/header/logo.svg"
            alt=""
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Heading;
