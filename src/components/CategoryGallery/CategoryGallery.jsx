import React from "react";
import styles from './CategoryGallery.module.css';
import {CategoryGalleryDB} from "../../db/dummyDb";

function CategoryGallery(){
    const CategoryGalleryElements = CategoryGalleryDB.map((element) => {
        return (
            <div className={styles["CategoryGallery-element"]} key={element.id}>
                <img src={element.img} alt={element.title} />
                <p>{element.title}</p>
            </div>
        );
    });
    return(
        <React.Fragment>
            <div className={styles.Container}>
                <div className={styles.header}>
                    <h3>دسته بندی های دیجی کالا</h3>
                </div>

                <div className={styles.CategoryGallery}>
                    {CategoryGalleryElements}
                </div>
            </div>
        </React.Fragment>
    )
};

export default CategoryGallery;