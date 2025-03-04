import { Button } from 'react-bootstrap'
import React, { useContext, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { FaPhone } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'
const Navbar = () => {
  const{isLoggedIn,logout,educationLevels
  }=useContext(AuthContext)
  const navigate = useNavigate();
  const[forStudents,setForStudents]=useState(false)
  const[forEntranceExams,setforEntranceExams]=useState(false)
  const[forcareer,setForCareer]=useState(false)
  const[resources,setResources]=useState(false)
  const onStudents =()=>{
   setforEntranceExams(false)
   setResources(false)
   setForCareer(false)
   setForStudents(true)    
  }
  const onInstitutions = ()=>{   
   setForStudents(false)
   setForCareer(false)
   setResources(false)
   setforEntranceExams(true)
  }
  const CareerProfessionals = ()=>{
   setForStudents(false)
   setforEntranceExams(false)
   setResources(false)
   setForCareer(true)   
  }
  const ResourcesHandle = ()=>{
   setForStudents(false)
   setforEntranceExams(false)
   setForCareer(false)
   setResources(true)
  }
  const OnMouse = ()=>{
   setForStudents(false)
   setforEntranceExams(false)
   setResources(false)
   setForCareer(false) 
  }

  const handleEntranceExam = (id,name)=>{
    console.log("id:",id);
    navigate('/entranceExams',{state:{id,name}})
    
  }

  return (
    <div className='d-flex gap-2 custom-height  align-items-center justify-content-around border-1 bg-dark custom-navbar fixed-top  '>
        <div className='d-flex  align-items-center'>
            <img src={`${process.env.PUBLIC_URL}/assets/DreamPath-modified.png`}  alt='icon' width={50} height={50}/>
            <h3 className='m-lg-2 login  ' style={{cursor:'pointer'}} onClick={()=>navigate('/home')}>DreamPath</h3>
        </div> 
        <div className='d-flex  align-items-center gap-2 sub'>
        <div className='d-flex align-items-center hover-container1'
         onMouseEnter={onStudents}
                  >
        <h6>For Students</h6>
       <MdOutlineKeyboardArrowDown size={20} color=' #17a2b8'/>      
       </div>   
       <div className='d-flex align-items-center hover-container2' onMouseEnter={onInstitutions} >
        <h6>For Entrance Exams</h6>
       <MdOutlineKeyboardArrowDown size={20} color=' #17a2b8'/>
       </div>
       <div className='d-flex align-items-center hover-container3' onMouseEnter={CareerProfessionals} >
        <h6>For Career Professionals</h6>
       <MdOutlineKeyboardArrowDown size={20} color=' #17a2b8'/>
       </div>
       <div className='d-flex align-items-center hover-container4'onMouseEnter={ResourcesHandle} >
        <h6>For Resources</h6>
       <MdOutlineKeyboardArrowDown size={20} color=' #17a2b8'/>
       </div> 
        
        </div>
       <div className='d-flex  align-items-center gap-2'>
       <button className='bg-info border-1 rounded-2 h-50' onClick={()=>navigate('/getStarted')}>Get Started</button>
       {isLoggedIn?(
          <h6 className='login' onClick={logout}>Logout</h6>
       ):(
        <h6 className='login' onClick={()=>navigate('/login')}>Login</h6>
       )
       }
       
       </div>

       {/* Students Dropdown */}

       {forStudents && (
  <div 
    className="custom-p position-absolute bg-white d-flex flex-wrap justify-content-evenly shadow-lg p-4"
    style={{ width: "100%", top: 75, left: 0, borderRadius: "8px" }}
    onMouseLeave={OnMouse}
  >
    {/* Left Section */}
    <div className='d-flex w-100  justify-content-around'>
    <div className="mt-3 ">
      {/* Career Counseling Programs */}
      <div className="text-dark">
        <h6 className="mt-2 mb-3 text-danger">CAREER COUNSELLING PROGRAMS</h6>
        <div className="d-flex gap-2 align-items-center">
          <h4 className="text-dark mb-0">After 10th</h4>
          <p className="mb-0">Stream & Subject Selection</p>
        </div>
        <p>
          Advanced assessment & personalised guidance to help you select
          <br /> the perfect stream and subjects that align you to the right careers.
        </p>
        <Link to="/student">View Program Details</Link>
      </div>

      {/* Class 10-12 */}
      <div className="text-dark mt-3">
        <div className="d-flex gap-2 align-items-center">
          <h4 className="text-dark mb-0">After 12th</h4>
          <p className="mb-0">Career Selection & Planning</p>
        </div>
        <p>
          Expert guidance & 5-dimensional assessment to help you discover
          <br /> your perfect career and choose the right course and college.
        </p>
        <Link to="/student10">View Program Details</Link>
      </div>

      {/* College & Graduates */}
      <div className="text-dark mt-3">
        <div className="d-flex gap-2 align-items-center">
          <h4 className="text-dark mb-0">After Diploma</h4>
          <p className="mb-0">Career Selection & Development</p>
        </div>
        <p>
          5-dimensional assessment & superior guidance to help you discover
          <br /> your perfect career and choose the best next step.
        </p>
        <Link to="/student">View Program Details</Link>
      </div>
    </div>

    {/* Right Section */}
    <div className="text-dark  mt-3">
      {/* Experiential Career Programs */}
      <h6 className="mt-2 mb-3 text-danger">EXPERIENTIAL CAREER PROGRAMS</h6>
      <div>
        <h4 className="text-dark">After ITI</h4>
        <p>
          Experiential, immersive self-paced program that helps students
          <br /> experience different careers and gives them practical exposure to these careers.
        </p>
        <Link to="/entranceExam">View Program Details</Link>
      </div>

      {/* College Application Programs */}

      <div>
        <h4 className="text-dark">After Graduation</h4>
        <p>
          End-to-end overseas admissions guidance to help you build the
          <br /> perfect applications for your target universities.
        </p>
        <Link to="/afterGraduation">View Program Details</Link>
      </div>

      {/* Liberal Arts */}
      <div>
        <h4 className="text-dark">After post Graduation</h4>
        <p>
          Comprehensive guidance and personalised application
          <br /> development for admissions to Liberal Arts programs.
        </p>
        <Link to="/afterPostGradation">View Program Details</Link>
      </div>
    </div>

    {/* Contact Section with Grey Background */}
    <div
      className="d-flex flex-column "
      style={{ backgroundColor: "grey", width: 400, height: "100%" }}
    >
       {/* Close Button */}
     <div className='p-3'>
      <i className="fa fa-times fs-4 text-white  close-icon " style={{marginLeft:320, height:50, width:50}} onClick={()=>setForStudents(false)}></i>
    </div>   
      <div style={{marginLeft:100}}>        
      <p className="mb-2 text-dark mt-4">
        <i className="fa fa-phone text-info me-2 "></i> +91 87449 87449
      </p>
      <p className="text-dark">
        <i className="fa fa-comment text-info me-2"></i> Send a Message
      </p>
      <div className="mt-4">
        <Link to="#" className="d-block text-dark mb-2">Success Stories</Link>
        <Link to="#" className="d-block text-dark">About Us</Link>
      </div>
      </div>     
      
    </div>
    </div>
    
  </div>
        )}
       
       {/* forEntranceExams */}
       {forEntranceExams && educationLevels.length > 0 && (
  <div 
    onMouseLeave={OnMouse} 
    className="institutions d-flex justify-content-around position-absolute bg-white shadow-lg py-4" 
    style={{ top: 75, left: 0, width: "100%",cursor:'pointer' }}
  >
    {educationLevels.map((item, index) => (
      <div key={index} className="education-item"  onClick={()=>handleEntranceExam(item.id,item.name)}>
        {item.name} {/* Displaying education level */}
      </div>
    ))}
  </div>
)}

       {/* forcareer */}
       {
         forcareer && (
          <div  onMouseLeave={OnMouse} className=' career d-flex justify-content-around position-absolute bg-white shadow-lg py-4' style={{top:75,left:0, width:'100%'}}>
            <div>
              <h6 style={{color:'rgb(38, 62, 168)'}}>CERTIFICATION PROGRAMS</h6>
              <h6>International Certified Career Coach (ICCC)</h6>
              <p>a 3-level credentialing program with emphasts on global best<br/>practices, experiential learning & state of the art tools.</p>
              <Link to='#'>View Program Details</Link>
            </div>
            <div>
            <div>
            <h6 style={{color:'rgb(38, 62, 168)'}}>COLLABORATION</h6>
            <h6>DreamPath Partner Program</h6>
            <p>World-class career assessment platform & tools to help you scale up <br/>your career counselling practice.</p>
            <Link to='#'>View Program Details</Link>
            </div>            
            </div>
            <div
      className="d-flex flex-column h-100 "
      style={{ backgroundColor: "grey", width: 300 }}
    >
       {/* Close Button */}
     <div className='p-3'>
      <i className="fa fa-times fs-4 text-white  close-icon " style={{marginLeft:250}} onClick={()=>setForCareer(false)}></i>
    </div>   
      <div className='  p-2' style={{marginLeft:40,marginBottom: 40}}>        
      <p className="mb-2 text-dark mt-4">
        <i className="fa fa-phone text-info me-2 "></i> +91 87449 87449
      </p>
      <p className="text-dark">
        <i className="fa fa-comment text-info me-2"></i> Send a Message
      </p>
      <div className="mt-4">
        <Link to="#" className="d-block text-dark mb-2">Success Stories</Link>
        <Link to="#" className="d-block text-dark">About Us</Link>
      </div>
      </div>     
      
    </div>
    
          </div>
        )
       }

{
         resources && (
          <div  onMouseLeave={OnMouse} className='d-flex justify-content-around position-absolute bg-white shadow-lg py-4' style={{top:75,left:0, width:'100%'}}>
            <div className='career'>
              <h4>Career Library</h4>              
              <p>Everything you need to know, from colleges to scope, <br/>for hundreds of careers.</p>
              <h6>Actuarial Sciences</h6>
              <h6>Animation & Graphics</h6>
              <h6>Applied Arts</h6>
              <h6>Architecture</h6>
              <h6>Aviation</h6>
              <h6>Cabin Crew</h6>
              <h6>Civil Services</h6>
              <h6>Commerce & Accounts</h6>
              <h6>Computer Application & IT</h6>
              <h6>Data Science & Artificial Intelligence</h6>
              <h6>Defense</h6>
              <h6>Design</h6>
              <h6>Economics</h6>             
              <Link to='#'>View Program Details</Link>
            </div>
            <div>
            <div>
              <span className='d-flex align-items-center'>
            <h4>Blog</h4><h6>-Expert-written articles on all things career - trends,inspiration and guidance.</h6>            
            </span>
            <div className='d-flex gap-2  justify-content-evenly  ' >
              <div className='d-flex flex-column align-items-center'>
                
                <Link to='https://www.mindler.com/blog/future-forward-mindlers-2024-recap/'>
                <img src='https://mindlerblog.imgix.net/2025/01/23112800/Recap.png?w=337&h=168&auto=compress' alt='img' style={{height:150,width:200}}/>
                </Link>
              </div>
              <div className='d-flex flex-column align-items-center '>
              
              <Link to='https://www.mindler.com/blog/the-path-to-becoming-a-pro-mma-fighter-steps-challenges-and-career-milestones/'><img src='https://mindlerblog.imgix.net/2024/12/30114310/The-Path-to-Becoming-a-Pro-MMA-Fighter_Steps-Challenges-and-Career-Milestones_blog.png?w=337&h=168&auto=compress' alt='img' style={{height:150,width:200}}/></Link>
              </div>
            </div>
            <div>
            <span className='d-flex align-items-center'>
            <h4>Vlog</h4>
            <h6>-Audio-visual journal of careers by experts</h6>
            </span>
           
            <div className='d-flex justify-content-evenly '>
              <div>               
                <Link to='https://youtu.be/swWV7fxIKio'>
                <img src='https://www.mindler.com/vlog/wp-content/uploads/2021/07/Career-in-Product-Design-in-India-Everything-You-Need-to-Know.jpg' alt='img' style={{height:150,width:200}}/>
                </Link>
              </div>
              <div>
              
              <Link to='https://youtu.be/swWV7fxIKio'>
              <img src='https://mindlerimages.imgix.net/tinyimg/Liberal-Arts-The-New-Chapter-in-Indian-Education-2021_new.webp' alt='img' style={{height:150,width:200}}/>
              </Link>
              </div>
            </div>   
            </div>       

            </div>            
            </div>
            <div
      className="d-flex flex-column h-full "
      style={{ backgroundColor: "grey", width: 300, }}
    >
       {/* Close Button */}
     <div className='p-3'>
      <i className="fa fa-times fs-4 text-white  close-icon " style={{marginLeft:250}} onClick={()=>setResources(false)}></i>
    </div>   
      <div className='  p-2' style={{marginLeft:40,marginBottom: 40}}>        
      <p className="mb-2 text-dark mt-4">
        <i className="fa fa-phone text-info me-2 "></i> +91 87449 87449
      </p>
      <p className="text-dark">
        <i className="fa fa-comment text-info me-2"></i> Send a Message
      </p>
      <div className="mt-4">
        <Link to="#" className="d-block text-dark mb-2">Success Stories</Link>
        <Link to="#" className="d-block text-dark">About Us</Link>
      </div>
      </div>     
      
    </div>
    
          </div>
        )
       }
      
      

    </div>
           
  )
}

export default Navbar