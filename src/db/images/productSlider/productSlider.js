import { v4 as uuidv4 } from "uuid";
import amaze from "./Amazings.svg";
import zero from "./0.png";
import first from "./1.jpg";
import second from "./2.jpg";
import third from "./3.jpg";
import fourth from "./4.jpg";
import fifth from "./5.jpg";
import sixth from "./6.jpg";
import seventh from "./7.jpg";
import eighth from "./8.jpg";
import ninth from "./9.jpg";

const productSlider = [
    {
        id: uuidv4(),
        img: zero,
        img1: amaze,
    },
    {
        id: uuidv4(),
        img: first,
    },
    {
        id: uuidv4(),
        img: second,
    },
    {
        id: uuidv4(),
        img: third,
    },
    {
        id: uuidv4(),
        img: fourth,
    },
    {
        id: uuidv4(),
        img: fifth,
    },
    {
        id: uuidv4(),
        img: sixth,
    },
    {
        id: uuidv4(),
        img: seventh,
    },
    {
        id: uuidv4(),
        img: eighth,
    },
    {
        id: uuidv4(),
        img: ninth,
    },
];

export default productSlider;