import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import barber from "../../../assets/icons/manbarber.png";
import Linebig from "../../../assets/icons/Linebig.png";
import secsior from "../../../assets/icons/scissors.png";
import Line from "../../../assets/icons/Line4.png";

const handlePrevClick = (e, carousel) => {
  e.preventDefault();
  carousel.slidePrev();
};

const handleNextClick = (e, carousel) => {
  e.preventDefault();
  carousel.slideNext();
};

const TopBarber = () => {
  const options = {
    items: 3,
    responsive: {
      1024: {
        items: 4,
      },
      768: {
        items: 2,
      },
      0: {
        items: 1,
      },
    },
    buttonsDisabled: true,
    dotsDisabled: false,
    autoPlay: false,
    duration: 100,
    startIndex: 0,
  };

  let carousel = React.createRef();

  return (
    <>
      <div>
        <div className="flex mt-5">
          <div className="col-md-4  inline-flex align-items-end text-5xl h-28 ml-[100px]">
            Top Barber:
          </div>

          <div className="col-md-7  flex justify-end h-28">
            <img src={secsior} />
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <img src={Line} />
        </div>
      </div>
      <div className="relative w-full container mt-20">
        <AliceCarousel {...options} ref={(el) => (carousel = el)}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((image, index) => (
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
          ))}
        </AliceCarousel>
        <div
          onClick={(e) => handlePrevClick(e, carousel)}
          className="absolute md:left-[-5%] left-[0%] w-[54px] h-[54px] border-2 border-[#C5AC80] flex justify-center items-center rounded-full sm:visible top-1/3  transform -translate-y-1/2 text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          onClick={(e) => handleNextClick(e, carousel)}
          className="absolute border-2 border-[#C5AC80]  rounded-full w-[54px] h-[54px] flex justify-center items-center md:right-[-5%] right-[0%] sm:visible top-1/3  transform -translate-y-1/2 text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out focus:outline-none"
        >
          {/* <ArrowNarrowRightIcon className="h-5 w-5" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default TopBarber;
