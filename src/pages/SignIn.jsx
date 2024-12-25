import piechart from "../assets/piecharticon.svg";
import arrow from "../assets/arrow.svg";
import bigIcon from "../assets/bgicon.svg";
import logo from "../assets/logo.svg";
import { signInOptions } from "../constant/mockData";
import sso from "../assets/sso.svg";
import gitlab from "../assets/gitlab.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import smallLogo from "../assets/smallicon.svg";

const SignIn = () => {
  const [isSaas, setIsSaas] = useState(true);

  return (
    <div className="min-h-screen w-full flex bg-[#fafafa] items-center justify-center">
      <div className="h-screen hidden lg:block lg:w-1/2 bg-white relative">
        <div className="z-50 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="w-[474px] h-[322px]  relative">
            <div className="w-[447px] h-[170px] bg-white shadow-lg border rounded-3xl">
              <div className="flex items-center p-5 gap-2">
                <img src={smallLogo} />
                <h6 className="font-bold text-lg">
                  AI to Detect & Autofix Bad Code
                </h6>
              </div>
              <hr />
              <div className="flex gap-12 p-5 ">
                <div className="flex flex-col items-center">
                  <span className="font-bold text-lg">30+</span>
                  <p className="text-sm">Language Support</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-lg">10K+</span>
                  <p className="text-sm">Developers</p>
                </div>
                <div className="flex flex-col items-center ml-5">
                  <span className="font-bold text-lg">100K+</span>
                  <p className="text-sm">Hours Saved</p>
                </div>
              </div>
            </div>
            <div className="w-[265px] h-[164px] bg-white rounded-3xl absolute right-0 top-[156px] shadow-lg border py-4 px-7 ">
              <div className="w-full h-full flex flex-col justify-between">
                <div className="w-full flex items-center justify-between">
                  <div className="w-[56px] h-[56px] rounded-full bg-[#9D90FA40] flex items-center justify-center">
                    <img src={piechart} />
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={arrow} />
                    <span className="font-bold text-[#0049C6] text-sm">
                      14%
                    </span>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <span className="font-bold text-sm">Issues Fixed</span>
                  <span className="font-bold text-3xl">500K+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0">
          <img src={bigIcon} />
        </div>
      </div>

      <div className="lg:w-1/2 sm:w-4/5 w-full min-h-screen  place-content-center place-items-center md:space-y-3 space-y-2 p-5">
        <div className="shadow-md border rounded-xl md:h-[602.34px] w-full  h-[582.34px]  ">
          <div className="md:h-[276px] h-[256px] flex flex-col sm:gap-7 gap-3 items-center justify-center px-3 ">
            <img src={logo} className="h-10 sm:w-[201.38px] " />
            <div className="space-y-7 w-full place-content-center place-items-center ">
              <h4 className="font-semibold xl:text-[32px] md:text-2xl sm:text-2xl text-xl text-center ">
                Welcome to CodeAnt AI
              </h4>
              <div className="border  rounded-lg flex 2xl:w-[624px] md:w-5/6 sm:w-[376px] w-3/4 lg:text-xl sm:text-lg text-sm">
                <button
                  onClick={() => setIsSaas(true)}
                  className={` 2xl:h-[60px]   w-1/2  h-[52px]   font-semibold  rounded-lg  transition-all duration-300 ${
                    isSaas ? "bg-[#1570EF] text-white" : "bg-white text-black"
                  }`}
                >
                  SAAS
                </button>
                <button
                  onClick={() => setIsSaas(false)}
                  className={`2xl:h-[60px]  h-[52px] w-1/2  font-semibold  rounded-lg transition-all duration-300 ${
                    isSaas ? "bg-white text-black" : " bg-[#1570EF] text-white"
                  }`}
                >
                  Self Hosted
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="h-[326.34px] w-full flex md:items-center justify-center ">
            <div className="h-full 2xl:w-[446px] md:w-4/6 sm:w-[376px] w-3/4  place-content-center place-items-center">
              {isSaas ? (
                <div className="h-full w-full place-content-center place-items-center">
                  {signInOptions.map((option, i) => (
                    <NavLink to={"/"} key={i} className="w-full ">
                      <button className="mb-3 font-semibold border xl:w-[446px] md:h-[57.59px]  w-full h-[57.59px]  py-2 rounded-lg flex items-center justify-center  gap-4 md:text-base text-sm">
                        <img src={option.icon} /> <span>{option.text}</span>
                      </button>
                    </NavLink>
                  ))}
                </div>
              ) : (
                <div className="h-full w-full flex flex-col items-center py-5 gap-3 ">
                  <NavLink to={"/"} className="w-full">
                    <button className="font-semibold border md:h-[57.59px] w-full h-[57.59px]  py-2 rounded-lg flex items-center justify-center  gap-4 md:text-base text-sm">
                      <img src={gitlab} /> <span>Sign in with GitLab</span>
                    </button>
                  </NavLink>
                  <NavLink to={"/"} className="w-full">
                    <button className="font-semibold border md:h-[57.59px]  w-full h-[57.59px]  py-2 rounded-lg flex items-center justify-center  gap-4 md:text-base text-sm">
                      <img src={sso} /> <span>Sign in with SSO</span>
                    </button>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
        <p className="md:text-base sm:text-sm text-xs">
          By signing up you agree to the
          <span className="font-bold  "> Privacy Policy</span> .
          <div> 
            <a href="https://github.com/virendrap1516">By Virendra pawar</a></div>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
