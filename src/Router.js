import React from 'react';
import { Routes, Route } from "react-router-dom";
import App from "./App";
import InstantPage from './components/pages/InstantPage';
import FreelancerPage from './components/pages/FreelancerPage';
import ProjectsPage from './components/pages/ProjectsPage';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/buyinstant" element={<InstantPage />} />
                <Route path="/freelancers" element={<FreelancerPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}

export default Router;