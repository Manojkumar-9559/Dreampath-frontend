import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [educationLevels, setEducationLevels] = useState([]);
     const apiurl = "https://dreampath-backend-wb24.onrender.com"
    useEffect(() => {
        fetchEducationLevels();
    }, []);

    const fetchEducationLevels = async () => {
        try {
            const response = await axios.get(`${apiurl}/user/data`);
            console.log("Education Levels:", response.data.levels);
            setEducationLevels(response.data.levels);
        } catch (error) {
            console.error("Error fetching education levels:", error);
        }
    };
   

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, educationLevels,apiurl }}>
            {children}
        </AuthContext.Provider>
    );
};
