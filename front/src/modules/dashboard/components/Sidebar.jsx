import React, { useState } from "react";

import homeIcon from "../../../assets/h-icon.svg";
import calIcon from "../../../assets/c-icon.svg";
import grafIcon from "../../../assets/g-icon.svg";
import homeIcon2 from "../../../assets/h-icon2.svg";
import calIcon2 from "../../../assets/c-icon2.svg";
import grafIcon2 from "../../../assets/g-icon2.svg";

export const Sidebar = ({ setActivePage }) => {
  const [activeIcon, setActiveIcon] = useState("home");

  const handleIconClick = (page) => {
    setActivePage(page);
    setActiveIcon(page);
  };

  return (
    <aside className="left-0 w-1/7 top-0 h-full flex items-center">
      <div className="bg-slate-200 w-300 rounded-r-lg">
        <ul>
          <li
            className={`py-8 px-6 items-center justify-center cursor-pointer  ${
              activeIcon === "home" ? "text-blue-500" : ""
            }`}
            onClick={() => handleIconClick("home")}
          >
            <img
              src={activeIcon === "home" ? homeIcon2 : homeIcon}
              alt="Inicio"
              className="h-7 w-7"
            />
          </li>

          <li
            className={`py-8 px-6 items-center justify-center cursor-pointer  ${
              activeIcon === "graphic" ? "text-blue-500" : ""
            }`}
            onClick={() => handleIconClick("graphic")}
          >
            <img
              src={activeIcon === "graphic" ? grafIcon2 : grafIcon}
              alt="Graphic"
              className="h-7 w-7"
            />
          </li>

          <li
            className={`py-8 px-6 items-center justify-center cursor-pointer  ${
              activeIcon === "calendary" ? "text-blue-500" : ""
            }`}
            onClick={() => handleIconClick("calendary")}
          >
            <img
              src={activeIcon === "calendary" ? calIcon2 : calIcon}
              alt="Calendary"
              className="h-7 w-7"
            />
          </li>
        </ul>
      </div>
    </aside>
  );
};
