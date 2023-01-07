import React from "react";
import { MdNavigateNext } from "react-icons/md";
import Menu, { CloseAndBack } from "../../Menu/Menu";
import "./MobNavbar.scss";
import { MenuNavbar } from "../NavbarData";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function MobNavbar({ onClick }) {
  return (
    <div className="fixed left-0 top-0 right-0 bottom-0 bg-white px-10 ">
      <CloseAndBack CloseFunc={() => onClick()} />
      <div className="">
        <>
          {MenuNavbar.map((value, key) => {
            if (value.singleMenu) {
              return (
                <Menu
                  key={key}
                  label={<Link to={value.patch}>{value.title}</Link>}
                  items={value.singleMenu}
                  RightIcon={<MdNavigateNext />}
                  TitleStyle={{ color: "black" }}
                  CloseHandle={onClick}
                  onMobile
                />
              );
            } else if (value.megaMenu) {
              return (
                <Menu
                  key={key}
                  label={<Link to={value.patch}>{value.title}</Link>}
                  TitleStyle={{ color: "Black" }}
                  RightIcon={<MdNavigateNext />}
                  CloseHandle={onClick}
                  onMobile
                  Child={() => {
                    return (
                      <div>
                        {value.megaMenu.map((value, key) => {
                          return (
                            <Menu
                              key={key}
                              label={<Link to={value.patch}>{value[0].title}</Link>}
                              RightIcon={<AiOutlinePlus/>}
                              TitleStyle={{ color: "Black" }}
                              onMobile
                              items={value}
                            />
                          );
                        })}
                      </div>
                    );
                  }}
                />
              );
            }
          })}
        </>
      </div>
    </div>
  );
}
