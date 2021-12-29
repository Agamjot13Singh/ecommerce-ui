import React from "react";
import "./Header.css";
import { IconContext } from "react-icons";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

const colorIcon = "#d4d4d4";
const sizeIcon = "1.7rem";
const Header = () => {
  return (
    <div className="header">
      <img
        src="https://merahomekart.in/wp-content/uploads/2020/09/cropped-Logo-Mera-512-1.png"
        alt=""
        className="header_logo"
      />
      <span className="header_btn">Store</span>
      <span className="header_btn">Shop by category</span>
      <span className="header_btn">Today's offer</span>
      <span className="header_btn">My Orders</span>
      <span className="header_btn">Picked Packs</span>
      <span className="header_btn-icons">

      <IconContext.Provider
        value={{ style: { color: colorIcon, fontSize: sizeIcon } }}>
        <IoSearchOutline />
      </IconContext.Provider> 
      </span>
      <span className="header_btn-icons">

      <IconContext.Provider
        value={{ style: { color: colorIcon, fontSize: sizeIcon } }}> 
        <MdOutlineShoppingBag />
      </IconContext.Provider>
        </span>
    </div>
  );
};

export default Header;
