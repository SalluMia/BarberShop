import React from 'react';
import { useState } from 'react';

function Service() {
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
  return (
    <div className='mt-12'>
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
            name='bordered-checkbox'
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
            name='bordered-checkbox'
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
            name='bordered-checkbox'
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
            name='bordered-checkbox'
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
            name='bordered-checkbox'
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
            name='bordered-checkbox'
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
    </div>
  );
}

export default Service;
