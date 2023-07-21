import first from "./express-delivery.svg";
import second from "./cash-on-delivery.svg";
import third from "./support.svg";
import fourth from "./days-return.svg";
import fifth from "./original-products.svg";

import { v4 as uuidv4 } from "uuid";

const Facilities = [
    {
        id: uuidv4(),
        img: first,
        title:"امکان تحویل اکسپرس"
    },
    {
        id: uuidv4(),
        img: second,
        title:"امکان پرداخت در محل"
    },
    {
        id: uuidv4(),
        img: third,
        title:"7 روز هفته،24ساعته"
    },
    {
        id: uuidv4(),
        img: fourth,
        title:"هفت روز ضمانت بازگشت کالا"
    },
    {
        id: uuidv4(),
        img: fifth,
        title:"ضمانت اصل بودن کالا"
    }
]
export default Facilities;