import React from 'react';
import '../../../Styles/Styles.css';
import man from '../../../assets/icons/man.png';
const About = () => {
  return (
    <div className='relative h-100'>
      {/* <div className="flex p-2  w-full">
        <div className="col-6 h-[660px]  flex items-end p-5 ">
          <div className="w-[250px] h-[250px] rounded-[6px] bg-[#C5AC80] flex rotate-45 "></div>
        </div>
        <div className="col-6 justify-end flex p-5 float-right">
          <div className="w-[150px] h-[150px] rounded-[6px] bg-[#C5AC80] flex rotate-45 -mt-3 mr-[-20px] "></div>
        </div>
      </div> */}
      <div className='rectangle md:bg-left-bottom bg-left-top'>
        <div className='rectangle-sm md:bg-right-top bg-right-bottom '>
          <div className='bg-[#1E1E1E] background-image-About  md:flex relative md:py-0 py-10'>
            <div className='md:w-[40%]'>
              <div className=' md:flex mt-10 -ml-1 relative md:top-[50px] top-[-20px] md:right-[-70px] right-[20px] w-[250px]'>
                <img src={man} />
              </div>
            </div>
            <div className='md: text-white my-auto md:w-[50%] px-5'>
              <h2>About Us</h2>
              <p>
                Suspendisse velit risus, efficitur nec lacinia sit amet, finibus
                a dolor. Aenean elementum lacinia purus, non rhoncus justo
                dignissim sed.
              </p>
              <p>
                Nulla magna ipsum, pellentesque id rutrum eget, feugiat eget
                velit. Mauris ornare, lacus in faucibus faucibus, ligula ligula
                imperdiet tortor, quis sodales nunc turpis nec diam.
              </p>
              <button className='w-[146px] h-[43px] bg-[#C5AC80] rounded-[70px]'>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
