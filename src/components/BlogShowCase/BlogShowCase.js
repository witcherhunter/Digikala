import React from "react";
import styles from "../BlogShowCase/BlogShowCase.module.css";
import {BlogShowCaseDB} from "../../db/dummyDb";

function BlogShowCase() {
    const BlogShowCaseElements = BlogShowCaseDB.map((element) => {
        return (
            <div className={styles["BlogShowCase-element"]} key={element.id}>
                <img src={element.img} alt={element.title}/>
                <p>{element.title}</p>
            </div>
        );
    });
    return (
        <React.Fragment>
            <div className={styles.Container}>
                <div className={styles.header}>
                    <h6>خواندنی ها</h6>
                    <a>
                        <p>
                            مطالب بیشتر در دیجی کالا مگ &gt;
                        </p>
                    </a>
                </div>

                <div className={styles.BlogShowCase}>
                    {BlogShowCaseElements}
                </div>
            </div>
        </React.Fragment>
    )
};

export default BlogShowCase;