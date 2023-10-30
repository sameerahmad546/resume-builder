import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ResumeBuilderContext } from '../store/states';

function SkillsForm() {
  const { skills, setSkills } = useContext(ResumeBuilderContext)
  const [newSkill, setNewSkill] = useState('');

  const addSkill = (e) => {
    e.preventDefault()
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }

  };

  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  return (
    <>
      
      <div className="container mt-6 mx-auto p-5 border rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Skills</h2>
        <form onSubmit={addSkill}>
          <div className="mb-4">
            <label htmlFor="skills" className="block text-gray-600">Skills</label>
            <input
              type="text"
              id="skills"
              className="w-full rounded border p-2"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 rounded-md p-4 text-white"
          >
            Add Skill
          </button>
        </form>
        <ul className="mt-4">
          {skills.map((skill, index) => (
            <li key={index} className="flex justify-between items-center">
              {skill}
              <button
                className="text-red-600"
                onClick={() => removeSkill(index)}
              >
                &#x2715;
              </button>
            </li>
          ))}
        </ul>
        <div className='w-full flex justify-end'>
          <Link to="/ready-template">
            <button className="bg-blue-700 rounded-md p-4 text-white mt-4">
              Move to Ready Resume
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SkillsForm;
