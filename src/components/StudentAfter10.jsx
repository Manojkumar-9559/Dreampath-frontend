import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";

const CareerGuidance = () => {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
 const{apiurl
    }=useContext(AuthContext)
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data for "After 10th"
  const fetchData = async () => {
    console.log(`${apiurl}/user/data`);
    
    try {
      const response = await axios.get(`${apiurl}/user/data`);
      console.log("Response:", response.data);

      // Filter categories that belong to "After 10th"
      const after10thCategories = response.data.categories.filter(
        (category) => category.education_id === 1 // Assuming "After 10th" has id=1
      );
      console.log(after10thCategories)

      setCategories(after10thCategories);
      setCourses(response.data.courses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🎯 Career Guidance After 10th Class</h2>
      <p style={styles.subHeader}>Choose a category to see available courses.</p>

      {/* Display Categories */}
      <div style={styles.buttonContainer}>
        {categories.map((category) => (
          <button
            key={category.id}
            style={styles.button}
            onClick={() => setSelectedCategory(category)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Show Courses Based on Selected Category */}
      {selectedCategory && (
        <div style={styles.card}>
          <h3>{selectedCategory.name}</h3>
          <ul>
            {courses
              .filter((course) => course.category_id === selectedCategory.id)
              .map((course, index) => (
                <li key={index}>
                  <strong>{course.name}</strong> - {course.details}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Simple inline styles
const styles = {
  container: { padding: "20px", fontFamily: "Arial", textAlign: "center" },
  header: { fontSize: "24px", color: "#2c3e50" },
  subHeader: { fontSize: "18px", marginBottom: "15px" },
  buttonContainer: { display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" },
  button: { padding: "10px 15px", border: "none", background: "#3498db", color: "#fff", cursor: "pointer", borderRadius: "5px" },
  card: { background: "#ecf0f1", padding: "15px", borderRadius: "5px", textAlign: "left", maxWidth: "500px", margin: "0 auto" },
};

export default CareerGuidance;
