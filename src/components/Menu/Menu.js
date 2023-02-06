import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

import styles from "./Menu.module.scss";

export default function Menu({
  items,
  label,
  hover = true,
  Child,
  click = false,
  TitleStyle,
  ContainerStyle,
  onMobile = false,
  CloseHandle,
  LeftIcon,
  RightIcon,
}) {
  var [Open, setOpen] = useState(false);

  return label ? (
    <div
      className={`${styles.MenuContainer} ${
        onMobile ? styles.MenuContainerMobile : ""
      }`}
      style={ContainerStyle}
      onMouseEnter={() => {
        if (!click) setOpen(true);
      }}
      onMouseLeave={() => {
        if (!click) setOpen(false);
      }}
      onClick={() => {
        if (click) setOpen(!Open);
      }}
    >
      {/* title */}
      <div className={styles.TitleContainer}>
        {LeftIcon}
        <p
          className={`${styles.NavTitle} ${
            onMobile ? styles.NavTitleMobile : ""
          } ${!hover ? styles.OnHover : ""}`}
          style={TitleStyle}
        >
          {label}
        </p>
        {RightIcon}
      </div>
      {/* render with items */}
      {Open && items && (
        <>
          <div
            className={`${onMobile ? styles.NavItemMobile : styles.NavItem} `}
          >
            {/* close and back */}
            {onMobile && (
              <>
                <CloseAndBack
                  BackFunc={() => setOpen(false)}
                  CloseFunc={() => CloseHandle()}
                />
              </>
            )}

            {/* render item */}
            {items.map((value, key) => {
              return (
                <p
                  key={key}
                  className={`${styles.Item} ${
                    value.styles !== undefined && value.styles.includes("bold")
                      ? styles.Bold
                      : ""
                  } ${
                    value.styles !== undefined &&
                    value.styles.includes("underline")
                      ? styles.Underline
                      : ""
                  } ${onMobile ? styles.MobileItem : ""}`}
                  onClick={() => setOpen(false)}
                >
                  <Link to={value.patch}>
                    {value.title}
                  </Link>
                </p>
              );
            })}
          </div>
        </>
      )}

      {/* render with props Child (megamenu)*/}
      {Open && Child && (
        <div
          className={`${
            onMobile ? styles.NavItemMegaMobile : styles.NavItemMega
          }`}
        >
          {/* close and back */}
          {onMobile && (
            <>
              <CloseAndBack
                BackFunc={() => setOpen(false)}
                CloseFunc={() => CloseHandle()}
              />
            </>
          )}
          {/* render */}
          {typeof Child == "function" ? <Child /> : Child}
        </div>
      )}
    </div>
  ) : (
    // return div for Mega menu
    <div className={styles["NavItems"]}>
      {items.map((value, key) => {
        return (
          <p
            key={key}
            className={`${styles.Item} ${
              value.styles !== undefined && value.styles.includes("bold")
                ? styles.Bold
                : ""
            } ${
              value.styles !== undefined && value.styles.includes("underline")
                ? styles.Underline
                : ""
            } ${styles.ItemMega}`}
            onClick={() => {setOpen(false); console.log(1);}}
          >
            {/* ẩn khi click !!! */}
            <Link to={value.patch}>{value.title}</Link>
          </p>
        );
      })}
    </div>
  );
}
export var CloseAndBack = ({ CloseFunc, BackFunc }) => {
  return (
    <>
      {CloseFunc && (
        <div className={styles.closeContainer}>
          <AiOutlineClose
            className={styles.btnClose}
            onClick={() => CloseFunc()}
          />
        </div>
      )}
      {BackFunc && (
        <div className={styles.back} onClick={() => BackFunc()}>
          <AiOutlineLeft />
          <p>Back</p>
        </div>
      )}
    </>
  );
};
