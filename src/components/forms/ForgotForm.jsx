import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotForm = () => {
    const navigate = useNavigate();

    // State variables
    const [step, setStep] = useState(1); // Steps: 1 = Enter Email, 2 = Enter OTP, 3 = Reset Password
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    // API Base URL (Replace with your actual backend URL)
    const API_URL = 'http://localhost:4000/user';

    // 🔹 Step 1: Send OTP
   // Email validation function
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Step 1: Send OTP with Validation
const handleSendOtp = async () => {
  setMessage(''); // Clear previous messages

  if (!email) {
      setMessage('Please enter an email address.');
      return;
  }

  if (!isValidEmail(email)) {
      setMessage('Please enter a valid email address.');
      return;
  }

  setLoading(true);

  try {
      const response = await axios.post(`${API_URL}/send-otp`, { email });
      setMessage(response.data.message); // Set success message from backend
      setStep(2); // Move to OTP input step
  } catch (error) {
      if (error.response) {           
          setMessage(error.response.data?.message || 'Something went wrong. Please try again.');
      } else {
          console.log('Network Error:', error);
          setMessage('Network error. Please check your connection.');
      }   
  }

  setLoading(false);
};

    // 🔹 Step 2: Verify OTP
    const handleVerifyOtp = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`${API_URL}/verify-otp`, { email, otp });
            setMessage(response.data.message);
            setStep(3); // Move to Reset Password step
        } catch (error) {
            setMessage(error.response?.data?.error || 'Invalid OTP');
        }
        setLoading(false);
    };

    // 🔹 Step 3: Reset Password
    const handleResetPassword = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`${API_URL}/reset-password`, { email, newPassword });
            setMessage(response.data.message);
            setTimeout(() => navigate('/login'), 2000); // Redirect to login after success
        } catch (error) {
            setMessage(error.response?.data?.error || 'Failed to reset password');
        }
        setLoading(false);
    };

    return (
        <div className='d-flex flex-column align-items-center'>
            <Navbar />
            <div className='w-100 bg-info position-relative d-flex align-items-center justify-content-center' style={{ height: 250, marginTop: 130, marginBottom: 250 }}>
                <div className='d-flex flex-column p-4 align-items-center position-absolute bg-white rounded-2 gap-3' style={{ height: 350, width: 500, top: 100 }}>
                    
                    <h3 className='text-center'>{step === 1 ? "Forgot Password?" : step === 2 ? "Enter OTP" : "Reset Password"}</h3>
                    {message && <p className="text-center " style={{color:'red'}}>{message}</p>}

                    {step === 1 && (
                        <>
                            <p className='text-center'>Enter your email address and we will send you an OTP to reset your password.</p>
                            <input 
                                className='border-0 border-bottom w-100' 
                                placeholder='Email Address' 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <button className='bg-black rounded-4 text-white w-100' onClick={handleSendOtp} disabled={loading}>
                                {loading ? "Sending..." : "Send OTP"}
                            </button>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <p className='text-center'>Enter the OTP sent to your email.</p>
                            <input 
                                className='border-0 border-bottom w-100' 
                                placeholder='Enter OTP' 
                                value={otp} 
                                onChange={(e) => setOtp(e.target.value)} 
                            />
                            <button className='bg-black rounded-4 text-white w-100' onClick={handleVerifyOtp} disabled={loading}>
                                {loading ? "Verifying..." : "Verify OTP"}
                            </button>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <p className='text-center'>Enter your new password.</p>
                            <input 
                                type="password" 
                                className='border-0 border-bottom w-100' 
                                placeholder='New Password' 
                                value={newPassword} 
                                onChange={(e) => setNewPassword(e.target.value)} 
                            />
                            <button className='bg-black rounded-4 text-white w-100' onClick={handleResetPassword} disabled={loading}>
                                {loading ? "Updating..." : "Reset Password"}
                            </button>
                        </>
                    )}

                    <p style={{ cursor: 'pointer' }} onClick={() => navigate('/login')}>Back to Login</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ForgotForm;
