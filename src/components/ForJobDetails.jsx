import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

const ForJobDetails = () => {
    const { educationLevel } = useParams();
    const [branches, setBranches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {apiurl}=useContext(AuthContext)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiurl}/user/getDataBylevel/${educationLevel}`);
                if (response.data.educationLevels) {
                    // Filter the data to only show branches for the selected education level
                    const filteredBranches = response.data.educationLevels.filter(
                        (item) => item.education_level === educationLevel
                    );
                    setBranches(filteredBranches);
                }
                setLoading(false);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Failed to fetch data.");
                setLoading(false);
            }
        };

        fetchData();
    }, [educationLevel]);

    if (loading) return <p className='text-center'>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2 className='text-center w-100 bg-info'>Details for {educationLevel}</h2>
            {branches.length > 0 ? (
                branches.map((branch, index) => (
                    <div key={index} className="branch-card" style={{border: '1px solid #ddd', padding: '10px', margin: '10px 0'}}>
                        <h3>{branch.branch}</h3>
                        <p><strong>Skills:</strong> {branch.skills}</p>
                        <p><strong>Private Sector Jobs:</strong> {branch.private_sector_jobs}</p>
                        <p><strong>Government Jobs:</strong> {branch.government_jobs}</p>
                        <p><strong>Certifications:</strong> {branch.certifications}</p>
                    </div>
                ))
            ) : (
                <p>No data found.</p>
            )}
        </div>
    );
};

export default ForJobDetails;
