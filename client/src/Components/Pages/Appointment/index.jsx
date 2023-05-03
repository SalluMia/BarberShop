import React, { useState } from "react";
import "./Appointment.css";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

import { DayPicker } from "react-day-picker";
import axios from "axios";
function index() {

  const [checkboxes, setCheckboxes] = useState([]);

  const handleCheckboxChange = (event) => {
    console.log(event.target.value);
    const targetCheckbox = event.target.value;
    
    if (checkboxes.includes(targetCheckbox)) {
      setCheckboxes(
        checkboxes.filter((checkbox) => checkbox !== targetCheckbox)
      );
    } else {
      setCheckboxes([...checkboxes, targetCheckbox]);
    }
  };

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

const [name, setName] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(name)
  };

  const handleAddressChange = (e) => {
    setaddress(e.target.value);
    console.log(address)
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    console.log(phone)
  };

const handleSubmit=async(e)=>{
  e.preventDefault();
     try{
       
      const response=await axios.post('http://localhost:5000/services',{
        name,
        phone,
        address,
        checkboxes,
        time
      })
      if (response.status === 200) {
        // Redirect user to the login page after successful registration
         setSuccess(window.alert('Data inserted Successfully'));
      }
      
     }
     catch(error){
      setError(window.alert('Invalid Cred'));
       console.log(error)
     } 
}
  return (
    <div className="px-2 md:mx-28 mb-7 mt-28">
      <style>{css}</style>
      <div>
        <p className="text-primaryFontColor">Make a Appointment with</p>
        <h3>Barba Raja</h3>
      </div>
      <div className="mt-7">
        {/* <h3>Personal Information</h3> */}
        <div>
          <form onSubmit={handleSubmit}>
          <h3>Select Service</h3>
      <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 mt-3'>
        <div
          class={`flex mb-2 items-center mr-5 shadow-sm ${
            checkboxes.includes('Hair Cut')
              ? ' bg-primaryFontColor'
              : ' bg-white'
          }  pl-4 border border-gray-200 rounded dark:border-gray-700`}
        >
          <input
            id='bordered-checkbox-1'
            type='checkbox'
            value='Hair Cut'
            name='borderedcheckbox'
            class='w-8 h-8    text-black bg-gray-100 shadow-none focus:ring-green-500 '
            onChange={handleCheckboxChange}
            checked={checkboxes.includes('Hair Cut')}
          />
          <label
            for='bordered-checkbox-1'
            class={`w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
              checkboxes.includes('Hair Cut') ? ' text-white' : ''
            }`}
          >
            Hair Cut
          </label>
        </div>
        <div
          class={`flex mb-2 items-center shadow-sm ${
            checkboxes.includes('Shave') ? 'bg-primaryFontColor' : 'bg-white'
          }  mr-5 pl-4 border border-gray-200 rounded dark:border-gray-700`}
        >
          <input
            id='bordered-checkbox-1'
            type='checkbox'
            value='Shave'
            name='borderedcheckbox'
            class='w-8 h-8 text-blue-600 shadow-none bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            onChange={handleCheckboxChange}
            checked={checkboxes.includes('Shave')}
          />
          <label
            for='bordered-checkbox-1'
            class={`w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
              checkboxes.includes('Shave') ? ' text-white' : ''
            } `}
          >
            Shave
          </label>
        </div>
        <div
          class={`flex mb-2 shadow-sm  ${
            checkboxes.includes('Hair Dye') ? 'bg-primaryFontColor' : 'bg-white'
          } items-center mr-5 pl-4 border border-gray-200 rounded dark:border-gray-700`}
        >
          <input
            id='bordered-checkbox-1'
            type='checkbox'
            value='Hair Dye'
            name='borderedcheckbox'
            class='w-8 h-8 text-blue-600 shadow-none bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            onChange={handleCheckboxChange}
            checked={checkboxes.includes('Hair Dye')}
          />
          <label
            for='bordered-checkbox-1'
            class={`w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
              checkboxes.includes('Hair Dye') ? ' text-white' : ''
            } `}
          >
            Hair Dye
          </label>
        </div>
        <div
          class={`flex shadow-sm ${
            checkboxes.includes('Beard Grooming')
              ? 'bg-primaryFontColor'
              : 'bg-white'
          } items-center mr-5 mt-2 pl-4 border border-gray-200 rounded dark:border-gray-700`}
        >
          <input
            id='bordered-checkbox-1'
            type='checkbox'
            value='Beard Grooming'
            name='borderedcheckbox'
            class='w-8 h-8 text-blue-600 shadow-none bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            onChange={handleCheckboxChange}
            checked={checkboxes.includes('Beard Grooming')}
          />
          <label
            for='bordered-checkbox-1'
            class={`w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
              checkboxes.includes('Beard Grooming') ? ' text-white' : ''
            } `}
          >
            Beard Grooming
          </label>
        </div>
        <div
          class={`flex shadow-sm  ${
            checkboxes.includes('Straight Razor Shave')
              ? 'bg-primaryFontColor'
              : 'bg-white'
          } items-center mr-5 mt-2 pl-4 border border-gray-200 rounded dark:border-gray-700`}
        >
          <input
            id='bordered-checkbox-1'
            type='checkbox'
            value='Straight Razor Shave'
            name='borderedcheckbox'
            class='w-8 h-8 text-blue-600 shadow-none bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            onChange={handleCheckboxChange}
            checked={checkboxes.includes('Straight Razor Shave')}
          />
          <label
            for='bordered-checkbox-1'
            class={`w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
              checkboxes.includes('Straight Razor Shave') ? ' text-white' : ''
            }`}
          >
            Straight Razor Shave
          </label>
        </div>
        <div
          class={`flex shadow-sm ${
            checkboxes.includes('Kids Haircut')
              ? 'bg-primaryFontColor'
              : 'bg-white'
          } items-center mr-5 mt-2 pl-4 border border-gray-200 rounded dark:border-gray-700`}
        >
          <input
            id='bordered-checkbox-1'
            type='checkbox'
            value='Kids Haircut'
            name='borderedcheckbox'
            class='w-8 h-8 text-blue-600 shadow-none bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            onChange={handleCheckboxChange}
            checked={checkboxes.includes('Kids Haircut')}
          />
          <label
            for='bordered-checkbox-1'
            class={`w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
              checkboxes.includes('Kids Haircut') ? ' text-white' : ''
            }`}
          >
            Kid's Haircut
          </label>
        </div>
      </div>

      <h3 class='my-4'>Personal Information</h3>
            <div class="grid gap-6 mb-6 md:grid-cols-2 mt-4">
              <div>
                <input
                  type="text"
                  id="first_name"
                  class=" border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryFontColor focus:border-priring-primaryFontColor block w-full p-2.5 "
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="last_name"
                  class=" border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryFontColor focus:border-priring-primaryFontColor block w-full p-2.5 "
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                />
              </div>
            </div>
            <div class="flex items-center border shadow-sm rounded-md px-3 py-2">
              <input
                type="text"
                class="flex-grow focus:outline-none "
                placeholder="Address..."
                id="address"
                name="address"
                value={address}
                onChange={handleAddressChange}

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
            

            {/* time  */}
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
            name="date"
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




    <div className="mt-7">
        <button
          type="submit"
          class="text-black bg-[#C5AC80] hover:bg-primaryDark focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Make An Appointment
        </button>
      </div>
          </form>
        </div>
      </div>


      


      
    </div>
  );
}

export default index;
