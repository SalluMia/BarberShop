import React from "react";
import barber from "../../assets/icons/manbarber.png";
import Linebig from "../../assets/icons/Linebig.png";

const Card = () => {
  return (
    <div className="flex justify-center items-center">
      <div className=" w-[269px] h-[390px] border bg-[#C5AC80]  rounded-3xl">
        <div className="w-[269px] h-[249px]">
          <img src={barber} />
        </div>
        <div className="">
          <div className="bg-[#C5AC80]  ml-3 mt-2">
            <div className="text-[16px]">Barber Raja</div>
            <div className="text-[14px]">
              Fusce eu sem vehicula velit euismod interdum quis in nibh.
            </div>
          </div>
          <div className=" mt-2 flex justify-center items-center">
            <img src={Linebig} className="w-[243px] " />
          </div>
          <div className="flex bg-[#C5AC80] text-white ml-3 mt-3  rounded-3xl">
            <div className="col-md-6">
              <button className="w-[88px] h-[28px] text-[14px] rounded-[70px] bg-[#1E1E1E] text-[#fff] flex justify-center items-center ">
                Book Now
              </button>
            </div>
            <div className="col-md-6 flex justify-evenly ">
              <div className="w-[24px] h-[24px] border-2 border-[#1E1E1E] rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="black"
                  className="w-[14px] h-[13px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div className="w-[24px] h-[24px] border-2 border-[#1E1E1E] rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="black"
                  className="w-[14px] h-[13px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
