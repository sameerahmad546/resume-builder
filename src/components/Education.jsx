import React from 'react';

const Education = ({ educations }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-blue-600">Education</h2>
      {educations.map((education, index) => (
        <div className="mb-4">
          <h3 className="text-lg font-semibold">{education.degree}</h3>
          <p className="text-gray-600">{education.university} - {education.graduationDate}</p>
        </div>
      ))}


    </div>
  )
};

export default Education;
