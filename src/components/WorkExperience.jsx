import React from 'react';
const Experience = ({experience}) => {
   
    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold text-blue-600">Work Experience</h2>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">{experience.jobTitle}</h3>
                <p className="text-gray-600">{experience.company} - {experience.startDate} to {experience.endDate}</p>
                <p className="text-gray-600">{experience.jobDescription}</p>
            </div>
            
        </div>
    )

};

export default Experience;
