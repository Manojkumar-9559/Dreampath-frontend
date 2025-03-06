import React, { useContext, useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../AuthContext'
const LoginForm = () => {
    const{login,apiurl}= useContext(AuthContext);
    const navigate = useNavigate();
    const[formData,setFormData]=useState({
      email:'',
      password:''
    })
    const [errors, setErrors]= useState({});
    const[submitted,setSubmitted]= useState(false);
    const changeHandler = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      if(submitted){
        setErrors((prevErrors)=>{
          let tempErrors = {...prevErrors};
          if (name === "email") {
            if (!value) {
                tempErrors.email = "Email is required";
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                tempErrors.email = "Invalid email";
            } else {
                delete tempErrors.email; // Remove error when valid
            }
        }

        if (name === "password") {
            if (!value) {
                tempErrors.password = "Password is required";
            } else {
                delete tempErrors.password; // Remove error when valid
            }
        }
        return tempErrors;
        })
      }
      
     
    };  
    const validateForm = ()=>{
      let tempErrors = {}
      let isValid = true;
        if(!formData.email){
          tempErrors.email = 'Email is required';
        }
        else if(!/\S+@\S+\.\S+/.test(formData.email)){
          tempErrors.email = 'Invalid email';
        }
        if(!formData.password){
          tempErrors.password = 'Password is required';
        }       
        setErrors(tempErrors);
        return isValid;

    }
    console.log(`${apiurl}/user/login`,formData);
    
    const onSubmitHandler = async()=>{
      setSubmitted(true);
      if (!validateForm()) return;
      try {
        const response = await axios.post(`${apiurl}/user/login`,formData)
        if(response.status===200){
          alert(response.data.message)
          login();
          navigate('/home')
        }
      } catch (error) {
        if(error.response){
          alert(error.response.data.message)
        }
        else{
          alert('internal server error')
        }
        
      }
    
    }
  return (
    <div className='d-flex flex-column align-items-center '>
        <Navbar/>
        <div className='w-100 bg-info position-relative d-flex align-items-center justify-content-center' style={{height:250,marginTop:130, marginBottom:250}}>
        <div className='d-flex flex-column p-4 align-items-center position-absolute bg-white rounded-2 gap-3' style={{height:300,width:500,top:100}}>
            <h3 className='text-center'>Log in to DreamPath</h3>
            <label className='label'>Email</label>
            <input className='border-0 border-bottom borderthick w-100'
             placeholder='Email Address'
             name='email'
             value={formData.email}
             onChange={changeHandler}
             />
             {errors.email && <small className='text-danger'> {errors.email}</small>}
             <label className='label'>Password</label>
            <input className='border-0 border-bottom borderthick w-100 mt-1'
            name='password'
            value={formData.password}
            onChange={changeHandler}
            placeholder='password'
            type='password'
            />
            
            {errors.password && <small className='text-danger'>{errors.password}</small>}
            <button className='bg-black rounded-4 text-white text-center mt-3 w-100' onClick={onSubmitHandler}>Login</button>
            <div className='d-flex  mt-3'>
                <p className='text-info forgot' onClick={()=>navigate('/reset')} style={{marginRight:50}}>Forgot Password?</p>
                <span className='d-flex ' style={{cursor:'pointer'}}><p>New to Mindler?</p><p className='text-info' onClick={()=>navigate('/signup')}>Create Account</p></span>
            </div>
        </div>
        </div>        
        
        <Footer/>
    </div>
  )
}

export default LoginForm