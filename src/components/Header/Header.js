import React, { useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { BsBox } from "react-icons/bs";

import { images } from "../../assets/img";
import Navbar from "./Navbar/Navbar";
import "./Header.scss";
import MobNavbar from "./Navbar/MobNavbar";
import { Link } from "react-router-dom";
import { rounters } from "../../router/router";

export default function Header() {
  var [onScroll, setonScroll] = useState(true);
  var [menuToggle, setmenuToggle] = useState(false);
  var [onTablet, setonTablet] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", listenScroll);
    window.addEventListener("resize", listenResize);
    listenResize();
    return () => {
      document.removeEventListener("scroll", listenScroll);
      window.removeEventListener("resize", listenResize);
    };
  }, []);

  var listenResize = () => {
    if (window.innerWidth <= 992) {
      setonTablet(true);
      setmenuToggle(false);
    } else {
      setonTablet(false);
      setmenuToggle(true);
    }
  };

  var listenScroll = () => {
    if (window.scrollY > 0) {
      setonScroll(false);
    } else {
      setonScroll(true);
    }
  };

  var handleToggle = () => {
    setmenuToggle(!menuToggle);
  };

  return (
    <header
      onMouseEnter={() => setonScroll(false)}
      onMouseLeave={() => setonScroll(true)}
    >
      <div
        className={`flex justify-between h-[4.5rem] fixed top-0 left-0 right-0 items-center px-10 pr-10 ${
          onScroll ? "bg-transparent" : "bg-white"
        }`}
        style={{ transition: "all .5s ease" }}
      >
        {/* nav mobile */}
        {onTablet && (
          <div
            className={`btnMenu ${onScroll ? "text-white" : "text-black"}`}
            onClick={handleToggle}
          >
            <AiOutlineMenu className="text-xl" />
          </div>
        )}

        {/* logo */}
        <div className="w-48 logo">
          <Link to="/">
            {!onScroll && <img className="" src={images.BlackLogo} alt="" />}
            {onScroll && <images.WhiteLogo />}
          </Link>
        </div>

        {/* navbar */}
        {onTablet ? (
          menuToggle && (
            <div>
              <MobNavbar onClick={handleToggle}/>
            </div>
          )
        ) : (
          <div className="flex h-full navbar">
            <Navbar onScroll={onScroll} />
          </div>
        )}

        {/* right menu */}
        <div className="flex items-center rightMenu">
          <AiOutlineSearch
            className={`mx-3 text-xl text-white ${
              onScroll ? "text-white" : "text-black"
            }`}
          />
          {!onTablet && (
            <>
              <AiOutlineUser
                className={`mx-3 text-xl text-white ${
                  onScroll ? "text-white" : "text-black"
                }`}
              />
              <AiOutlineHeart
                className={`mx-3 text-xl text-white ${
                  onScroll ? "text-white" : "text-black"
                }`}
              />
            </>
          )}
          <BsBox
            className={`mx-3 text-base text-white ${
              onScroll ? "text-red-500" : "text-black"
            }`}
          />
        </div>
      </div>
    </header>
  );
}
