import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../data/avatar.png";
import style from "./NavBar.module.css";

function Navbar() {
  return (
    <div className={style.parent}>
      <div className={style.icon}>
        <AiOutlineMenu />
      </div>
      <div className={style.rightSideIconParent}>
        <div className={style.icon}>
          <FiShoppingCart />
        </div>
        <div className={style.otherIcon}>
          <BsChatLeft />
        </div>
        <div className={style.otherIcon}>
          <RiNotification3Line />
        </div>
        <div className={style.otherIcon}>
          <img src={avatar} className={style.avatar} alt="user-profile" />
        </div>
        <div className={style.otherIcon}>Jitender Jaiswal</div>
        <div className={style.otherIcon}>
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
