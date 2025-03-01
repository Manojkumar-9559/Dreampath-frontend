import React from "react";

const OtpVerify = ({ phonenumber }) => {
  return (
    <div className="w-75">
      <h2>Enter the OTP sent to</h2>
      <p>+91 {phonenumber}</p>
       <p>Enter OTP</p>
      {/* Parent div with flex to align OTP boxes in a row */}
      <div className="otp-container">
        {[1, 2, 3, 4].map((item, index) => (
          <input key={index} className="otp-box">
            
          </input>
        ))}
      </div>
      <p>Resend Otp</p>
      <button className="text-center bg-info w-100 mt-1" style={{ height: 40 }} >
               Continue
             </button>  
    </div>
  );
};

export default OtpVerify;
