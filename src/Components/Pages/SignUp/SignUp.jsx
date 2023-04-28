import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
    <section class="dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:my-[50px] lg:py-0">
      <div class="w-full bg-[#C5AC80] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign Up
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="text" name="name" id="name" class="bg-gray-50 bg-opacity-25 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required="" />
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 bg-opacity-25 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="phone" name="phone" id="phone" class="bg-gray-50 bg-opacity-25 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="phone" required="" />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 bg-opacity-25 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 bg-opacity-25 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <button type="submit" className="w-full text-white bg-black rounded-full hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link to={"/login"} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    {/* <div className="flex justify-center md:p-20 p-3">

      <div className="flex  items-center flex-col bg-[#C5AC80] md:px-[100px] px-3 rounded-[20px] ">
        <h1 className="flex justify-center items-center mt-5">Sign Up</h1>
        <div className="flex justify-center items-center flex-col w-100">
          <input
            type="text"
            placeholder="Name"
            class="w-100 h-[50px]  rounded-[6px] bg-white bg-opacity-25 border border-white p-3 mt-5"
          />
          <input
            type="email"
            placeholder="Email Address"
            class="w-100 h-[50px]  rounded-[6px] bg-white bg-opacity-25 border border-white p-3 mt-4"
          />
          <input
            type="number"
            placeholder="Phone"
            class="w-100 h-[50px]  rounded-[6px] bg-white bg-opacity-25 border border-white p-3 mt-4"
          />
          <input
            type="password"
            placeholder="Password"
            class="w-100 h-[50px]  rounded-[6px] bg-white bg-opacity-25 border border-white p-3 mt-4"
          />
          <input
            type="password"
            placeholder="Confrim Password"
            class="w-100 h-[50px]  rounded-[6px] bg-white bg-opacity-25 border border-white p-3 mt-4"
          />

          <button class="w-[572px] h-[47px]  rounded-[70px] bg-black mt-[60px] text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default SignUp;
