import React from "react";
import scissor from "../../../assets/icons/scissors.png";
import square from "../../../assets/icons/Square.png";
import line from "../../../assets/icons/Line.png";
import Swap from "../../../assets/icons/Swap.png";
import CircleDollar from "../../../assets/icons/CircleDollar.png";

const ExploreServices = () => {
  return (
    <div>
      <div className="md:flex ">
        <div className="col-md-8 h-100 text-[40px]  text-[#1E1E1E] flex md:justify-end justify-center mt-20 scissor-background-img">
          <p className="p-4">Explore Our Services</p>
        </div>
        {/* <div className="col-md-4 flex justify-end">
          <img src={scissor} className="" />
        </div> */}
      </div>
      <div className="container md:flex md:gap-4 mt-5">
        <div className="md:col-md-4 md:my-0 my-10 h-[155px] bg-[#C5AC80] rounded-[10px] flex">
          <div className="col-4 flex justify-center items-center">
            <div className="w-[64px] h-[64px] rounded-[6px] bg-[#CCB388] flex rotate-45 absolute"></div>
            <div className="w-[64px] h-[64px] rounded-[6px] bg-[#C5AC80] flex rotate-45 mr-2 absolute"></div>
            <div className="w-[64px] h-[64px] rounded-[6px] bg-[white] flex rotate-45 mr-5 justify-center items-center ">
              <img src={square} className="w-[21px] h-[21px] -rotate-45" />
            </div>
          </div>
          <div className="col-8 p-3">
            <p className="text-[20px]">Trusted Team</p>
            <img src={line} />
            <p className="text-[16px]">
              Suspendisse velit risus, efficitur nec lacinia sit amet.
            </p>
          </div>
        </div>
        <div className="md:col-md-4 md:my-0 my-10 h-[155px] bg-[#FFFFFF] shadow-lg rounded-[10px] flex">
          <div className="col-4 flex justify-center items-center">
            <div className="w-[64px] h-[64px] rounded-[6px] bg-[#CCB388] opacity-[0.2] flex rotate-45 absolute"></div>
            <div className="w-[64px] h-[64px] rounded-[6px] bg-[#C5AC80] opacity-[0.2] flex rotate-45 mr-2 absolute"></div>

            <div className="w-[64px] h-[64px] rounded-[6px] bg-[#C5AC80] flex rotate-45 mr-5 justify-center items-center ">
              <img src={Swap} className="w-[21px] h-[21px] -rotate-45" />
            </div>
          </div>
          <div className="col-8 p-3">
            <p className="text-[20px]">Quick Response</p>
            <img src={line} />
            <p className="text-[16px]">
              Suspendisse velit risus, efficitur nec lacinia sit amet.
            </p>
          </div>
        </div>
        <div className="col-md-4 md:my-0 my-10 h-[155px] bg-[#C5AC80] rounded-[10px] flex">
          <div className="col-4 flex justify-center items-center">
            <div className="w-[64px] h-[64px] rounded-[6px] bg-[#CCB388] flex rotate-45 absolute"></div>
            <div className="w-[64px] h-[64px] rounded-[6px] bg-[#C5AC80] flex rotate-45 mr-2 absolute"></div>

            <div className="w-[64px] h-[64px] rounded-[6px] bg-[white] flex rotate-45 mr-5 justify-center items-center ">
              <img
                src={CircleDollar}
                className="w-[21px] h-[21px] -rotate-45"
              />
            </div>
          </div>
          <div className="col-8 p-3">
            <p className="text-[20px]">Fair Charges</p>
            <img src={line} />
            <p className="text-[16px]">
              Suspendisse velit risus, efficitur nec lacinia sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreServices;
