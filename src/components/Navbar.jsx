import { Button } from 'react-bootstrap'
import React, { useContext, useEffect, useState } from 'react'
import { FaPhone } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'
import axios from 'axios'
const Navbar = () => {
  const{isLoggedIn,logout,educationLevels,apiurl
  }=useContext(AuthContext)
  const navigate = useNavigate();
  const[forStudents,setForStudents]=useState(false)
  const[forEntranceExams,setforEntranceExams]=useState(false)
  const[forcareer,setForCareer]=useState(false)
  const[educationLevelsjob,setEducationLevelsJob]=useState();
  const[forResources,setForResources]=useState(false)
  const[resources,setResources]= useState();
  const[categories,setCategories]=useState();
  useEffect(()=>{
    const fetchData = async()=>{
      const response =await axios.get(`${apiurl}/user/getDataForJob`)
      console.log(response.data.educationLevels)
      console.log("Resources:",response.data.resources)
      setEducationLevelsJob(response.data.educationLevels);
      setResources(response.data.resources);
      const uniqueCategories =  [...new Set(response.data.resources.map(item => item.category_name))];
      setCategories(uniqueCategories);     

    }
    fetchData()
  },[])  
  const onStudents =()=>{
   setforEntranceExams(false)
   setForResources(false)
   setForCareer(false)
   setForStudents(true)    
  }
  const onInstitutions = ()=>{   
   setForStudents(false)
   setForCareer(false)
   setForResources(false)
   setforEntranceExams(true)
  }
  const CareerProfessionals = ()=>{
   setForStudents(false)
   setforEntranceExams(false)
   setForResources(false)
   setForCareer(true)   
  }
  const ResourcesHandle = ()=>{
   setForStudents(false)
   setforEntranceExams(false)
   setForCareer(false)
   setForResources(true)
  }
  const OnMouse = ()=>{
   setForStudents(false)
   setforEntranceExams(false)
   setForResources(false)
   setForCareer(false) 
  }

  const handleEntranceExam = (id,name)=>{
    console.log("id:",id);
    navigate('/entranceExams',{state:{id,name}})
    
  }
  const goToResources = (category)=>{
   navigate(`/forresources/${category}`,{state:{resources}});
  }



  return (
    <div className='d-flex gap-2 custom-height  align-items-center justify-content-around border-1 bg-dark custom-navbar fixed-top  '>
        <div className='d-flex  align-items-center' onClick={()=>navigate('/')}>
            <img src={`${process.env.PUBLIC_URL}/assets/DreamPath-modified.png`}  alt='icon' width={50} height={50}/>
            <h3 className='m-lg-2 login text-info ' style={{cursor:'pointer'}} onClick={()=>navigate('/home')}>DreamPath</h3>
        </div> 
        <div className='d-flex  align-items-center gap-5 sub'>
        <div className='d-flex align-items-center hover-container1'
         onMouseEnter={onStudents}
                  >
        <h6>For Students</h6>      
       </div>   
       <div className='d-flex align-items-center hover-container2' onMouseEnter={onInstitutions} >
        <h6>For Entrance Exams</h6>
       </div>
       <div className='d-flex align-items-center hover-container3' onMouseEnter={CareerProfessionals} >
        <h6>For Career Professionals</h6>
       </div>
       <div className='d-flex align-items-center hover-container4'onMouseEnter={ResourcesHandle} >
        <h6>For Resources</h6>
       </div> 
        
        </div>
       <div className='d-flex  align-items-center gap-2'>
       {isLoggedIn ? (
  <button className="btn btn-danger px-4" onClick={logout}>
    Logout
  </button>
) : (
  <button className="btn btn-primary px-4" onClick={() => navigate('/login')}>
    Login
  </button>
)}

       
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
        <div className="d-flex gap-2 align-items-center">
          <h4 className="text-danger mb-0">After 10th</h4>
          
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
          <h4 className="text-danger mb-0">After 12th</h4>
        
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
          <h4 className="text-danger mb-0">After Diploma</h4>
       
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
      <div>
        <h4 className="text-danger">After ITI</h4>
        <p>
          Experiential, immersive self-paced program that helps students
          <br /> experience different careers and gives them practical exposure to these careers.
        </p>
        <Link to="/entranceExam">View Program Details</Link>
      </div>

      {/* College Application Programs */}

      <div>
        <h4 className="text-danger">After Graduation</h4>
        <p>
          End-to-end overseas admissions guidance to help you build the
          <br /> perfect applications for your target universities.
        </p>
        <Link to="/afterGraduation">View Program Details</Link>
      </div>

      {/* Liberal Arts */}
      <div>
        <h4 className="text-danger">After post Graduation</h4>
        <p>
          Comprehensive guidance and personalised application
          <br /> development for admissions to Liberal Arts programs.
        </p>
        <Link to="/afterPostGradation">View Program Details</Link>
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
      <div key={index} className="education-item" style={{color:'rgb(168, 13, 150)'}}  onClick={()=>handleEntranceExam(item.id,item.name)}>
        {item.name} {/* Displaying education level */}
      </div>
    ))}
  </div>
)}

       {/* forcareer */}
       {forcareer && (
  
  <div 
  onMouseLeave={OnMouse} 
  className="institutions d-flex justify-content-around position-absolute bg-white shadow-lg py-4" 
  style={{ top: 75, left: 0, width: "100%",cursor:'pointer' }}
>
{educationLevelsjob && educationLevelsjob.length > 0 ? (
      educationLevelsjob.map((item, index) => (
        <div key={index} className="dropdown-item d-flex justify-content-evenly" style={{color:'blue'}} onClick={()=>navigate(`/forjobDetails/${item.education_level}`)}>
          {item.education_level}
        </div>
      ))
    ) : (
      <p>No data</p>
    )}
</div>
)}

{forResources && resources && (
  <div
    onMouseLeave={OnMouse}
    className="institutions position-absolute bg-white shadow-lg p-4"
    style={{
      top: 75,
      left: 0,
      width: "100%",
      borderRadius: "8px",
      zIndex: 1000, // Ensure it appears above other elements
    }}
  >
    <div className="container">
      <h5 className="text-primary text-center mb-3 text-success">Explore Resources</h5>

      <div className="row">
        {categories.map((item, index) => (
          <div
            key={index}
            className="col-md-3 col-sm-6 col-12 d-flex align-items-center justify-content-center p-2"
          >
            <div
              className="resource-item text-center p-3 rounded bg-info w-100"
              style={{
                border: "1px solid #ddd",
                cursor: "pointer",
                transition: "0.3s ease-in-out",
              }}
              onClick={()=>goToResources(item)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f8f9fa")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <h6 className="text-dark fw-bold">{item}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

      

    </div>
           
  )
}

export default Navbar