import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ResumeBuilderContext } from '../store/states';

const  EducationForm = () => {

  const { educations, setEducations } = useContext(ResumeBuilderContext)
  const addEducation = () => {
    setEducations([...educations, { degree: '', university: '', graduationDate: '' }]);
  };

  const removeEducation = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducations = [...educations];
    updatedEducations[index][name] = value;
    setEducations(updatedEducations);
  };

  return (
    <>
    <p>{JSON.stringify(educations)}</p>
      <div className="container mt-6 mx-auto p-5 border rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Education</h2>
        {educations.map((education, index) => (
          <div key={index} className="mb-6">
            <form>
              <div className="mb-4">
                <label htmlFor={`degree${index}`} className="block text-gray-600">Degree</label>
                <input
                  type="text"
                  id={`degree${index}`}
                  name="degree"
                  className="w-full rounded border p-2"
                  value={education.degree}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor={`university${index}`} className="block text-gray-600">University</label>
                <input
                  type="text"
                  id={`university${index}`}
                  name="university"
                  className="w-full rounded border p-2"
                  value={education.university}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor={`graduationDate${index}`} className="block text-gray-600">Graduation Date</label>
                <input
                  type="date"
                  id={`graduationDate${index}`}
                  name="graduationDate"
                  className="w-full rounded border p-2"
                  value={education.graduationDate}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </form>
            <button className="bg-red-600 rounded-md p-2 text-white" onClick={() => removeEducation(index)}>
              Remove
            </button>
          </div>
        ))}
        <button className="bg-blue-700 rounded-md p-4 text-white" onClick={addEducation}>
          Add Education
        </button>
        <div className='w-full flex justify-end'>
          <Link to='/skills-form' >
            <button className="bg-blue-700 rounded-md p-4 ml-4 text-white mt-4">
              Move to Skills
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default EducationForm;
