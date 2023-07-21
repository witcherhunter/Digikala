import { v4 as uuidv4 } from "uuid";

import first from "./1.jpg";
import second from "./2.jpg";
import third from "./3.jpg";
import fourth from "./4.jpg";


const BlogShowCase = [
    {
        id: uuidv4(),
        img: first,
        title:"تجربه ی استفاده از هدست ایسوس ROG Strix Go",
    },
    {
        id: uuidv4(),
        img: second,
        title:"بررسی ست کتری و قوری مدل راسا کد KR06،کیفیت بدنه و لعاب خوب",
    },
    {
        id: uuidv4(),
        img: third,
        title:"بررسی ظرف غذا بدوسو مدل BDX-1238، طراحی مقاوم و کارآمد",
    },
    {
        id: uuidv4(),
        img: fourth,
        title:"10 ساعت هوشمند مجبوب در دیجی کالا(21خرداد 1402)",
    }
];

export default BlogShowCase;