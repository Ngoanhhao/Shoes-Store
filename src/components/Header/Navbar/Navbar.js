import React from "react";
import { Link } from "react-router-dom";
import Menu from "../../Menu/Menu";
import { MenuNavbar } from "../NavbarData";

export default function Navbar({ onScroll }) {
  return (
    <>
      {MenuNavbar.map((value, key) => {
        if (value.singleMenu) {
          return (
            <Menu
              key={key}
              label={<Link to={value.patch}>{value.title}</Link>}
              hover={onScroll}
              items={value.singleMenu}
            />
          );
        } else if (value.megaMenu) {
          return <Menu
            key={key}
            label={value.title}
            hover={onScroll}
            Child={() => {
              return (
                <div className="grid grid-cols-12">
                  <div className="flex col-span-7 w-full justify-between">
                    {value.megaMenu.map((value, key) => {
                      return <Menu key={key} items={value} />;
                    })}
                  </div>
                  {value.img && <div className="col-span-5"><img src={value.img.url} alt={value.img.content} width="100%"/></div>}
                </div>
              );
            }}
          />;
        }
      })}
    </>
  );
}

