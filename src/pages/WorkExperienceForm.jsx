import React from 'react';
import { Link } from 'react-router-dom';

function ExperienceForm() {
    return (
        <div className="container mt-6 mx-auto p-5 border rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Work Experience</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="jobTitle" className="block text-gray-600">Job Title</label>
                    <input type="text" id="jobTitle" className="w-full rounded border p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="company" className="block text-gray-600">Company</label>
                    <input type="text" id="company" className="w-full rounded border p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="startDate" className="block text-gray-600">Start Date</label>
                    <input type="date" id="startDate" className="w-full rounded border p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="endDate" className="block text-gray-600">End Date</label>
                    <input type="date" id="endDate" className="w-full rounded border p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="jobDescription" className="block text-gray-600">Job Description</label>
                    <textarea id="jobDescription" className="w-full rounded border p-2" rows="4" />
                </div>
            </form>

            <Link to='/education-form'><button className="bg-blue-700 rounded-md p-4 text-white">
                Move to Education
            </button></Link>
        </div>
    );
}

export default ExperienceForm;
