import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const GetStarted = () => {
    const { educationLevels } = useContext(AuthContext);
    const navigate = useNavigate();    

    const [student, setStudent] = useState(false);
    const [loading, setLoading] = useState(false); // Loading state for student dropdown

    const handleStudentClick = () => {
        setLoading(true); // Start loading
        setStudent(true)       
    };

    return (
        <div className='bg-info position-fixed w-100' style={{ height: 700 }}>
            <div className='d-flex justify-content-end mx-4 p-3 '>
                <i className="fa fa-times" aria-hidden="true" onClick={() => navigate(-1)}></i>
            </div>
            <div className='iAm'>        
                <div className='d-flex justify-content-center align-items-center gap-5' style={{ height: 200 }}>
                    <div className='d-flex flex-column align-items-center justify-content-center hover-card1 bg-white'
                        style={{ height: 150, width: 200, borderRadius: 5 }}
                        onClick={handleStudentClick} // Use the new function
                    >
                        <img src='https://mindlerimages.imgix.net/home/user-student.svg' alt='img' style={{ height: 100, width: 100 }} />
                        <h6>Student</h6>
                    </div>
                    <div className='d-flex flex-column align-items-center justify-content-center hover-card2 bg-white'
                        style={{ height: 150, width: 200, borderRadius: 5 }}
                        onClick={() => navigate('/institutions')}
                    >
                        <img src='https://mindlerimages.imgix.net/home/user-school.svg' alt='img' style={{ height: 100, width: 100 }} />
                        <h6>Institution</h6>
                    </div>
                    <div className='d-flex flex-column align-items-center justify-content-center hover-card3 bg-white'
                        style={{ height: 150, width: 200, borderRadius: 5 }}
                        onClick={() => navigate('/forresources/Career Guidance')}
                    >
                        <img src='https://mindlerimages.imgix.net/home/user-professional.svg' alt='img' style={{ height: 100, width: 100 }} />
                        <h6>Career Professional</h6>
                    </div>
                </div>        
            </div>

            {/* Student Dropdown with Loading */}
            {student && (
                <div className='bg-info position-absolute w-100' style={{ height: 700, top: 40 }}>                  
                        <div className='iAm'>
                            <div className='d-flex justify-content-center align-items-center gap-5' style={{ height: 230 }}>
                                <div className='d-flex flex-column align-items-center justify-content-center hover-card1 bg-white'
                                    style={{ height: 130, width: 330, borderRadius: 5 }}
                                    onClick={() => navigate('/educationLevel')}
                                >
                                    <h6>Choose best colleges for your future</h6>
                                    <p className='text-center'>Find your best-fit career, stream, course with expert guidance.</p>
                                </div>
                            </div>        
                        </div>
                    

                    <p onClick={() => setStudent(false)} className='text-dark text-center goBack'>Go Back</p>
                </div>
            )}
        </div>
    );
};

export default GetStarted;
