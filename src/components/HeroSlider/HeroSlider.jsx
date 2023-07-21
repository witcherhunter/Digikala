import React, {useEffect, useState} from "react";
import styles from "./HeroSlider.module.css";
import {heroSliderDB} from "../../db/dummyDb";
import BtnSlider from "./BtnSlider";
import {v4 as uuidv4} from "uuid";

// import { dblClick } from "@testing-library/user-event/dist/click";

function HeroSlider() {
    //   console.log(Array.from({ length: heroSliderDB.length }));

    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (slideIndex !== heroSliderDB.length) {
                setSlideIndex(slideIndex + 1);
            } else if (slideIndex === heroSliderDB.length) {
                setSlideIndex(1);
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [slideIndex]);

    const nextSlide = () => {
        if (slideIndex !== heroSliderDB.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === heroSliderDB.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(heroSliderDB.length);
        }
    };
    return (
        <React.Fragment>
            <div className={styles["container-slider"]}>
                {heroSliderDB.map((obj, index) => {
                    return (
                        <div
                            className={
                                slideIndex === index + 1
                                    ? `${styles.slide} ${styles["active-anim"]}`
                                    : styles.slide
                            }
                            key={obj.id}
                        >
                            <img src={obj.img}/>
                        </div>
                    );
                })}
                <div className={styles["btn-hover"]}>
                    <BtnSlider moveSlide={nextSlide} direction={"prev"}/>
                    <BtnSlider moveSlide={prevSlide} direction={"next"}/>
                </div>
                <div className={styles["container-dots"]}>
                    {Array.from({length: heroSliderDB.length}).map((obj, index) => {
                        return (
                            <div
                                className={
                                    slideIndex === index + 1 ? styles["active-dot"] : styles.dot
                                }
                                key={uuidv4()}

                            ></div>
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}

export default HeroSlider;
