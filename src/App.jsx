import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import BasicInfoForm from './pages/BasicInfoForm';
import WorkExerienceForm from './pages/WorkExperienceForm';
import EducationForm from './pages/EducationForm';
import SkillsForm from './pages/SkillsForm';
import ReorderResume from './pages/ReorderResume';
import ReadyResume from './pages/ReadyResume';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { ResumeBuilderProvider } from './store/states';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from './Layout/Layout';

function App() {
  const token = JSON.parse(localStorage.getItem('token'));
  const location = useLocation();
  const navigate = useNavigate();
  const isSignUpOrLoginRoute = location.pathname === '/sign-up' || location.pathname === '/login';

  useEffect(() => {
    if (token === null && !isSignUpOrLoginRoute) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <ResumeBuilderProvider>
        {!isSignUpOrLoginRoute && <Layout />}
        <Routes>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<BasicInfoForm />} />
          <Route path="work-experience-form" element={<WorkExerienceForm />} />
          <Route path="education-form" element={<EducationForm />} />
          <Route path="skills-form" element={<SkillsForm />} />
          <Route path="reorder-resume" element={<ReorderResume />} />
          <Route path="ready-resume/" element={<ReadyResume />} />
        </Routes>
    
    </ResumeBuilderProvider>
    </div >
  );
}

export default App;
