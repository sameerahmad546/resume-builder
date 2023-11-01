import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import BasicInfo from "../components/BasicInfo";
import Experience from "../components/WorkExperience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import { ResumeBuilderContext } from "../store/states";

const ReadyResume = () => {
    const { basicInfo, experience, educations, skills } = useContext(ResumeBuilderContext);
    const location = useLocation()
    const { componentOrder } = location.state
    

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
                {componentOrder.map((componentId, index) => (
                    <div key={componentId} className=" w-full">
                        {componentId === "basicInfo" && <BasicInfo basicInfo={basicInfo} />}
                        {componentId === "experience" && <Experience experience={experience} />}
                        {componentId === "educations" && <Education educations={educations} />}
                        {componentId === "skills" && <Skills skills={skills} />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReadyResume;
