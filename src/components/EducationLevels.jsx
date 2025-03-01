import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const EducationLevels = () => {
    const [educationLevels, setEducationLevels] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [colleges, setColleges] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEducationLevels();
    }, []);

    const fetchEducationLevels = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/user/data`);
            console.log("Education Levels:", response.data.levels);
            setEducationLevels(response.data.levels);
        } catch (error) {
            console.error("Error fetching education levels:", error);
        }
    };

    const fetchColleges = async (levelId) => {
        setColleges([]);
        try {
            const response = await axios.get(`http://localhost:4000/user/colleges/${levelId}`);
            console.log("Colleges:", response.data.colleges);
            setColleges(response.data.data);
            setSelectedLevel(levelId);
        } catch (error) {
            console.error("Error fetching colleges:", error);
        }
    };

    return (
        <div className="container position-relative">
            {/* Close Icon (X) */}
            <div
                className="close-icon"
                onClick={() => navigate(-1)}
                style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    cursor: "pointer",
                    fontSize: "2rem",  // Large size
                    color: "black",  // Red color for better visibility
                    zIndex: 1000  // Keeps it on top
                }}
            >
                <FaTimes title="Close" />
            </div>

            {/* Education Levels Section */}
            <h2 className="text-center mt-4">Choose Your Education Level</h2>
            <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
                {educationLevels.map((level) => (
                    <button
                        key={level.id}
                        className="btn btn-info education-level-btn"
                        onClick={() => fetchColleges(level.id)}
                    >
                        {level.name}
                    </button>
                ))}
            </div>

            {/* Colleges Section */}
            {selectedLevel && (
                <div className="colleges-container mt-4">
                    <h3 className="text-center">Top Colleges for {educationLevels.find(el => el.id === selectedLevel)?.name}</h3>
                    <div className="row g-4">
                        {colleges.map((college, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card college-card">
                                    <img src={college.photo_url} className="card-img-top" alt={college.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{college.name}</h5>
                                        <p className="card-text">{college.description}</p>
                                        <h6 className="text-muted">Address: {college.address}</h6>
                                        <iframe
                                            src={`https://www.google.com/maps?q=${college.location}&output=embed`}
                                            width="100%"
                                            height="200"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default EducationLevels;
