import {v4 as uuidv4} from "uuid";

import first from "./1.jpg";
import second from "./2.jpg";

const Banner = [
    {
        id: uuidv4(),
        img: first,
    },
    {
        id: uuidv4(),
        img: second,
    }
];

export default Banner;