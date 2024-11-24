import React, { useState } from 'react';
import axios from 'axios';
import "./home.css"
import toast from 'react-hot-toast';

function GetInTouch() {
    const [loading, setLoading] = useState(false); // Loading state
    const [sent, setSent] = useState(false); // Sent state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        location: "",
        message: "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if ((name === 'contact') && !/^\d*$/.test(value)) { // Allow only digits
            toast.error("Must contain only digits.");
            return; // Prevent state update for invalid input
        }
        setFormData((currData) => ({
            ...currData,
            [e.target.name]: e.target.value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate Aadhar number
        if (formData.contact.length !== 10) {
            toast.error("Aadhar number must be exactly 12 digits.");
            return;
        }
        setLoading(true);
        try {
            const resp = await axios.post(`http://localhost:8090/portfolio/contact`, formData, { withCredentials: true });
            if (resp.status === 200) {
                console.log(resp.data);
                toast.success("Form submitted successfully!");
                setLoading(false)
                setSent(true); // Mark as sent
            }
            setFormData({
                name: "",
                email: "",
                contact: "",
                location: "",
                message: "",
            });
        } catch (error) {
            console.error('Error:', error);
            toast.error("Failed to submit the form. Please try again.");
        }
        setLoading(false); // Stop loading
        // Reset the form data only if it's not sent
        if (!sent) {
            setFormData({
                name: "",
                email: "",
                contact: "",
                location: "",
                message: "",
            });
        }
    };
    return (<div>
        <div className="getintouch">
            <div className="touchMain container mt-4">
                <h1>Get In Touch</h1>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                <div className="touchForm">
                    <div class="mt-10  sm:w-full ">
                        <form onSubmit={handleSubmit}>
                            <div style={{ width: '90%' }} className="space-y-12 container">

                                <div className=" border-gray-900/10 pb-12">

                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Your Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="name"
                                                    name="name"
                                                    placeholder='Enter Name'
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    type="text"
                                                    autoComplete="given-name"
                                                    className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    required
                                                />
                                            </div>
                                        </div>



                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Email address
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder='Enter Email'
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                                                Contact Number
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    value={formData.contact}
                                                    onChange={handleInputChange}
                                                    placeholder='Enter Contact Number'
                                                    id="contact"
                                                    name="contact"
                                                    type="contact"
                                                    autoComplete="contact"
                                                    className="block p-3 w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                                Location
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    value={formData.location}
                                                    onChange={handleInputChange}
                                                    placeholder='Enter Location'
                                                    id="location"
                                                    name="location"
                                                    type="text"
                                                    autoComplete="location"
                                                    className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-6">
                                            <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                                                Message
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    id="message"
                                                    name="message"
                                                    rows="4"
                                                    className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="Enter Message here"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ width: '90%' }} className="my-6 flex items-center justify-start gap-x-6 container">
                                <button
                                    type="submit"
                                    className="contactBtn rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    disabled={loading} // Disable button when loading
                                >
                                    {loading ? "Submitting..." : "Send Message"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default GetInTouch;