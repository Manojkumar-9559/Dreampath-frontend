import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const CoachingCenters = () => {
  const location = useLocation();
  const coachingCenters = location.state?.coachingCenters || [];

  const locations = ['All', 'Chennai', 'Hyderabad', 'Bangalore'];
  const [selected, setSelected] = useState('All');
  const [search, setSearch] = useState('');

  // Apply filter by location
  const filteredCenters =
    selected === 'All'
      ? coachingCenters
      : coachingCenters.filter(center => center.location === selected);

  // Apply search on already filtered centers
  const searchCenters = search
    ? filteredCenters.filter(center =>
        center.name.toLowerCase().includes(search.toLowerCase())
      )
    : filteredCenters;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      
      {/* Fixed Header */}
      <h1 className="text-center bg-info text-3xl font-bold text-gray-800 fixed top-0 w-full py-4">
        Coaching Centers
      </h1>

      {/* Search Box */}
      <div className='d-flex justify-content-center'>
      <input
        type="text"
        placeholder="Search institute"
        className="input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>
      

      {/* Filter Buttons */}
      <div className="d-flex mt-4" style={{marginLeft:20}}>
        {locations.map((item, index) => (
          <div
            key={index}
            className={`filter ${selected === item ? 'bg-black text-white' : 'bg-white'}`}
            onClick={() => setSelected(item)}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Display Coaching Centers */}
      {searchCenters.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4 mt-4">
          {searchCenters.map((center, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl">
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
        <p className="text-gray-500 text-center text-lg mt-5">No coaching centers found.</p>
      )}
    </div>
  );
};

export default CoachingCenters;
