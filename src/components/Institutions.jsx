import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Institutions = () => {
    const navigate = useNavigate();
    const { educationLevels } = useContext(AuthContext);

    const handleEntranceExam = (id, name) => {
        console.log("id:", id);
        navigate('/coachingCenters', { state: { id, name } });
    };

    return (
        <div>
            <h1 className='text-center bg-info w-100'>Institutions For Entrance Exams</h1>
            
            <div className="institutions d-flex justify-content-around r bg-white shadow-lg py-4"
                style={{  left: 0, width: "100%", cursor: 'pointer' }}>
                {educationLevels.map((item, index) => (
                    <div key={index} className="education-item"
                        onClick={() => handleEntranceExam(item.id, item.name)}>
                        {item.name} {/* Displaying education level */}
                    </div>
                ))}
            </div>

            {/* Go Back Button */}
            <p onClick={() => navigate(-1)}
                className='text-dark text-center mt-4'
                style={{ cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline' }}>
                Go Back
            </p>
        </div>
    );
};

export default Institutions;
