import { useState } from 'react';
import axios from 'axios';
import "react-day-picker/dist/style.css";
import './style.css';

const AppointmentForm = () => {
    const [services, setServices] = useState({
        haircut: false,
        shave: false,
        hairDye: false,
        beardGrooming: false,
        straightRazorShave: false,
        kidsHaircut: false,
    });
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleServiceChange = (event) => {
        const { name, checked } = event.target;
        setServices((prevServices) => ({
            ...prevServices,
            [name]: checked,
        }));
        console.log(services)
    };

    const selectedServices = {
        haircut: services.haircut,
        shave: services.shave,
        hairDye: services.hairDye,
        beardGrooming: services.beardGrooming,
        straightRazorShave: services.straightRazorShave,
        kidsHaircut: services.kidsHaircut
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        console.log(selectedDate);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:5000/services", {
            name,
            phone,
            address,
            selectedServices,
            date: selectedDate,
            time: selectedTime
        })
            .then((response) => {
                if (response.status === 201) {
                    setSuccess(true);
                    setName("");
                    setPhone("");
                    setAddress("");
                    setSelectedDate("");
                    setSelectedTime("");
                    setServices({
                        haircut: false,
                        shave: false,
                        hairDye: false,
                        beardGrooming: false,
                        straightRazorShave: false,
                        kidsHaircut: false,
                    });
                }
            })
            .catch((error) => {
                setError(true);
                console.log(error);
            });
    };



    return (

        <div className="container mx-auto">
            <form onSubmit={handleSubmit} className="">
                <p className='mt-5 pt-5'>Make a Appointment with</p>
                <h4>Barba Raja</h4>
                <div className="mb-4">
                    <h2 className="my-5 font-medium ">Select Services</h2>

                    <div className="grid grid-cols-3 gap-4">
                        <label className="inline-flex items-center bg-white shadow p-4 border border-gray-200 rounded dark:border-gray-700">
                            <input
                                type="checkbox"
                                name="haircut"
                                checked={services.haircut}
                                onChange={handleServiceChange}
                                className="form-checkbox h-5 w-5 text-blue-600"
                                class='w-8 h-8   mr-1 text-black bg-gray-100 shadow-none focus:ring-green-500 '
                            />
                            <span className="ml-2 text-gray" class=' text-gray-900 dark:text-gray-300'>Hair cut</span>
                        </label>

                        <label className="inline-flex items-center bg-white shadow p-4 border border-gray-200 rounded dark:border-gray-700">
                            <input
                                type="checkbox"
                                name="shave"
                                checked={services.shave}
                                onChange={handleServiceChange}
                                className="form-checkbox h-5 w-5 text-blue-600"
                                class='w-8 h-8   mr-1 text-black bg-gray-100 shadow-none focus:ring-green-500 '
                            />
                            <span className="ml-2" class=' text-gray-900 dark:text-gray-300'>Shave</span>
                        </label>

                        <label className="inline-flex items-center bg-white shadow p-4 border border-gray-200 rounded dark:border-gray-700">
                            <input
                                type="checkbox"
                                name="hairDye"
                                checked={services.hairDye}
                                onChange={handleServiceChange}
                                className="form-checkbox h-5 w-5 text-blue-600"
                                class='w-8 h-8  mr-1 text-black bg-gray-100 shadow-none focus:ring-green-500 '
                            />
                            <span className="ml-2" class=' text-gray-900 dark:text-gray-300' >Hair dye</span>
                        </label>

                        <label className="inline-flex items-center bg-white shadow p-4 border border-gray-200 rounded dark:border-gray-700">
                            <input
                                type="checkbox"
                                name="beardGrooming"
                                checked={services.beardGrooming}
                                onChange={handleServiceChange}
                                className="form-checkbox h-5 w-5 text-blue-600"
                                class='w-8 h-8  mr-1 text-black bg-gray-100 shadow-none focus:ring-green-500 '
                            />
                            <span className="ml-2" class=' text-gray-900 dark:text-gray-300'>Beard grooming</span>
                        </label>

                        <label className="inline-flex items-center bg-white shadow p-4 border border-gray-200 rounded dark:border-gray-700">
                            <input
                                type="checkbox"
                                name="straightRazorShave"
                                checked={services.straightRazorShave}
                                onChange={handleServiceChange}
                                className="form-checkbox h-5 w-5 text-blue-600"
                                class='w-8 h-8 mr-1   text-black bg-gray-100 shadow-none focus:ring-green-500 '
                            />
                            <span className="ml-2" class=' text-gray-900 dark:text-gray-300'>Straight razor shave</span>
                        </label>

                        <label className="inline-flex items-center bg-white shadow p-4 border border-gray-200 rounded dark:border-gray-700">
                            <input
                                type="checkbox"
                                name="kidsHaircut"
                                checked={services.kidsHaircut}
                                onChange={handleServiceChange}
                                className="form-checkbox h-5 w-5 text-blue-600"
                                class='w-8 h-8 mr-1   text-black bg-gray-100 shadow-none focus:ring-green-500 '
                            />
                            <span className="ml-2" class=' text-gray-900 dark:text-gray-300'>Kids Hair Cut</span>
                        </label>
                    </div>
                </div>

                <h2 className="font-medium my-5">Personal Information</h2>
                <div className="mb-4 grid grid-cols-2 gap-4">

                    <div>

                        <div className="mb-2 ">
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={handleNameChange}
                                class=" border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryFontColor focus:border-priring-primaryFontColor block w-full p-2.5 "

                            />
                        </div>

                    </div>
                    <div>
                        <div className="mb-2">
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phone"
                                name="phone"
                                type="text"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={handlePhoneChange}
                                class=" border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryFontColor focus:border-priring-primaryFontColor block w-full p-2.5 "

                            />
                        </div>
                    </div>

                </div>
                <div className="mb-2 ">
                    <textarea
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="address"
                        name="address"
                        placeholder="Enter your address"
                        value={address}
                        onChange={handleAddressChange}
                        class=" border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryFontColor focus:border-priring-primaryFontColor block w-full p-2.5 "

                    ></textarea>
                </div>


                <div className="mb-4 flex flex-wrap my-5">
                    <div className="mb-2 w-full sm:w-1/2">
                        <h4 className="font-medium">Select Date</h4>
                        <div className="flex items-center">
                            <input
                                className="appearance-none border mt-2 shadow rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="date"
                                name="date"
                                type="date"
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </div>
                    </div>

                    <div className="mb-2 w-full sm:w-1/2">
                        <h4 className="font-medium">Select Time</h4>
                        <div className="flex items-center">
                            <div className="flex flex-wrap">
                                {["10:00 am", "11:00 am", "12:00 am", "1:00 pm", "2:00 pm", "3:00 pm"].map((time) => (
                                    <label key={time} className="inline-flex items-center my-2 ml-1 mr-1 px-3 border rounded py-4 w-full sm:w-1/4 md:w-1/4 lg:w-1/4 shadow bordered-box">
                                        <input
                                            type="radio"
                                            name="time"
                                            value={time}
                                            checked={selectedTime === time}
                                            onChange={handleTimeChange}
                                            className="form-radio h-7 w-7 mr-1 text-blue-600"
                                        />
                                        <span className="ml-2" class='text-gray-900 dark:text-gray-300'><b> {time}</b></span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>



                <button type="submit" class="text-black bg-[#C5AC80] hover:bg-primaryDark focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-3">
                    Make a Appointment
                </button>

                <div>
                    {success && (
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Appointment!</strong> is booked
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    )}
                    {error && (
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Failed!</strong> to insert data.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>
                    )}
                </div>

            </form>
        </div>
    )
}
export default AppointmentForm

