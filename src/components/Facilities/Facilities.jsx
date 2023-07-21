import styles from "./Facilities.module.css";
import {FacilitiesDB} from "../../db/dummyDb";
import React from "react";

function Facilities(){
    const FacilitiesElements = FacilitiesDB.map((element)=>{
        return (
            <div className={styles["Facilities-element"]} key={element.id}>
                <img src={element.img} alt={element.title}/>
                <p>{element.title}</p>
            </div>
        );
    })
    return(
        <div className={styles.container}>
            {FacilitiesElements}
        </div>
    )
}

export default Facilities;