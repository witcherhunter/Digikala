import styles from "./GameBanner.module.css";
import React from "react";
import {GameBannerLeftDB, LogoGameBannerDB} from "../../db/images/GameBanner/GameBanner";

function GameBanner (){
    const GameBannerElements = GameBannerLeftDB.map((element) => {
        return (
            <div className={styles["img-element"]} key={element.id}>
                <p>{element.title}</p>
                <img src={element.img} alt="" />
            </div>
        );
    });
    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <div className={styles.freshIcon}>
                    <img src={LogoGameBannerDB[0].img} alt=""/>
                </div>
            </div>
            <div className={styles.left}>
                <div className={styles.img}>
                    {GameBannerElements}
                </div>
            </div>
        </div>
    )
} ;

export default GameBanner;