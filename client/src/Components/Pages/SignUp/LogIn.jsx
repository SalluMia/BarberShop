import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
    console.log(username)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    console.log(password)
  }
  const handleSubmit = async(event) => {
    event.preventDefault()
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: username.toString(),
        password: password.toString(),
      });
      if (response.status === 200) {
        // Redirect user to the login page after successful registration
        window.location.href = "/services";
      }
    } catch (error) {
        setError(window.alert('Invalid email or password.'));
      console.log(error);
    }
  }
  

  return (
    <>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:my-[50px] lg:py-0">
          <div className="w-full bg-[#C5AC80] rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Log In
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                {error && <span className="error-message">{error}</span>}
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 bg-opacity-25 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" value={username} onChange={handleUsernameChange} required="" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 bg-opacity-25 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " value={password} onChange={handlePasswordChange} required="" />
                </div>
                <button type="submit" className="w-full text-white bg-black rounded-full hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600">Log In</button>
                <p className="text-sm font-light text-gray-500 ">
                  Don't have an account? <Link to={"/signup"} className="font-medium text-primary-600 hover:underline ">SingUp here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LogIn
