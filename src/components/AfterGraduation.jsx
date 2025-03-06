import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";

const AfterGraduation = () => {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const {apiurl}=useContext(AuthContext);
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data for "After Graduation"
  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiurl}/user/data`);
      console.log("Response:", response.data);

      // Filter categories that belong to "After Graduation"
      const afterGraduationCategories = response.data.categories.filter(
        (category) => category.education_id === 5 // Assuming "After Graduation" has id=6
      );

      setCategories(afterGraduationCategories);
      setCourses(response.data.courses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🎯 Career Guidance After Graduation</h2>
      <p style={styles.subHeader}>Select your interest to explore career opportunities.</p>

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
  buttonContainer: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "20px" },
  button: { padding: "10px 15px", border: "none", background: "#3498db", color: "#fff", cursor: "pointer", borderRadius: "5px" },
  card: { background: "#ecf0f1", padding: "15px", borderRadius: "5px", textAlign: "left", maxWidth: "500px", margin: "0 auto" },
};

export default AfterGraduation;
