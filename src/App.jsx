import './App.css';
import { Route, Routes } from 'react-router-dom';
import BasicInfoForm from './pages/BasicInfoForm';
import WorkExerienceForm from './pages/WorkExperienceForm'
import EducationForm from './pages/EducationForm';
import SkillsForm from './pages/SkillsForm';

function App() {
  return (
    <div className=''>
        <Routes>
          <Route path='/' element={<BasicInfoForm/>}/>
          <Route path='work-experience-form' element={<WorkExerienceForm/>}/>
          <Route path='education-form' element={<EducationForm/>} />
          <Route  path='skills-form' element={<SkillsForm/>}/>
        </Routes>
    </div>
  );
}

export default App;
