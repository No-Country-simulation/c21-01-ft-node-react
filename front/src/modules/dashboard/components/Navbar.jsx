import { useState } from "react";
import { getUserName } from "../utils/getUserName";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/logotipo.svg";

export const Navbar = () => {
  const userName = getUserName();

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="mx-auto w-full px-4 bg-slate-200">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt="logo"
            className="w-48 h-full object-cover pl-4"
          />
        </div>

        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold ">{`¡Bienvenido, ${userName}!`}</h1>

        <div className="flex justify-center items-center">
          <button type="button" className="relative">
            <FontAwesomeIcon
              icon={faBell}
              className="text-primary h-6 w-5 pr-4"
            />
          </button>

          <div className="relative ml-3">
            <div>
              <button
                type="button"
                className="relative"
                id="user-menu-button"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                onClick={handleDropdownToggle}
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-primary h-6 w-5 pr-4"
                />
              </button>
            </div>

            {isDropdownOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                  onClick={() => setDropdownOpen(false)}
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                  onClick={() => setDropdownOpen(false)}
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                  onClick={() => setDropdownOpen(false)}
                >
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
