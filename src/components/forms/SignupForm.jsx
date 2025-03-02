import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import OtpVerify from "./OtpVerify";
import { signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../FireBase.config";
import { RecaptchaVerifier } from "firebase/auth";
const SignupForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [step, setStep] = useState(1);
  const [errors,setErrors]=useState({});
  const [submitted,setSubmitted]=useState(false 
  );    
    const handleChange = (e) => {
    const{name,value}=e.target;
    setFormData({
      ...formData,
      [name]: value,     
    });
    if(submitted){
      setErrors((prevErrors)=>{
          let tempErrors = {...prevErrors}
          if (name === "fullName") {
            if(!value){
              tempErrors.fullName = "Full Name is required";
            }
            else if(value)
            tempErrors.fullName = ""
            
          }          
    
          if (name === "email") {
            if (!value) {
              tempErrors.email = "Email required";
            } else if (!/\S+@\S+\.\S+/.test(value)) {
              tempErrors.email = "Email is not valid";
            } else {
              tempErrors.email = "";
            }
          }
    
          // Phone Number Validation
          if (name === "phoneNumber") {
            if (!value.trim()) {
              tempErrors.phoneNumber = "Phone Number is required";
            } else if (!/^\d{10}$/.test(value)) {
              tempErrors.phoneNumber = "Phone Number must be 10 digits";
            } else {
              tempErrors.phoneNumber = "";
            }
          }    
          // Password Validation
          if (name === "password") {
            if (!value) {
              tempErrors.password = "Password required";
            } else if (value.length < 6) {
              tempErrors.password = "Password must be at least 6 characters";
            } else {
              tempErrors.password = "";
            }
          }    
          return tempErrors;        
      }
      )
    }
  };
  const nextStep = () => {
    if (step <3) setStep(step + 1);
  };
  const validateForm = ()=>{
    let isValid = true;
    let tempErrors = {}
    if(!formData.email){
        tempErrors.email='Email required'
        isValid = false       
        
    }
    else if(!/\S+@\S+\.\S+/.test(formData.email)){
        tempErrors.email='Email not valid'
        isValid = false      
        
    }
    if(!formData.fullName){
      tempErrors.fullName='FullName is required'
      isValid = false     
      
    }
    if (!formData.phoneNumber.trim()) {
      tempErrors.phoneNumber = "Phone Number is required";
      isValid = false      
      
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      tempErrors.phoneNumber = "Phone Number must be 10 digits";
      isValid = false     
      
    }
    if(!formData.password){
      tempErrors.password='Password required'
      isValid = false    
    }
    else if(formData.password){
      if(formData.password.length<6){
        tempErrors.password='Password must be 6 digits'
        isValid = false
      }
    }
    setErrors(tempErrors)
    return isValid
  }

  const submitHandler = async () => {    
    setSubmitted(true) ;
    if (!validateForm()) return; // Stop submission if validation fails
    try {
      const response = await axios.post('http://localhost:4000/user/register', formData);
  
      if (response.status === 201) {
        alert(response.data.message);
        navigate('/login')
      }
  
    } catch (error) {
      // Check if the server responded with an error
      if (error.response) {
        console.error("Error Response:", error.response.data); // Log error for debugging
  
        // Handle "User already exists" case
        if (error.response.status === 400 ) {
          alert(error.response.data.message);
        } else {
          alert(error.response.data.message || "Something went wrong!");
        }
      } else {
        // Handle network or server-down issues
        alert(error.response.message);
      }
    }
  };
  

  const Data = [
    {
      img: "https://mindler-products-images.imgix.net/confluence/onboarding/girlOne.png",
      p: "Empower students to learn all about the professional world with virtual career simulator, exhaustive career library, career blogs and vlogs.",
    },
    {
      img: "https://mindler-products-images.imgix.net/confluence/onboarding/girlTwo.png",
      p: "Pave student’s way to their dream college with our end-to-end college application guidance, scholarship drive and corporate internship program.",
    },
    {
      img: "https://mindler-products-images.imgix.net/confluence/onboarding/youngBoy.png",
      p: "Enable students to identify their best-fit career with our world-class career assessment and personalised guidance.",
    },
  ];



  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div>
      {/* Left Signup Form (Fixed) */}
      <div
        className="signup-form w-50 d-flex  flex-column gap-2 align-items-center signup"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          background: "white",
          boxShadow: "2px 0px 10px rgba(0,0,0,0.1)",
          zIndex: 1000,
          paddingTop: "40px",
        }}  >
       
        
             <div className="w-75" >
             <h2 className="text-center">Sign Up to DreamPath</h2>
     
     <label className="d-flex align-items-center">
       Full Name <p className="text-danger m-0 " style={{fontSize:17}}>*</p>
     </label>
     <input
       placeholder="Enter full Name"
       name="fullName"
       value={formData.fullName}
       onChange={handleChange}
       className="w-100 mb-2"
       style={{ height: 40 }}
     />
     {
       errors.fullName && <small className="red">{errors.fullName}</small>
     }
     
     <label className="d-flex">
       Email Address<p className="text-danger m-0"style={{fontSize:17}}>*</p>
     </label>
     <input
       placeholder="Enter email address"
       name="email"
       value={formData.email}
       onChange={handleChange}
       type="email"
       className="w-100 mb-2"
       style={{ height: 40 }}
     />
     {
       errors.email && <small className="red">{errors.email}</small>
     }
     <label>Phone Number</label>
     <input
       placeholder="Enter phone number"
       name="phoneNumber"
       value={formData.phoneNumber}
       onChange={handleChange}
       type="number"
       className="w-100 mb-2"
       style={{ height: 40 }}
     />
       {
       errors.phoneNumber && <small className="red">{errors.phoneNumber}</small>
     }
     <label className="d-flex">Create Password<p className="text-danger m-0"style={{fontSize:17}}>*</p></label>
     <input
       placeholder="Create Password"
       name="password"
       value={formData.password}
       onChange={handleChange}
       type="password"
       className="w-100 mb-2"
       style={{ height: 40 }}
     />
     {
       errors.password && <small className="red">{errors.password}</small>
     }
             <button className="text-center bg-info w-100 mt-2" style={{ height: 40 }} onClick={submitHandler}>
               Continue
             </button>  
             </div> 
               
        
        <span className="d-flex gap-1">
          <i className="fa fa-phone fs-4 text-info" aria-hidden="true"></i>
          <p className="text-info login">+911234567898</p>
        </span>
        <span className="d-flex gap-1">
          <h5>Already have an account?</h5>
          <Link to="/login">Sign in</Link>
        </span>
      </div>

      {/* Right Image Slider (Visible & Scrollable) */}
      <div
        className="image-slider-container"
        style={{
          marginLeft: "50%",
          width: "50%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div className="w-100">
          <Slider {...settings}>
            {Data.map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.img}
                  className="w-100 rounded-5"
                  alt="slider-img"
                  style={{ maxHeight: "60vh", objectFit: "contain" }}
                />
                <p>{item.p}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
