import React from 'react';

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
              src='https://s3-alpha-sig.figma.com/img/834a/bfcc/08197be291813a22d4d9cb14c745655a?Expires=1682899200&Signature=PuARXh4znp9KhO~NXU4zSbMOvROTIps4H0FKBx8Kz4XUjlx94YWBCmbDn4N3~I8nJJNqebRAU1xwJcuEpfjKhUH-1~2wc4CNiqyZdXBjOfaoRpMXzBq5jPnr7BvgJUU63LKmX4cVnY0a8qeI2qhWHN0Mm1Ma~hGeaqfCjgabVdOm6~Cs3J6hZtAGF3b9Pfb1vQuCOj~FczdwG2PSKkQpHAmz~qqOWi2q4advL6n3mJIJ9IMMZJMGxd3mZuHjuFHr8bxwKIGEmqvxqLqGyfU3CFSd9h0UXW4NP7XxyB6Evbq3qHdVa54xITyHyzJ0bPAX3LoIFAVatPUbrhwnOEsAQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            />
          </div>
      </div>
    </div>
  );
};

export default Book;
