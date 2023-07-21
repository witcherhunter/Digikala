import React from "react";
import styles from './recommend.module.css';
import {recommendDB} from "../../db/dummyDb";

function Recommend(){
    const recommendElement = recommendDB.map((element)=>{
        return (
            <div className={styles["recommend-element"]} key={element.id}>
                <img src={element.img} alt={element.title} />
            </div>
        );
    });
    return(
        <React.Fragment>
            <div className={styles.recommend}>
                {recommendElement}
            </div>
        </React.Fragment>
    )
};

export default Recommend;