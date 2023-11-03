// InfoContext.js
import { createContext, useState, useMemo } from 'react';

export const ResumeBuilderContext = createContext();

export function ResumeBuilderProvider({ children }) {

  const [user, setUser] = useState(null);

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
      user,
      setUser,
      basicInfo,
      setBasicInfo,
      experience,
      setExperience,
      educations,
      setEducations,
      skills,
      setSkills,
    };
  }, [basicInfo,experience,educations,skills,user]);

  return (
    <ResumeBuilderContext.Provider value={contextValue}>
      {children}
    </ResumeBuilderContext.Provider>
  );
}


