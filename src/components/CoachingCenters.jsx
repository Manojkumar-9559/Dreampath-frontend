import { useLocation } from 'react-router-dom';

const CoachingCenters = () => {
  const location = useLocation();
  const coachingCenters = location.state?.coachingCenters || [];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className=" text-center bg-info text-3xl font-bold text-gray-800" style={{marginBottom:20}}>Coaching Centers</h1>

      {coachingCenters.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  w-full max-w-5xl px-4" >
          {coachingCenters.map((center, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition hover:shadow-xl" style={{marginBottom:20}}>
              <h3 className="text-xl font-semibold text-blue-600">{center.name}</h3>
              <p className="text-gray-500 mt-2"><strong>Address:</strong> {center.address}</p>
              <p className="text-gray-500"><strong>Contact:</strong> {center.contact_info}</p>
              {center.website_link && (
                <a
                  href={center.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline mt-2 block"
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg mt-5">No coaching centers found.</p>
      )}
    </div>
  );
};

export default CoachingCenters;
