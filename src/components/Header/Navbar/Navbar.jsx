import React from "react";
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import DiscountIcon from "@mui/icons-material/Discount";
import FlareIcon from "@mui/icons-material/Flare";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Navbar() {
  return (
    <React.Fragment>
      <div className={styles["navbar-container"]}>
        <div className={styles["navbar-left"]}>
          <span>لطفا شهر خود را انتخاب کنید</span>
          <LocationOnIcon className={styles["navbar-location-icon"]} />
        </div>
        <nav className={styles.navbar}>
          <ul>
            <a className={styles.textMenu} href="">
              <MenuIcon />
              <li>دسته بندی کالاها</li>
              <div className={styles["border-bottom"]}></div>
            </a>
            <div className={styles["vertical-line-light"]}></div>
            <a className={styles.textMenu} href="">
              <StorefrontIcon />
              <li>سوپرمارکت</li>
              <div className={styles["border-bottom"]}></div>
            </a>
            <a className={styles.textMenu} href="">
              <LocalFireDepartmentIcon />
              <li>پرفروش ترین ها</li>
              <div className={styles["border-bottom"]}></div>
            </a>
            <a className={styles.textMenu} href="">
              <DiscountIcon />
              <li>تخفیف ها و پیش نهاد ها</li>
              <div className={styles["border-bottom"]}></div>
            </a>
            <a className={styles.textMenu} href="">
              <FlareIcon />
              <li>شگفت انگیز ها</li>
              <div className={styles["border-bottom"]}></div>
            </a>
            <div className={styles["vertical-line-light"]}></div>
            <a className={styles.textMenu} href="">
              <li>سوالی دارید؟</li>
              <div className={styles["border-bottom"]}></div>
            </a>
            <a className={styles.textMenu} href="">
              <li>در دیجی کالا فروشید!</li>
              <div className={styles["border-bottom"]}></div>
            </a>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
