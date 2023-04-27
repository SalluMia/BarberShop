import React from 'react';
import '../../../Styles/Styles.css';
// import { ReactComponent as SearchOp } from "../../../assets/icons/SearchOp.svg";
const Search = () => {
  return (
    <div className='bg-[#1E1E1E] background-image-Listing text-[white] flex justify-center items-center relative'>
      <div className='absolute w-[80%] flex justify-end'>
        <input
          type='search'
          placeholder='Search Barber here'
          className='search-field ring-transparent bg-transparent w-full h-[75px] border border-[#C5AC80] rounded-[70px] pl-16 pr-5 text-[18px]'
        />
      </div>
      <div className=' relative ml-[65%]'>
        <svg
          width='27'
          height='26'
          viewBox='0 0 27 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g opacity='0.7'>
            <path
              d='M12 22C17.799 22 22.5 17.299 22.5 11.5C22.5 5.70101 17.799 1 12 1C6.20101 1 1.5 5.70101 1.5 11.5C1.5 17.299 6.20101 22 12 22Z'
              stroke='white'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M19.425 18.925L25.5 25'
              stroke='white'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Search;
