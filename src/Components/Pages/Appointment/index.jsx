import React, { useState } from "react";
import "./Appointment.css";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
// import "react-day-picker/dist/style.css";
import Service from "./Service";
import Time from "./Time";
function index() {
  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    color:#FFFFFF
    // border: 2px solid currentColor;
    background-color:#c4ac80
  }
//   .my-selected:hover:not([disabled]) { 
//     border-color: blue;
//     color: blue;
//   }
//   .my-today { 
//     font-weight: bold;
//   }
`;
  return (
    <div className="px-2 md:mx-28 mb-7 mt-28">
      <style>{css}</style>
      <div>
        <p className="text-primaryFontColor">Make a Appointment with</p>
        <h3>Barba Raja</h3>
      </div>
      <Service />
      <div className="mt-7">
        <h3>Personal Information</h3>
        <div>
          <form>
            <div class="grid gap-6 mb-6 md:grid-cols-2 mt-4">
              <div>
                <input
                  type="text"
                  id="first_name"
                  class=" border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryFontColor focus:border-priring-primaryFontColor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryFontColor dark:focus:border-priring-primaryFontColor"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="last_name"
                  class=" border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryFontColor focus:border-priring-primaryFontColor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryFontColor dark:focus:border-blue-500"
                  placeholder="Phone"
                  required
                />
              </div>
            </div>
            <div class="flex items-center border shadow-sm rounded-md px-3 py-2">
              <input
                type="text"
                class="flex-grow focus:outline-none "
                placeholder="Address..."
              />
              <svg
                fill="#c4ac80"
                version="1.1"
                className="w-6 h-6"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 395.71 395.71"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </form>
        </div>
      </div>
      <Time />
      <div className="mt-7">
        <button
          type="button"
          class="text-black bg-primaryFontColor hover:bg-primaryDark focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Make An Appointment
        </button>
      </div>
    </div>
  );
}

export default index;
