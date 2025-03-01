import React from 'react'
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LandingPage from './pages/LandingPage'
import { Route, HashRouter,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import StudentProgram from './components/StudentProgram8-9';
import StudentAfter10 from './components/StudentAfter10';

import InternShip from './components/InternShip';
import ArtsApplication from './components/AfterPostGraduation';
import GetStarted from './components/GetStarted';
import SignupForm from './components/forms/SignupForm';
import LoginForm from './components/forms/LoginForm';
import ForgotForm from './components/forms/ForgotForm';
import AfterGraduation from './components/AfterGraduation';
import CareerGuidanceAfterPostgraduation from './components/AfterPostGraduation';
import EntranceExamsGuidance from './components/AfterITI';
import CareerGuidanceAfter12th from './components/After12th';
import CareerGuidanceAfterDiploma from './components/StudentProgram8-9';
import CareerGuidanceAfterITI from './components/AfterITI';
import OtpVerify from './components/forms/OtpVerify';
import EducationLevels from './components/EducationLevels';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={  <LandingPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/student' element={<CareerGuidanceAfterDiploma/>}/>
        <Route path='/student10' element={<StudentAfter10/>}/>
        <Route path='/after12th' element={<CareerGuidanceAfter12th/>}/>
        <Route path='/internship' element={<InternShip/>}/>
        <Route path='/afterGraduation' element={<AfterGraduation/>}/>
        <Route path='/afterPostGradation' element={<CareerGuidanceAfterPostgraduation/>}/>
        <Route path='/entranceExam' element={<CareerGuidanceAfterITI/>}/>
        <Route path='/getStarted' element={<GetStarted/>}/>
        <Route path='/signup' element={<SignupForm/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/reset' element={<ForgotForm/>}/>
        <Route path='/otpVerify' element={<OtpVerify/>}/>
        <Route path='/educationLevel' element={<EducationLevels/>}/>
      </Routes>
    </HashRouter>
   
  )
}

export default App