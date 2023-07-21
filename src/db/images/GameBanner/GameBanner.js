import {v4 as uuidv4} from "uuid";
import logo from "./digiclub-logo-white.svg";
import spinner from "./wheel-spinner.jpg";
import mission from "./missions.png";
import award from "./awards.png";

const GameBannerLeftDB = [
    {
        id: uuidv4(),
        img: spinner,
        title:"چرخ و بخت"
    },
    {
        id: uuidv4(),
        img: mission,
        title:"ماموریت ها"
    },
    {
        id: uuidv4(),
        img: award,
        title:"جایزه ها"
    }
];

const LogoGameBannerDB = [
    {
        id: uuidv4(),
        img: logo
    }
];

export {GameBannerLeftDB, LogoGameBannerDB}