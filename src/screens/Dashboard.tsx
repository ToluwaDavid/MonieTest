import React, { useEffect, useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import { LoginContext } from "../App.tsx";
import money from "../assets/money.png";
import frame4 from "../assets/frame4.png";
import timer from "../assets/timer.png";
const GET_CEO = gql`
  {
    company {
      ceo
      cto
      name
    }
  }
`;

const Dashboard = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const { loading, error, data } = useQuery(GET_CEO);
  console.log(data);
  const logout = () => {
    localStorage.clear();
    setLoggedIn(false);
    window.location.reload();
  };

  useEffect(() => {
    console.log(loggedIn);
    setTimeout(() => {
      logout();
    }, 20000);
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <div className="h-screen">
        {/* Div for the logo */}
        <div className="border-b-2 sm:grid-cols-1">
          <img src={money} alt="Logo" className="w-[84px] ml-[60px] mt-[9px]" />
        </div>
        {/* Div for the body layout */}
        {/* Div 1 */}
        <div className="md:flex sm:grid-cols-1 mb-10">
          <div className="ml-[60px] mt-[17px] border-2 rounded-[12px] w-2/3">
            <div className="flex inline-flex mt-[40px] ml-[60px] ">
              <div className="rounded-full bg-[#FCB6C0] text-[#1CC578] w-[62px] h-[62px]  position:absolute ">
                <p className="text-center font-[500] text-[24px] leading-[32.78px] tracking-[-0.5px] mt-3">
                  CN
                </p>
              </div>
              <p className="text-lg ml-5 mt-4 leading-[32.78px] font-[600] text-[24px] leading-[37px] tracking-[-0.2px] text-[#1A1A1A]">
                {data.company.name}
              </p>
            </div>
            <div className="mt-[51px] ml-[62px] ">
              <p className="font-[400] text-[12px] leading-[19px] w-[24px] h-[19px] text-[#858585]">
                Ceo
              </p>
              <p className=" font-[400] text-[16px] leading-[25px] w-[77px] h-[25px] text-[#1A1A1A]">
                {data.company.ceo}
              </p>
            </div>
            <div className="mt-[51px] ml-[62px] ">
              <p className="font-[400] text-[12px] leading-[19px] w-[24px] h-[19px] text-[#858585]">
                Cto
              </p>
              <p className="font-[400] mb-8 text-[16px] leading-[25px] w-[77px] h-[25px] text-[#1A1A1A]">
                {data.company.cto}
              </p>
            </div>
          </div>
          {/* Div 2 */}
          <div className="ml-[25px] mt-[17px]  md:w-1/3 sm:w-full sm:justify-content-center sm:content-center bg-[#F7F7F7] rounded-[12px] mx-[43px] ">
            <div className="h-[490px] ">
              <div>
                <p className="mt-[81px] sm:mt-12 ml-[24px] bg-[#FEEBEE] rounded-[30px] h-[34px] w-[141px] flex">
                  <span className="align-middle p-1">
                    <img src={timer} alt="timer" />
                  </span>
                  <span className="align-middle p-1 text-[#E60A2B]">
                    Coming soon
                  </span>
                </p>
              </div>
              {/* Div 2 */}
              <div>
                <img
                  src={frame4}
                  alt="ComingSoon"
                  className="w-[327px] mx-auto mt-[62px]"
                />
              </div>
              {/* Div 3 */}
              <div className="p-2">
                <p className="text-center font-[600] text-[#1A1A1A] text-[24px] leading-[37px] tracking-[-0.2px] mt-[24px]">
                  📫 Notifications
                </p>
                <p className="text-center text-[#595959] p-2 w-[307px] mx-auto font-[400] text-[18px] leading-[25px] tracking-[0.3px]">
                  Receive notifcations about your rider performance, efficiency
                  reviews and a lot more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
