import { v4 as uuidv4 } from "uuid";

import first from "./1.png";
import second from "./2.png";
import third from "./3.png";
import fourth from "./4.png";
import fifth from "./5.png";
import sixth from "./6.png";
import seventh from "./7.png";
import eighth from "./8.png";
import ninth from "./9.png";
import tenth from "./10.png";
import Eleventh from "./11.png";
import twelfth from "./12.png";


const CategoryGallery = [
    {
        id: uuidv4(),
        img: first,
        title:"موبایل",
    },
    {
        id: uuidv4(),
        img: second,
        title:"کالای دیجیتال",
    },
    {
        id: uuidv4(),
        img: third,
        title:"خانه و آشپزخانه",
    },
    {
        id: uuidv4(),
        img: fourth,
        title:"مد و پوشاک",
    },
    {
        id: uuidv4(),
        img: fifth,
        title:"کالای سوپرمارکتی",
    },
    {
        id: uuidv4(),
        img: sixth,
        title:"کتاب،لوازم تحریر و هنر",
    },
    {
        id: uuidv4(),
        img: seventh,
        title:"اسباب بازی،کودک و نوزاد",
    },
    {
        id: uuidv4(),
        img: eighth,
        title:"زیبایی و سلامت",
    },
    {
        id: uuidv4(),
        img: ninth,
        title:"ورزش و سفر",
    },
    {
        id: uuidv4(),
        img: tenth,
        title:"ابزار،لوازم ساختمانی و صنعتی",
    },
    {
        id: uuidv4(),
        img: Eleventh,
        title:"خودرو و موتور سیکلت",
    },
    {
        id: uuidv4(),
        img: twelfth,
        title:"محصولات مومی و محلی",
    },
];

export default CategoryGallery;