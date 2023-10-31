import React from 'react';

const Skills = ({ skills }) => {
    return (

        <div className="mt-6">
            <h2 className="text-xl font-semibold text-blue-600">Skills</h2>
            <ul className="list-disc list-inside text-gray-600">
                {skills.map((skill, index) => (
                    <li className="mb-2">{skill}</li>
                ))}

            </ul>
        </div>
    )

};

export default Skills;
