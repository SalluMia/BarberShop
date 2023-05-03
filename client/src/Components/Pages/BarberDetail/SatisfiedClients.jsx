import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import barber from "../../../assets/icons/women.png";
import Linebig from "../../../assets/icons/Linebig.png";
import Line from "../../../assets/icons/Line4.png";

const handlePrevClick = (e, carousel) => {
  e.preventDefault();
  carousel.slidePrev();
};

const handleNextClick = (e, carousel) => {
  e.preventDefault();
  carousel.slideNext();
};

const SatisfiedClients = () => {
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
    <div>
      <div>
        <div className="flex mt-5">
          <div className="col-md-4  inline-flex align-items-end text-5xl h-28 md:ml-[100px]">
            Satisfied Clients:
          </div>

          <div className="col-md-7 flex justify-end h-28">
            {/* <img src={secsior} /> */}
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <img src={Line} />
        </div>
      </div>
      <div className="relative w-full container mt-20 ">
        <AliceCarousel {...options} ref={(el) => (carousel = el)}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((image, index) => (
            <div className="flex justify-center items-center drop-shadow-lg p-3 ">
              <div className=" w-[281px] h-[325px] border-none flex justify-center items-center bg-white  rounded-3xl ">
                <div className="w-[269px] h-[249px] flex flex-col justify-center items-center ">
                  <div className="border border-black rounded-full p-3">
                    <img
                      src={barber}
                      className="w-[148px] h-[148px] rounded-full"
                    />
                  </div>

                  <p className="mt-3">Benjamin Cillian</p>
                </div>
              </div>
            </div>
          ))}
        </AliceCarousel>
        <div
          onClick={(e) => handlePrevClick(e, carousel)}
          className="absolute left-[0%] md:left-[-5%] w-[54px] h-[54px] bg-[#C5AC80] flex justify-center items-center rounded-full sm:visible top-1/3  transform -translate-y-1/2 text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out focus:outline-none"
        >
          {/* <ArrowNarrowLeftIcon className="h-5 w-5" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          onClick={(e) => handleNextClick(e, carousel)}
          className="absolute bg-[#C5AC80]  rounded-full w-[54px] h-[54px] flex justify-center items-center md:right-[-5%] right-[0%] sm:visible top-1/3  transform -translate-y-1/2 text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out focus:outline-none"
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
              d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SatisfiedClients;
