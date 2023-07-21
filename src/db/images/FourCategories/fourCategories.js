import one from "./1.jpg";
import two from "./2.jpg";
import three from "./3.jpg";
import four from "./4.jpg";
import five from "./5.jpg";
import six from "./6.jpg";
import seven from "./7.jpg";
import eight from "./8.jpg";
import nine from "./9.jpg";
import ten from "./10.jpg";
import eleven from "./11.jpg";
import twelve from "./12.jpg";
import thirteen from "./13.jpg";
import fourteen from "./14.jpg";
import fifteen from "./15.jpg";
import sixteen from "./16.jpg";

import { v4 as uuidv4 } from "uuid";

const fourCategories = [
  {
    name: "ساعت هوشمند",
    description: "بر اساس بازدیدهای شما",
    id: 0,
    product: [
      {
        id: uuidv4(),
        img: sixteen,
        category: "watch",
      },
      {
        id: uuidv4(),
        img: fifteen,
        category: "watch",
      },
      {
        id: uuidv4(),
        img: fourteen,
        category: "watch",
      },
      {
        id: uuidv4(),
        img: thirteen,
        category: "watch",
      },
    ],
  },
  {
    name: "هدفون، هدست و هندزفری",
    description: "بر اساس بازدیدهای شما",
    id: 1,
    product: [
      {
        id: uuidv4(),
        img: twelve,
        category: "airpod",
      },
      {
        id: uuidv4(),
        img: eleven,
        category: "airpod",
      },
      {
        id: uuidv4(),
        img: ten,
        category: "airpod",
      },
      {
        id: uuidv4(),
        img: nine,
        category: "airpod",
      },
    ],
  },
  {
    name: "کیف و کاور گوشی",
    description: "بر اساس بازدیدهای شما",
    id: 2,
    product: [
      {
        id: uuidv4(),
        img: eight,
        category: "cover",
      },
      {
        id: uuidv4(),
        img: seven,
        category: "cover",
      },
      {
        id: uuidv4(),
        img: six,
        category: "cover",
      },
      {
        id: uuidv4(),
        img: five,
        category: "cover",
      },
    ],
  },
  {
    name: "گوشی موبایل",
    description: "بر اساس بازدیدهای شما",
    id: 3,
    product: [
      {
        id: uuidv4(),
        img: four,
        category: "phone",
      },
      {
        id: uuidv4(),
        img: three,
        category: "phone",
      },
      {
        id: uuidv4(),
        img: two,
        category: "phone",
      },
      {
        id: uuidv4(),
        img: one,
        category: "phone",
      },
    ],
  },
];

export default fourCategories;
