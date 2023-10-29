import React from 'react';
import { Link } from 'react-router-dom';

function BasicInfoForm() {
    return (
        <div className="container mt-6 mx-auto p-5 border rounded-lg shadow ">
            <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600">Full Name</label>
                    <input type="text" id="name" className="w-full rounded border p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-600">Phone Number</label>
                    <input type="text" id="phone" className="w-full rounded border p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600">Email Address</label>
                    <input type="email" id="email" className="w-full rounded border p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="linkedin" className="block text-gray-600">LinkedIn Profile</label>
                    <input type="text" id="linkedin" className="w-full rounded border p-2" />
                </div>
            </form>
            <div className='w-full flex justify-end'>
                <Link to='/work-experience-form'><button className="bg-blue-700 rounded-md p-4 text-white">
                    Move to Work Experirence
                </button></Link>
            </div>

        </div>

    );
}

export default BasicInfoForm;
