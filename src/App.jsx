import './App.css';
import { Route, Routes } from 'react-router-dom';
import BasicInfoForm from './pages/BasicInfoForm';
import WorkExerienceForm from './pages/WorkExperienceForm'
import EducationForm from './pages/EducationForm';
import SkillsForm from './pages/SkillsForm';
import ReorderResume from './pages/ReorderResume';
import ReadyResume from './pages/ReadyResume';
import { ResumeBuilderProvider } from './store/states';

function App() {
  return (
    <div className=''>
      <ResumeBuilderProvider>
        <Routes>

          <Route path='/' element={<BasicInfoForm />} />
          <Route path='work-experience-form' element={<WorkExerienceForm />} />
          <Route path='education-form' element={<EducationForm />} />
          <Route path='skills-form' element={<SkillsForm />} />
          <Route path='reorder-resume' element={<ReorderResume/>} />
          <Route path='ready-resume/' element={< ReadyResume/>}/>

        </Routes>
      </ResumeBuilderProvider>
    </div>
  );
}

export default App;
