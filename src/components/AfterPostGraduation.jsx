import axios from "axios";
import React, { useEffect, useState } from "react";

const CareerGuidanceAfterPostgraduation = () => {
  const [categories, setCategories] = useState([]);
  const [careerPaths, setCareerPaths] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/user/data");
      console.log("Response:", response.data);

      // Filter categories related to postgraduation
      const postgraduateCategories = response.data.categories.filter(
        (category) => category.education_id === 6 // Assuming "Postgraduation" has id=2
      );

      setCategories(postgraduateCategories);
      setCareerPaths(response.data.courses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🎯 Career Guidance After Postgraduation</h2>
      <p style={styles.subHeader}>Select a path to explore career opportunities.</p>

      {/* Display Career Categories */}
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

      {/* Show Career Paths Based on Selected Category */}
      {selectedCategory && (
        <div style={styles.card}>
          <h3>{selectedCategory.name}</h3>
          <ul>
            {careerPaths
              .filter((path) => path.category_id === selectedCategory.id)
              .map((path, index) => (
                <li key={index}>
                  <strong>{path.name}</strong> - {path.details}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Inline styles
const styles = {
  container: { padding: "20px", fontFamily: "Arial", textAlign: "center" },
  header: { fontSize: "24px", color: "#2c3e50" },
  subHeader: { fontSize: "18px", marginBottom: "15px" },
  buttonContainer: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "20px" },
  button: { padding: "10px 15px", border: "none", background: "#3498db", color: "#fff", cursor: "pointer", borderRadius: "5px" },
  card: { background: "#ecf0f1", padding: "15px", borderRadius: "5px", textAlign: "left", maxWidth: "500px", margin: "0 auto" },
};

export default CareerGuidanceAfterPostgraduation;
