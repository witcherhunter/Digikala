import React from "react";
import { FiChevronLeft } from "react-icons/fi";

function Icon(props) {
  return <FiChevronLeft onClick={props.onClick} className={props.className} />;
}

export default Icon;
