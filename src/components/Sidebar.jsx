import logo from "../assets/logo.svg";
import { menuItems } from "../constant/mockData";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="fixed h-full bg-white">
      <div className="flex flex-col justify-between h-full ">
        <div className="p-4 space-y-4">
          <div className="cursor-pointer">
            <img src={logo} alt="logo" />
          </div>

          <select className="w-[202px] h-10 rounded-md px-1 border-2">
            <option className="py-5">UtkarshDhairyaPa...</option>
            <option className="py-3">VirendraPawar</option>
          </select>

          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li
                onClick={() => setIsActive(index)}
                key={index}
                className={`cursor-pointer flex items-center gap-3 h-11 w-full py-2 font-semibold rounded-md text-md px-3 ${
                  index === isActive
                    ? "bg-[#1570EF] text-white shadow-inner shadow-blue-500"
                    : "hover:bg-gray-100"
                }  `}
              >
                <img src={item.icon} />

                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4">
          <ul className="space-y-1">
            <li className="h-11 cursor-pointer flex items-center gap-3 w-full py-2 font-semibold rounded-md text-md px-3 hover:bg-gray-100">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.875 11.2756C17.6836 11.6272 18.1406 12.5061 17.8945 13.385L17.1562 16.5842C17.0156 17.428 16.2773 17.9905 15.3984 17.9905C6.89062 17.9905 0 11.0999 0 2.59205C0 1.71315 0.5625 0.974864 1.40625 0.799083L4.60547 0.0608015C5.48438 -0.150136 6.36328 0.306895 6.71484 1.11549L8.22656 4.63111C8.54297 5.3694 8.29688 6.2483 7.69922 6.77565L6.50391 7.72486C7.41797 9.27174 8.71875 10.5725 10.3008 11.4866L11.25 10.3264C11.7773 9.69361 12.6562 9.44752 13.4297 9.79908L16.875 11.2756ZM16.2773 12.9983C16.3125 12.928 16.2773 12.8577 16.207 12.7874L12.7617 11.3108C12.6914 11.2756 12.6211 11.3108 12.5859 11.346L11.1797 13.0686C10.9336 13.385 10.4766 13.4553 10.125 13.2796C7.76953 12.1194 5.83594 10.1858 4.67578 7.83033C4.5 7.47877 4.60547 7.0569 4.88672 6.8108L6.60938 5.40455C6.67969 5.3694 6.67969 5.29908 6.64453 5.22877L5.16797 1.78346C5.13281 1.7483 5.09766 1.67799 5.02734 1.67799L4.99219 1.71315L1.79297 2.45143C1.72266 2.45143 1.65234 2.52174 1.65234 2.59205C1.65234 10.1506 7.83984 16.303 15.3984 16.303C15.4688 16.303 15.5391 16.2327 15.5391 16.1975L16.2773 12.9983Z"
                  fill="#414651"
                />
              </svg>

              <span>Support</span>
            </li>
            <NavLink to={"/signin"}>
              <li className="h-11 cursor-pointer flex items-center gap-3 w-full py-2 font-semibold rounded-md text-md px-3 hover:bg-gray-100">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.75 15.0312C6.75 15.5234 6.36328 15.875 5.90625 15.875H3.375C1.47656 15.875 0 14.3984 0 12.5V3.5C0 1.63672 1.47656 0.125 3.375 0.125H5.90625C6.36328 0.125 6.75 0.511719 6.75 0.96875C6.75 1.46094 6.36328 1.8125 5.90625 1.8125H3.375C2.42578 1.8125 1.6875 2.58594 1.6875 3.5V12.5C1.6875 13.4492 2.42578 14.1875 3.375 14.1875H5.90625C6.36328 14.1875 6.75 14.5742 6.75 15.0312ZM17.7539 7.4375L13.2891 2.65625C12.9727 2.30469 12.4453 2.30469 12.0938 2.62109C11.7422 2.9375 11.7422 3.46484 12.0586 3.81641L15.1875 7.15625H6.43359C5.97656 7.15625 5.625 7.54297 5.625 8C5.625 8.49219 5.97656 8.84375 6.43359 8.84375H15.1523L11.9883 12.2188C11.6719 12.5703 11.6719 13.0977 12.0234 13.4141C12.2344 13.5547 12.4453 13.625 12.6211 13.625C12.832 13.625 13.043 13.5547 13.2188 13.3789L17.6836 8.59766C18.0703 8.28125 18.0703 7.75391 17.7539 7.4375Z"
                    fill="#414651"
                  />
                </svg>

                <span>Logout</span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
