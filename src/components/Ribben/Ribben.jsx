import React from 'react';

import styles from "./Ribben.module.css";
import {RibbenDB} from "../../db/dummyDb";

function Ribben(){
    const image = RibbenDB[0].img;
    return(
        <div className={styles.container}>
            <img src={image} alt=""/>
        </div>
    )
}

export default Ribben;