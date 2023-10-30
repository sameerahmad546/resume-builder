import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ResumeBuilderContext } from '../store/states';

function ExperienceForm() {
    const { experience, setExperience } = useContext(ResumeBuilderContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperience({
            ...experience,
            [name]: value,
        });
    };
    return (
        <>
            <div className="container mt-6 mx-auto p-5 border rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Work Experience</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="jobTitle" className="block text-gray-600">Job Title</label>
                        <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            className="w-full rounded border p-2"
                            value={experience.jobTitle}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="company" className="block text-gray-600">Company</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            className="w-full rounded border p-2"
                            value={experience.company}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="startDate" className="block text-gray-600">Start Date</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            className="w-full rounded border p-2"
                            value={experience.startDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="endDate" className="block text-gray-600">End Date</label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            className="w-full rounded border p-2"
                            value={experience.endDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="jobDescription" className="block text-gray-600">Job Description</label>
                        <textarea
                            id="jobDescription"
                            name="jobDescription"
                            className="w-full rounded border p-2"
                            rows="4"
                            value={experience.jobDescription}
                            onChange={handleChange}
                        />
                    </div>
                </form>
                <div className='w-full flex justify-end'>
                    <Link to='/education-form'>
                        <button className="bg-blue-700 rounded-md p-4 text-white">
                            Move to Education
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ExperienceForm;
