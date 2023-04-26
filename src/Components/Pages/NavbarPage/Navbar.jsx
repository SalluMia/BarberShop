import React from 'react';
import logo from '../../../assets/icons/logo.png';
const Navbar = (props) => {
  console.log(props);
  return (
    <>
      <nav class='bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
        <div class='flex flex-wrap items-center justify-between mx-auto'>
          <a href='#' class='flex items-center col-md-4 py-3'>
            <img src={logo} className='w-[213px] h-[44px] ml-5 my-auto mt-3' />
          </a>
          <button
            data-collapse-toggle='navbar-dropdown'
            type='button'
            class='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-dropdown'
            aria-expanded='false'
          >
            <span class='sr-only'>Open main menu</span>
            <svg
              class='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
          <div class='hidden w-full md:block md:w-auto' id='navbar-dropdown'>
            <ul class='flex flex-col font-medium  md:p-0 py-3 my-auto rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <button
                  class='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'
                  aria-current='page'
                >
                  Home
                </button>
              </li>
              <li>
                <button class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                  About
                </button>
              </li>
              <li>
                <button class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                  Services
                </button>
              </li>
              <li>
                <button class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                  Advantages
                </button>
              </li>
              <li>
                <button className=' w-[146px] h-[43px] rounded-[70px] bg-[#C5AC80]'>
                  Log In
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div className=' flex mt-2 py-3'>
        <div className='col-md-4'>
          <img src={logo} className='w-[213px] h-[44px] ml-5' />
        </div>
        <div className='col-md-8 flex justify-evenly items-center'>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Advantages</p>
          <button className=' w-[146px] h-[43px] rounded-[70px] bg-[#C5AC80]'>
            Log In
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
