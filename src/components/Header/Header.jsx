import React from "react";
import Heading from "./Heading/Heading";
import Navbar from "./Navbar/Navbar";
import styles from "./Header.module.css";
function Header() {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <Heading />
        <Navbar />
      </header>
    </React.Fragment>
  );
}

export default Header;
