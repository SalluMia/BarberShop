import React from 'react';
import bookslot from '../../../assets/bookslot.png'

const Book = () => {
  return (
    <div className='relative'>
      <div className=' md:h-[40vh] h-[70vh] mx-[1px] mt-[80px] mb-5 bg-[#1E1E1E]  background-image-About flex w-full'>

      <div className='absolute top-0'>
        <svg
          width='100%'
          height='258'
          viewBox='0 0 1301 258'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            opacity='0.3'
            d='M1 0.5L302 30L531 218.5L950.5 155L1300.5 257.5'
            stroke='#C5AC80'
            stroke-dasharray='12 12'
          />
        </svg>
      </div>

      <div className='absolute top-[80px] px-10 items-center w-100'>
          <div className='flex flex-col justify-evenly  gap-y-2'>
            <h1 className='text-3xl text-[#C5AC80]'>Book Your Slot Now</h1>
            <p className='text-sm text-white md:w-[400px]'>
              Aenean fringilla dignissim tempor. Fusce et orci vel est semper
              iaculis non bibendum elit.
            </p>

            <button className=' w-[146px] h-[43px] bg-[#C5AC80] rounded-3xl flex items-center justify-center'>
              Book Now
            </button>
          </div>

        </div>
          <div className='absolute right-0 bottom-0'>
            <img
              className='w-[355px] h-[355px]'
              src={bookslot}
            />
          </div>
      </div>
    </div>
  );
};

export default Book;
