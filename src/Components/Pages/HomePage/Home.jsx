import React from "react";
import "../../../Styles/Styles.css";
import lady from "../../../assets/icons/barberrr.png";
const Home = () => {
  return (
    <div className="md:h-[651px] h-100 ">
      <div className="background-image-landing bg-[#1E1E1E] h-100">
        <div className="md:flex relative">
          <div className="md:w-[50%] w-[100%] md:ml-10 text-center">
            <p className="text-[72px] font-normal text-[white] leading-[90px]]">
              Your Hair
            </p>
            <p className="text-[60px] text-[#C5AC80] leading-[70.31px]">
              Deservers The Best
            </p>
            <p className="text-[22px] text-[#FFFFFF] leading-[48px]">
              Suspendisse velit risus, efficitur nec lacinia sit amet, finibus a
              dolor. Aenean elementum lacinia purus, non rhoncus justo dignissim
              sed.
            </p>
            <button className="w-[146px] h-[43px] bg-[#C5AC80] rounded-[70px] ">
              Book Now
            </button>
          </div>
          <div className="md:w-[50%] w-[100%] background-image-lady-background ml-[-40px]">
            <div className="">
              <img
                src={lady}
                className="z-40 md:mt-[-40px] md:w-[918px] md:h-[638px] md:-ml-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
