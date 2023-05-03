import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(name)
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email)
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    console.log(phone)
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password)
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !email || !phone || !password) {
      setError('Please fill in all fields');
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/register", {
        name,
        email,
        phone,
        password,
      });
  
      if (response.status === 200) {
        // Redirect user to the login page after successful registration
        window.location.href = "/login";
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError(window.alert('Email already exists'));
      } else {
        setError('Invalid credentials');
      }
      console.log(error);
    }
  };
  

  return (
    <>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:my-[50px] lg:py-0">
          <div className="w-full bg-[#C5AC80] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign Up
              </h1>
              <form className="space-y-4 md:space-y-6"  onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    className="bg-gray-50 bg-opacity-25 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="bg-gray-50 bg-opacity-25 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your phone
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="bg-gray-50 bg-opacity-25 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="bg-gray-50 bg-opacity-25 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="********"
                    required
                  />
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp




