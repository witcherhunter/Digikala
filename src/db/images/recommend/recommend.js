import {v4 as uuidv4} from "uuid";

import first from "./1.jpg";
import second from "./2.jpg";
import third from "./3.jpg";
import fourth from "./4.jpg";

const recommend = [
    {
        id: uuidv4(),
        img: first,
        title:"لندینگ عطر برای همه"
    },
    {
        id: uuidv4(),
        img: second,
        title:"مراقبت از سلامتی در منزل"
    },
    {
        id: uuidv4(),
        img: third,
        title:"برترین برند های پوشاک نوزادی"
    },
    {
        id: uuidv4(),
        img: fourth,
        title:"کفش کوهنوردی و ورزشی"
    }
];

export default recommend;