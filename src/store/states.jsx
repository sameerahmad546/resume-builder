// InfoContext.js
import { createContext, useState, useMemo } from 'react';

export const ResumeBuilderContext = createContext();

export function ResumeBuilderProvider({ children }) {
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    phone: '',
    email: '',
    linkedin: '',
  });

  const [experience, setExperience] = useState({
    jobTitle: '',
    company: '',
    startDate: '',
    endDate: '',
    jobDescription: '',
  });

  const [educations, setEducations] = useState([
    { degree: '', university: '', graduationDate: '' },
  ]);

  const [skills, setSkills] = useState([]);

  const contextValue = useMemo(() => {
    return {
      basicInfo,
      setBasicInfo,
      experience,
      setExperience,
      educations,
      setEducations,
      skills,
      setSkills
    };
  }, [basicInfo,experience,educations,skills]);

  return (
    <ResumeBuilderContext.Provider value={contextValue}>
      {children}
    </ResumeBuilderContext.Provider>
  );
}


