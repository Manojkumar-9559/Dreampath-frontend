import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const EntranceExams = () => {
    const{apiurl
    }=useContext(AuthContext)
    console.log(apiurl)
  const [entranceExams, setEntranceExams] = useState([]);
  const [coachingCenters, setCoachingCenters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state?.id;
  const educationLevel = location.state?.name;

  useEffect(() => {
    const fetchData = async () => {   

      try {
        const response = await axios.get(`${apiurl}/user/getEntranceExams/${id}`);
        console.log("Response:", response.data);

        if (response.status === 200) {
          setEntranceExams(response.data.entranceExams || []);
          setCoachingCenters(response.data.coachingCenters||[]);
        } else if (response.status === 404) {
          alert("Data not found");
        }
      } catch (error) {
        // alert("Internal server error");
      }
    };

    if (id) fetchData();
  }, [id]);

  // const handleExamClick = (exam) => {
  //   navigate('/coachingCenters', { state: { examId: exam.id, examName: exam.name } });
  // };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl text-center bg-info font-bold text-gray-800 mb-6">{educationLevel || "Entrance Exams"}</h1>

      {entranceExams.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4" >
          {entranceExams.map((exam, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-lg p-6 transition hover:shadow-xl cursor-pointer hover:bg-blue-100 text-center"            
            >
              <h5 className="text-xl font-semibold  text-blue-600">{exam.name}</h5>              
            </div>
          ))}
           <div className='text-center text-3xl'>
      <Link state={{coachingCenters}}  to="/coachingCenters" ><p style={{fontSize:20}}>Click to view coaching centers</p></Link>

      </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-5">No entrance exams found.</p>
      )}
     

    </div>
  );
};

export default EntranceExams;
