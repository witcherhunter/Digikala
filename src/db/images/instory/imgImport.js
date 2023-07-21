import { v4 as uuidv4 } from "uuid";

import birthday from "./birthday.jpg";
import cool from "./cool.jpg";
import delivery from "./delivery.jpg";
import latary from "./latary.jpg";
import offer from "./offer.jpg";
import shoes from "./shoes.jpg";
import umbrella from "./umbrella.jpeg";
import phone from "./phone.png";

const inStoryImages = [
  {
    id: uuidv4(),
    img: birthday,
    title: "کادوی تولد",
  },
  {
    id: uuidv4(),
    img: offer,
    title: "آفر ویژه",
  },
  {
    id: uuidv4(),
    img: delivery,
    title: "ارسال امروز ",
  },
  {
    id: uuidv4(),
    img: latary,
    title: "قرعه کشی",
  },
  {
    id: uuidv4(),
    img: phone,
    title: "دوربین عالی",
  },
  {
    id: uuidv4(),
    img: umbrella,
    title: "زیر بارون",
  },
  {
    id: uuidv4(),
    img: cool,
    title: "خنک بپوش",
  },
  {
    id: uuidv4(),
    img: shoes,
    title: "کفش ساحلی",
  },
];

export default inStoryImages;
