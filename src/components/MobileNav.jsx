import { useState } from "react";
import close from "../assets/close.svg";
import hamburger from "../assets/hamburger.svg";
import home from "../assets/homeblack.svg";
import code from "../assets/code.svg";
import setting from "../assets/gear.svg";
import book from "../assets/book.svg";
import support from "../assets/phone.svg";
import logout from "../assets/sign-out.svg";
import logo from "../assets/logo.svg";
import cloud from "../assets/cloud.svg";
import { useNavigate } from "react-router-dom";

const MobileNav = () => {
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: home,
      label: "Repositories",
    },
    {
      icon: code,
      label: "AI Code Review",
    },
    {
      icon: cloud,
      label: "Cloud Security",
    },
    {
      icon: book,
      label: "How to Use",
    },
    {
      icon: setting,
      label: "Setting",
    },
    {
      icon: support,
      label: "Support",
    },
    {
      icon: logout,
      label: "Logout",
    },
  ];

  const HandlerNavigate = (label) => {
    if (label === "Logout") {
      navigate("/signin");
      setIsMenu(false);
    }
  };

  return (
    <div className=" w-full bg-white  h-full ">
      <div className="w-full h-full">
        <div className="flex items-center justify-between p-4">
          <img src={logo} />
          <div className="cursor-pointer">
            {isMenu ? (
              <div onClick={() => setIsMenu(false)}>
                <img src={close} />
              </div>
            ) : (
              <div onClick={() => setIsMenu(true)}>
                <img src={hamburger} />
              </div>
            )}
          </div>
        </div>
        <div className="">
          {isMenu === true && (
            <div
              style={{ height: "calc(100vh - 64px)" }}
              className=" w-full bg-black bg-opacity-10  transition-all"
            >
              <div className="bg-white px-4 pb-5 space-y-4 w-full ">
                <select className="w-full h-10 rounded-md px-1 border-2">
                  <option>UtkarshDhairyaPa...</option>
                  <option>VirendraPawar</option>
                </select>
                <div>
                  <ul className="space-y-1">
                    {menuItems.map((item) => (
                      <li
                        onClick={() => HandlerNavigate(item.label)}
                        key={item.label}
                        className="cursor-pointer flex items-center gap-3 w-full py-2 font-semibold rounded-md text-lg px-3  hover:bg-gray-200"
                      >
                        <img src={item.icon} />
                        <span className="">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default MobileNav;
