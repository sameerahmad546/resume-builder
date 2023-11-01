import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicInfo from "../components/BasicInfo";
import Experience from "../components/WorkExperience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import { ResumeBuilderContext } from "../store/states";

const ReadyResume = () => {
    const navigate = new useNavigate()
    const { basicInfo, experience, educations, skills } = useContext(ResumeBuilderContext);

    const [componentOrder, setComponentOrder] = useState(["basicInfo", "experience", "educations", "skills"]);

    const reorderComponents = (currentIndex, newIndex) => {
        const reorderedOrder = [...componentOrder];
        const [removed] = reorderedOrder.splice(currentIndex, 1);
        reorderedOrder.splice(newIndex, 0, removed);
        setComponentOrder(reorderedOrder);
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
                {componentOrder.map((componentId, index) => (
                    <div key={componentId} className=" w-full">
                        {componentId === "basicInfo" && <BasicInfo basicInfo={basicInfo} />}
                        {componentId === "experience" && <Experience experience={experience} />}
                        {componentId === "educations" && <Education educations={educations} />}
                        {componentId === "skills" && <Skills skills={skills} />}
                        <div className=" flex -mt-14 justify-end">
                            <button className="bg-blue-700 rounded-md p-2 text-white mr-2"
                                onClick={() => reorderComponents(index, index - 1)}
                                disabled={index === 0}
                            >
                                Up
                            </button>
                            <button className="bg-blue-700 rounded-md p-2 text-white"
                                onClick={() => reorderComponents(index, index + 1)}
                                disabled={index === componentOrder.length - 1}
                            >
                                Down
                            </button>
                        </div>
                    </div>
                ))}
                <div className='w-full flex justify-end mt-8'>
            
                    <button onClick={() => navigate('/ready-resume', { state: {componentOrder}})} className="bg-blue-700 rounded-md p-4 text-white mt-4">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReadyResume;
