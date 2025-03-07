import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const ForResources = () => {
  const { category } = useParams(); // Get category from URL
  const location = useLocation();
  const resources = location.state?.resources || []; // Get resources from state
  const { apiurl } = useContext(AuthContext);
  
  const [resource, setResource] = useState([]); // Ensure it's initialized as an array
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiurl}/user/getDataForJob`);
        setResource(response.data.resources || []); // Ensure response is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (resources.length === 0) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [apiurl, resources.length]);

  // Function to extract the YouTube video ID and convert to embed URL
  const getEmbedUrl = (url) => {
    if (!url) return ""; // Handle missing URL case
    const videoIdMatch = url.match(/[?&]v=([^&]+)/); // Extract video ID
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : url;
  };

  // Ensure resources exist before filtering
  const filteredResources = resources.length > 0 
  ? resources.filter((item) => item.category_name === category) 
  : resource;

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h1 className="text-center">Resources for {category}</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : filteredResources.length > 0 ? (
        filteredResources.map((resource) => (
          <div
            key={resource.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            {/* Video at the Top */}
            <div style={{ textAlign: "center", marginBottom: "15px" }}>
              <iframe
                width="100%"
                height="315"
                src={getEmbedUrl(resource.video_url)}
                title="Resource Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* Resource Details */}
            <h2>{resource.course_title}</h2>
            <p>
              <strong>Category:</strong> {resource.category_name}
            </p>
            <p>
              <strong>Education Level:</strong> {resource.education_level}
            </p>
            <p>{resource.description}</p>

            {/* Course Link */}
            <p>
              <strong>Course:</strong>{" "}
              <a href={resource.course_url} target="_blank" rel="noopener noreferrer">
                {resource.course_title} ({resource.course_platform})
              </a>
            </p>
          </div>
        ))
      ) : (
        <p>No resources found for this category.</p>
      )}
    </div>
  );
};

export default ForResources;
