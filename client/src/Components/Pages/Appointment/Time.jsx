import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
function Time() {
  const [selected, setSelected] = useState(new Date());
  const [open, setopen] = useState(false);
  const [time, settime] = useState([]);
  const handleTimeChanges = (event) => {
    console.log(event.target.value);
    const targetRadiobox = event.target.value;

    settime(targetRadiobox);
  };
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <div className="mt-14 grid gap-6 mb-6 md:grid-cols-2 ">
      <div>
        <h3>Select Date</h3>
        <div class="flex items-center justify-between border shadow-md rounded-md px-3 mt-7 py-2 cursor-pointer">
          <svg
            fill="#c4ac80"
            width="64px"
            className="h-5 w-5"
            height="64px"
            viewBox="0 0 32.00 32.00"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#c4ac80"
            stroke-width="0.00032"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M 26 6 L 6 15.21875 L 6 16.78125 L 26 26 L 26 23.84375 L 9.46875 16 L 26 8.15625 Z"></path>
            </g>
          </svg>
          <input
            type="text"
            value={format(selected, "PP")}
            onClick={() => {
              setopen(!open);
            }}
            class="focus:outline-none cursor-pointer font-semibold "
            placeholder="Date"
            readOnly
          />
          <svg
            fill="#c4ac80"
            width="64px"
            className="h-5 w-5"
            height="64px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#c4ac80"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M 6 6 L 6 8.15625 L 22.53125 16 L 6 23.84375 L 6 26 L 26 16.78125 L 26 15.21875 Z"></path>
            </g>
          </svg>
        </div>
        <div></div>
        {open && (
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            modifiersClassNames={{
              selected: "my-selected",
              today: "my-today",
            }}
            modifiersStyles={{
              disabled: { fontSize: "75%" },
            }}
            footer={footer}
            styles={{
              caption: { color: "#c4ac80" },
              head: { color: "#c4ac80" },
              tbody: {
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              },

              // head_row: {
              //   boxShadow:
              //     " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              // },
            }}
          />
        )}
      </div>
      <div>
        <h3>Select Time</h3>
        <div className="mt-7">
          <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 mt-3">
            <div
              class={`flex items-center shadow-sm mr-5 ${
                time.includes("10:00 am") ? " bg-primaryFontColor" : " bg-white"
              }  pl-4 border mb-2 border-gray-200 rounded dark:border-gray-700`}
            >
              <input
                id="bordered-checkbox-1"
                type="radio"
                value="10:00 am"
                name="radioTime"
                class="w-8 h-8 form-radio bg-gray-100 shadow-none  border-gray-300 rounded-full "
                onChange={handleTimeChanges}
                checked={time.includes("10:00 am")}
              />
              <label
                for="bordered-checkbox-1"
                class={`w-full py-4 ml-2 text-md font-medium text-gray-900 dark:text-gray-300 ${
                  time.includes("10:00 am") ? " text-white" : ""
                }`}
              >
                10:00 am
              </label>
            </div>
            <div
              class={`flex items-center shadow-sm ${
                time.includes("11:00 am") ? "bg-primaryFontColor" : "bg-white"
              }  mr-5 pl-4 mb-2 border border-gray-200 rounded dark:border-gray-700`}
            >
              <input
                id="bordered-checkbox-1"
                type="radio"
                value="11:00 am"
                name="radioTime"
                class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded shadow-none dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={handleTimeChanges}
                checked={time.includes("11:00 am")}
              />
              <label
                for="bordered-checkbox-1"
                class={`w-full py-4 ml-2 text-md font-medium text-gray-900 dark:text-gray-300 ${
                  time.includes("11:00 am") ? " text-white" : ""
                } `}
              >
                11:00 am
              </label>
            </div>
            <div
              class={`flex shadow-sm ${
                time.includes("12:00 am") ? "bg-primaryFontColor" : "bg-white"
              } items-center mb-2 mr-5 pl-4 border border-gray-200 rounded dark:border-gray-700`}
            >
              <input
                id="bordered-checkbox-1"
                type="radio"
                value="12:00 am"
                name="radioTime"
                class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded shadow-none dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={handleTimeChanges}
                checked={time.includes("12:00 am")}
              />
              <label
                for="bordered-checkbox-1"
                class={`w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
                  time.includes("12:00 am") ? " text-white" : ""
                } `}
              >
                12:00 am
              </label>
            </div>
            <div
              class={`flex shadow-sm  ${
                time.includes("01:00 pm") ? "bg-primaryFontColor" : "bg-white"
              } items-center mr-5 mt-2 pl-4 border border-gray-200 rounded dark:border-gray-700`}
            >
              <input
                id="bordered-checkbox-1"
                type="radio"
                value="01:00 pm"
                name="radioTime"
                class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded shadow-none dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={handleTimeChanges}
                checked={time.includes("01:00 pm")}
              />
              <label
                for="bordered-checkbox-1"
                class={`w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
                  time.includes("01:00 pm") ? " text-white" : ""
                } `}
              >
                01:00 pm
              </label>
            </div>
            <div
              class={`flex shadow-sm ${
                time.includes("02:00 pm") ? "bg-primaryFontColor" : "bg-white"
              } items-center mr-5 mt-2 pl-4 border border-gray-200 rounded dark:border-gray-700`}
            >
              <input
                id="bordered-checkbox-1"
                type="radio"
                value="02:00 pm"
                name="radioTime"
                class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded shadow-none dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={handleTimeChanges}
                checked={time.includes("02:00 pm")}
              />
              <label
                for="bordered-checkbox-1"
                class={`w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
                  time.includes("02:00 pm") ? " text-white" : ""
                }`}
              >
                02:00 pm
              </label>
            </div>
            <div
              class={`flex shadow-sm ${
                time.includes("03:00 pm") ? "bg-primaryFontColor" : "bg-white"
              } items-center mr-5 mt-2 pl-4 border border-gray-200 rounded dark:border-gray-700`}
            >
              <input
                id="bordered-checkbox-1"
                type="radio"
                value="03:00 pm"
                name="radioTime"
                class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded shadow-none dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={handleTimeChanges}
                checked={time.includes("03:00 pm")}
              />
              <label
                for="bordered-checkbox-1"
                class={`w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
                  time.includes("03:00 pm") ? " text-white" : ""
                }`}
              >
                03:00 pm
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Time;
