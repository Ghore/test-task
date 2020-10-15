import React, { useState, useEffect } from "react";
import LogoSvg from "../../assets/image/logoOpti.svg";
import "../../sass/section/header.scss";
import BurgerMenuSvg from "../../assets/image/menu icon opti.svg";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenBurger() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        isOpen === true ? setIsOpen(false) : setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <>
      <header className="container">
        <ul className="headerWrapperMobile">
          <li className="headerWrapperMobileItem">
            <img src={LogoSvg} alt="logo" className="headerLogo" />
          </li>
          <li className="headerWrapperMobileItem">
            <img
              onClick={handleOpenBurger}
              src={BurgerMenuSvg}
              alt="burgerMenuSvg"
              className="burgerMenu"
            />
            {isOpen === false ? null : <MobileMenu />}
          </li>
        </ul>
        <ul className="headerWrapperDesktop">
          <li className="headerWrapperDesktopItem">
            <img src={LogoSvg} alt="logo" className="headerLogo" />
          </li>
          <li className="headerWrapperDesktopItem">
            <ul className="includedList">
              <li className="includedListItem">About me</li>
              <li className="includedListItem">Relationships</li>
              <li className="includedListItem">Requirements</li>
              <li className="includedListItem">Users</li>
              <li className="includedListItem">Sign Up</li>
            </ul>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
