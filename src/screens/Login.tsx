import React, { useState, useContext } from "react";
import { LoginContext } from "../App.tsx";
import money from "../assets/money.png";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import check from "../assets/check.png";

const Login = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [mail, setEmail] = useState<string>(" ");
  const [password, setPassword] = useState<string>("");
  //   useEffect(() => {
  //     console.log(loggedIn);
  //   });

  const handleSubmit = (e) => {
    if (mail === " ") {
      console.log("Email cannot be empty");
      alert("Email Field cannot be empty");
    } else {
      localStorage.setItem("email", mail);
      localStorage.setItem("password", password);
      setLoggedIn(true);
    }
  };

  return (
    <>
      <div className="">
        {/* Div one */}
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen width-full ">
          <div className="hidden sm:block bg-white p-8 ml-[65px] ">
            <img src={money} alt="Logo" className="w-[38px]" />
            <p className="font-[700] text-[32px] leading-[48px] tracking-[-0.5px]">
              Hi there, see what’s new
            </p>
            <p className="font-[400] text-[16px] leading-[25px] tracking-[0.3px] text-[#595959] w-[482px]">
              Here’s how Foodcourt helps you manage your daily operations and
              ensure your riders are efficient
            </p>

            <div className="flex mt-12 hover:bg-[#F8F8F6] hover:rounded-[20px]  group/item group/item">
              <img
                src={frame1}
                alt="Logo"
                className="w-[65px] h-[65px] content-center my-2 mx-1"
              />
              <div className="w-[462px] ml-2">
                <p>
                  <strong>Monitor your Earnings </strong>
                </p>
                <p className="inline-flex  p-1">
                  <span className="">
                    Easily see how much your busineses are earning on each
                    transaction and watch your earnings rise.
                  </span>
                  <span className="text-black group/edit invisible  group-hover/item:visible">
                    <img src={check} alt="check" />
                  </span>
                </p>
              </div>
            </div>

            <div className="flex mt-12 hover:bg-[#F8F8F6] hover:rounded-[20px]  group/item group/item">
              <img
                src={frame2}
                alt="Logo"
                className="w-[65px] h-[65px] content-center my-2 mx-1"
              />
              <div className="w-[462px] ml-2">
                <p>
                  <strong>Manage your Businesses </strong>
                </p>
                <p className="inline-flex  p-1">
                  <span className="">
                    Easily see how much your businesses are earning on each
                    transaction and watch your earnings rise.
                  </span>
                  <span className="text-black group/edit invisible  group-hover/item:visible">
                    <img src={check} alt="check" />
                  </span>
                </p>
              </div>
            </div>

            <div className="flex mt-12 hover:bg-[#F8F8F6] hover:rounded-[20px]  group/item group/item">
              <img
                src={frame3}
                alt="Logo"
                className="w-[65px] h-[65px] content-center my-2 mx-1"
              />
              <div className="w-[462px] ml-2">
                <p>
                  <strong>Delegate to Staff</strong>
                </p>
                <p className="inline-flex  p-1">
                  <span className="">
                    Easily see how much your businesses are earning on each
                    transaction and watch your earnings rise.
                  </span>
                  <span className="text-black group/edit invisible  group-hover/item:visible">
                    <img src={check} alt="check" />
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Div two */}
          <div className="bg-rose-100 flex flex-col  ">
            <form
              onSubmit={handleSubmit}
              className="bg-white mx-auto  px-[40px] py-[64px] mt-[47px] rounded-[12px] shadow-[0_4px_25px_rgba(102,102,102,0.2)]"
            >
              <p className="text-[24px] w-[271px] h-[37px] text-[#1A1A1A] normal font-[600] tracking-[-0.2px] leading-[37px]">
                Login to your dashboard
              </p>
              <p className="text-[#858585] w-[298px] h-[25px] font-[400] text-[16px] leading-[25px] tracking-[0.3px]">
                Provide details to log into your account
              </p>
              <div className="flex flex-col text-[#1A1A1A]  mt-[48px] font-[500]  ">
                <label>Email</label>
                <input
                  className="border rounded p-[20px] mt-[6px] h-[65px]"
                  type="email"
                  name="name"
                  id="name"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={mail}
                  placeholder="Email Address here"
                />
              </div>
              <div className="flex flex-col mt-[26px] text-[16px] leading-[25px]">
                <label>Password</label>
                <input
                  className="border rounded p-[20px] mt-[6px]"
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="000000000"
                />
              </div>
              <div className="flex flex-col mt-[26px] text-[16px] leading-[25px]">
                <button className="bg-[#1CC578] font-[700] text-[16]   h-[65px] rounded-[40px] text-white ">
                  Login
                </button>
              </div>
              {/* <button className="bg-[#1CC578] font-[700] text-[16] w-full mt-[56px] h-[65px] rounded-[40px] text-white px-[225px] py-[18px]">
                Login
              </button> */}
            </form>
          </div>
          {/* Div two end */}
        </div>
      </div>
    </>
  );
};

export default Login;
