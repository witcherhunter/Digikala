import { v4 as uuidv4 } from "uuid";

import freshIcon from "./fresh.png";
import fresh from "./fresh.svg";
import first from "./1.jpg";
import second from "./2.jpg";
import third from "./3.jpg";
import fourth from "./4.jpg";
import fifth from "./5.jpg";
import sixth from "./6.jpg";
import background from"./background.svg";

const Fresh =[
    {
        id:1,
        img:fresh
    }
];
const FreshIcon =[
    {
        id:1,
        img:freshIcon
    }
];

const Background=[
    {
        id:1,
        img:background
    }
];

const Img=[
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
    }
];

export { Fresh,FreshIcon,Background,Img}
