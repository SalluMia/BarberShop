import React from "react";

const SignUp = () => {
  return (
    <div className=" flex justify-center p-20">
      <div className="flex  items-center flex-col bg-[#C5AC80] w-[794px] h-[668px] rounded-[20px] ">
        <h1 className="flex justify-center items-center mt-5">Sign Up</h1>
        <div className="flex justify-center items-center flex-col">
          <input
            type="text"
            placeholder="Name"
            class="w-[572px] h-[50px]  rounded-[6px] bg-white bg-opacity-25 border border-white p-3 mt-5"
          />
          <input
            type="email"
            placeholder="Email Address"
            class="w-[572px] h-[50px]  rounded-[6px] bg-white bg-opacity-25 border border-white p-3 mt-4"
          />
          <input
            type="number"
            placeholder="Phone"
            class="w-[572px] h-[50px]  rounded-[6px] bg-white bg-opacity-25 border border-white p-3 mt-4"
          />
          <input
            type="password"
            placeholder="Password"
            class="w-[572px] h-[50px]  rounded-[6px] bg-white bg-opacity-25 border border-white p-3 mt-4"
          />
          <input
            type="password"
            placeholder="Confrim Password"
            class="w-[572px] h-[50px]  rounded-[6px] bg-white bg-opacity-25 border border-white p-3 mt-4"
          />

          <button class="w-[572px] h-[47px]  rounded-[70px] bg-black mt-[60px] text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
