import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'

const HomePage = () => {
  
   const navigate = useNavigate();
  return (
    <div >
        <Navbar/>
        <div className='d-flex flex-column align-items-center mt-5 '>
            <h1 className='discover'>Discover Your Perfect Career</h1>
            <p className='m-2'>Make smart decisions with our revolutionary AI enabled career guidance tools and expert career counsellors</p>
            <button className='bg-info m-3' onClick={()=>navigate('/signup')}>Get Started</button>
            <p className='m-2'>Career Assessment | Personalised Guidance | Profile Building | Virtual Internships|</p>
            <p> College Roadmap Planning | College Applications|Scholarship Hunt</p>
            <img src='assets/All-modified.png' alt='img' height={300} width={1000} className='mt-5'/>
        </div>

        <div className='d-flex bg-info justify-content-evenly ' style={{height:120}}>
        <div className='d-flex gap-2 align-items-center'>
            <img src='https://cdn-icons-png.freepik.com/256/2995/2995620.png?semt=ais_hybrid' width={60} height={60} className='rounded-5'/>
            <span><h3>2.5 Million</h3><h5>Students Impacted</h5></span>
        </div>
        <div className='d-flex gap-2 align-items-center'>
            <img src='https://up.yimg.com/ib/th?id=OIP.Q0BpQPuWHFt5cuW9_q1-QAHaG4&pid=Api&rs=1&c=1&qlt=95&w=128&h=119' width={60} height={60} className='rounded-5'/>
            <span><h3>51,000</h3><h5>Educators Certified</h5></span>
        </div>
        <div className='d-flex gap-2 align-items-center'>
            <img src='https://static.vecteezy.com/system/resources/previews/003/674/638/original/school-building-cartoon-style-illustration-vector.jpg' width={60} height={60} className='rounded-5'/>
            <span><h3>250+</h3><h5>Partner Schools</h5></span>
        </div>
        <div className='d-flex gap-2 align-items-center'>
            <img src='https://tse2.mm.bing.net/th?id=OIP.94eZ7dDCTZaxwDY-BqcbDgHaHa&pid=Api&P=0&h=180' width={60} height={60} className='rounded-5'/>
            <span><h3>50+</h3><h5>University Partners</h5></span>
        </div>
       
        </div>

        <div className='d-flex flex-column align-items-center mt-3'>
            <h4>Awards and Recognition</h4>
        <div className='d-flex m-3 align-items-center gap-3 '>
        <div className='d-flex align-items-center'>
            <img src='https://mindlerimages.imgix.net/tinyimg/left.svg' alt='img'/>
                <p className='text'>Department of <br/>
                    Science & Technology;<br/>
                    Goverment of India

                </p>
            <img src='https://mindlerimages.imgix.net/tinyimg/right.svg' alt='img'/>
        </div>
        <div className='d-flex align-items-center'>
            <img src='https://mindlerimages.imgix.net/tinyimg/left.svg' alt='img'/>
            <p className='text'>Minister of State,<br/>
                UAE Government

            </p>
            <img src='https://mindlerimages.imgix.net/tinyimg/right.svg' alt='img'/>
        </div>
        <div className='d-flex align-items-center'>
            <img src='https://mindlerimages.imgix.net/tinyimg/left.svg' alt='img'/>
            <p className='text'>Ministry of<br/>
                Commerce & Industry,<br/>
                DPIIT</p>
            <img src='https://mindlerimages.imgix.net/tinyimg/right.svg' alt='img'/>
        </div>
        <div className='d-flex align-items-center'>
            <img src='https://mindlerimages.imgix.net/tinyimg/left.svg' alt='img'/>
            <p className='text'>Indian School of<br/>
                Business, Hyderabad<br/>
                & US Consulate
            </p>
            <img src='https://mindlerimages.imgix.net/tinyimg/right.svg' alt='img'/>
        </div>
        <div className='d-flex align-items-center'>
            <img src='https://mindlerimages.imgix.net/tinyimg/left.svg' alt='img'/>
            <p className='text'>The Power of Ideas;<br/>Economic Times<br/>IIM-A, CIIE
            </p>
            <img src='https://mindlerimages.imgix.net/tinyimg/right.svg' alt='img'/>
        </div>
        <div className='d-flex align-items-center'>
            <img src='https://mindlerimages.imgix.net/tinyimg/left.svg' alt='img'/>
            <p className='text'>HolonIQ;<br/>Top 100 Ed-Tech India<br/>& South Asia
            </p>
            <img src='https://mindlerimages.imgix.net/tinyimg/right.svg' alt='img'/>
        </div>
        </div>
        </div>

        <div className='shaping'>
            <div className='d-flex flex-column align-items-center mt-5 mb-3'>
            <h4>Shaping the Career Guidance Landscape</h4>
            <h6>Comprehensive career solutions for students, parents, educators and schools</h6>
            </div>
            <div className='d-flex align-items-center gap-5 m-3'>
                <div className="shaping1">
                    <img src='https://mindlerimages.imgix.net/tinyimg/005-creative.svg' alt='img'></img>
                    <h6>Enable students to identify their best-fit career <br/> with our world-class career assessment and <br/> personalised guidance.</h6>
                </div>
                <div className="shaping1">
                    <img src='https://mindlerimages.imgix.net/tinyimg/002-devices.svg' alt='img'></img>
                    <h6>Empower students to learn all about the <br/> professional world with virtual career <br/>  simulations, exhaustive career<br/>  library, career blogs and vlogs.</h6>
                </div>
                <div className="shaping1">
                    <img src='https://mindlerimages.imgix.net/tinyimg/003-certificate.svg' alt='img'></img>
                    <h6>Pave student’s way to their dream college with<br/> our end-to-end college application guidance,<br/> scholarship drive and corporate internship<br/> program.</h6>
                </div>
            </div>
            <div className='d-flex align-items-center gap-5 mb-5'>
                <div className="shaping1">
                    <img src='https://mindlerimages.imgix.net/tinyimg/004-career.svg' alt='img'></img>
                    <h6>Enable schools in creating a career guidance <br/> ecosystem in sync with the vision of New <br/> Education Policy</h6>
                </div>
                <div className="shaping1">
                    <img src='https://mindlerimages.imgix.net/tinyimg/010-team.svg' alt='img'></img>
                    <h6>Empower educators to become International <br/> Certified Career Coaches and build a career in <br/> career guidance & counselling.</h6>
                </div>
                <div className="shaping1">
                    <img src='https://mindlerimages.imgix.net/tinyimg/007-startup.svg' alt='img'></img>
                    <h6>Revolutionary assessment platform and<br/> technology driven career guidance solutions for<br/>educators to boost their career guidance &<br/> counselling practice.</h6>
                </div>
            </div>
           
        </div>

        <div className='main position-relative'>
            <div className='program text-center text-white w-100'>
                <h2>Our Programs</h2>
                <h6>Personalized, expert services & support for all stakeholders in the career guidance process.</h6>
            </div>
            <div className='relative '>
                <div className='main1'>
                    <div className="forstudents">
                        <img src='https://mindlerimages.imgix.net/tinyimg/001-student.png' alt='img'/>
                        <h4>For<br/>Students</h4>
                        <div style={{ borderLeft: "2px solid black", height: "120px" }}></div>

                    </div>
                    <div className="forstudents">
                        <img src='https://mindlerimages.imgix.net/tinyimg/003-teacher.png' alt='img'/>
                        <h4>For<br/>Institutions</h4>
                        <div style={{ borderLeft: "2px solid black", height: "120px" }}></div>
                    </div>
                    <div className="forstudents">
                        <img src='https://mindlerimages.imgix.net/tinyimg/professional.png' alt='img'/>
                        <h4>For Career<br/>Professionals</h4>
                    </div>
                </div>
                <h6 className='mt-5 mb-3'>CAREER COUNSELLING PROGRAMS</h6>
                <div className='d-flex align-items-center gap-5 program1'>
           
            <div>                
                
                <h4 className='text-danger'>After 10th Class</h4>
                <p>Career Selection & Planning</p>
                <p>Expert guidance & 5-dimensional assessment to<br/>
                help you discover your perfect career and choose<br/>
                the right course and college.
                </p>
                <a href='/student10'>View Program Details</a>
            </div>
            <div>                
                
                <h4 className='text-danger'>After 12th</h4>
                <p>Career Selection & Development</p>
                <p>5-dimensional assessment & superior guidance to<br/>
                help you discover your perfect career and choose<br/>
                the best next step.
                </p>
                <a href='/after12th'>View Program Details</a>
            </div>
            <div >                     
                <h4 className='text-danger'>After Diploma</h4>
                <p>Stream & Subject Selection</p>
                <p>Advanced assessment & personalised guidance to<br/>
                     help you select the perfect stream and subjects<br/>
                      that align you to the right careers.
                </p>
                <a href='/student'>View Program Details</a>
            </div>
                </div>
                <h6 className='mt-5 mb-3'>EXPERIENTIAL CAREER PROGRAMS</h6>
                <div className='d-flex align-items-center gap-5 program1 '>
                <div >                
                
                <h4 className='text-danger'>After ITI</h4>
                <p>Comprehensive guidance and personalised<br/>
                application development for admissions to Liberal<br/>
                Arts programs.
                </p>
                <a href='/entranceExam'>View Program Details</a>
            </div>
            <div > 
                                  
                <h4 className='text-danger'>After Graduation</h4> 
                          
                <p>Experiential, immersive self-paced program that<br/>
                helps students experience different careers and<br/>
                gives them practical exposure to these careers.
                </p>
                <a href='/afterGraduation'>View Program Details</a>
            </div>
            <div>           
                <h4 className='text-danger'>After post Graduation</h4>             
                <p>End-to-end overseas admissions guidance to help<br/>
                you build the perfect applications for your target<br/>
                universities.
                </p>
                <a href='/afterPostGradation'>View Program Details</a>
            </div>
         
                </div>
            </div>         
        </div>

        <div className='bg-info d-flex flex-column align-items-center justify-content-center' style={{height:230}}>

            <h4>Take the first step towards career clarity!</h4>
            <h6>Discover your best-fit career with the world's most-advanced career assessment</h6>
            <div className='d-flex mt-3 ' style={{width:450,height:40}}>
                <input placeholder='Enter your email' style={{width:300}}/>
                <button className='bg-dark text-white'>Take Free Demo</button>
            </div>
        </div>
        
       <Footer/>
    </div>
  )
}

export default HomePage