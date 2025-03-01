import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EducationLevels from './EducationLevels';
const GetStarted = () => {
    const navigate = useNavigate();
   
    const[student,setStudent]=useState(false)
    const[institution,setInstitution]=useState(false)
    const[career,setCareer]=useState(false)
    const[careerDemo,setCareerDemo]=useState(false)
   
  return (
    <div className='bg-info  position-fixed w-100' style={{height:700}}>
        <div className='d-flex justify-content-end mx-4 p-3 '>
            <i class="fa fa-times" aria-hidden="true" onClick={()=>navigate(-1)}></i>
        </div>
        <div className='iAm'>
        <h4 className='text-white text-center'>I am a</h4>
        <div className='d-flex justify-content-center align-items-center gap-5' style={{height:200}}>
            <div className='d-flex flex-column align-items-center justify-content-center hover-card1  bg-white  '
            style={{height:150, width:200, borderRadius:5}}
             onClick={()=>setStudent(true)}>
                <img src='https://mindlerimages.imgix.net/home/user-student.svg' alt='img' style={{height:100, width:100,}} />
                <h6>Student</h6>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center hover-card2 bg-white'
            style={{height:150, width:200,borderRadius:5}}
            onClick={()=>setInstitution(true)}
            >
                <img src='https://mindlerimages.imgix.net/home/user-school.svg' alt='img' style={{height:100, width:100}}/>
                <h6>Institution</h6>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center hover-card3 bg-white'
            style={{height:150, width:200,borderRadius:5}}
            onClick={()=>setCareer(true)}            >
                <img src='https://mindlerimages.imgix.net/home/user-professional.svg' alt='img' style={{height:100, width:100}}/>
                <h6>Career Professional</h6>
            </div>
        </div>        
        </div>

        {/* Student Dropdown */}

        {
            student && (
                <div className='bg-info position-absolute w-100' style={{height:700, top:40}}>
                        <div className='d-flex justify-content-end mx-4 p-3 '>
                             <i class="fa fa-times bg-white" className='goBack' aria-hidden="true" onClick={()=>setStudent(false)}></i>
                        </div>
                        <div className='iAm'>
                            <h4 className='text-white text-center'>I need help with</h4>
                            <div className='d-flex justify-content-center align-items-center gap-5' style={{height:230}}>
            <div className='d-flex flex-column align-items-center justify-content-center hover-card1  bg-white  '
            style={{height:130, width:330, borderRadius:5}}
            onClick={()=>navigate('/educationLevel')}
             >
                
                <h6>Choose best colleges for your future</h6>
                <p className='text-center'>Find your best-fit career, stream, course with expert guidance.</p>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center hover-card2 bg-white'
            style={{height:130, width:330,borderRadius:5}}
            >
               
                <h6>college applications</h6>
                <p className='text-center'>Get admits from your dream colleges<br/> through end-to-end applications guidance<br/> for overseas and liberal arts universities.</p>
            </div>            
                            </div>        
                         </div>
                         <p onClick={()=>setStudent(false)}className='text-white text-center goBack'>GoBack</p>
                </div>
            )
        }

       
       

        
    </div>
  )
}

export default GetStarted