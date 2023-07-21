import {v4 as uuidv4} from "uuid";
import bazzar from "./coffe-bazzar.svg";
import googleplay from "./google-play.svg";
import more from "./More.svg"
import myket from "./myket.svg";
import logo from "./footerlogo2.png";
import sib from "./sib-app.svg";

const FooterDownloadAppLeft = [
    {
        id:uuidv4(),
        img:googleplay
    },
    {
        id:uuidv4(),
        img:bazzar
    },
    {
        id:uuidv4(),
        img:myket
    },
    {
        id:uuidv4(),
        img:sib
    },
    {
        id:uuidv4(),
        img:more
    },
];

 const FooterDownloadAppRight=[
     {
         id:uuidv4(),
         img:logo
     }
];

 export {FooterDownloadAppLeft,FooterDownloadAppRight}