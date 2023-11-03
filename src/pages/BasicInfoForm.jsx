import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ResumeBuilderContext } from '../store/states';

const BasicInfoForm =() => {
    const { basicInfo, setBasicInfo } = useContext(ResumeBuilderContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBasicInfo({
            ...basicInfo,
            [name]: value,
        });
    };
    return (
        <>
        
            
            <div className="container mt-6 mx-auto p-5 border rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full rounded border p-2"
                            value={basicInfo.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-600">Phone Number</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            className="w-full rounded border p-2"
                            value={basicInfo.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full rounded border p-2"
                            value={basicInfo.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="linkedin" className="block text-gray-600">LinkedIn Profile</label>
                        <input
                            type="text"
                            id="linkedin"
                            name="linkedin"
                            className="w-full rounded border p-2"
                            value={basicInfo.linkedin}
                            onChange={handleChange}
                        />
                    </div>
                </form>
                <div className='w-full flex justify-end'>
                    <Link to='/work-experience-form'>
                        <button className="bg-blue-700 rounded-md p-4 text-white">
                            Move to Work Experience
                        </button>
                    </Link>
                </div>
            </div>
        </>

    );
}

export default BasicInfoForm;
