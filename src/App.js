import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavbarComponent from './components/navbar';
import LoginForm from './components/login';
import RegisterForm from './components/register';
import WelcomePage from './pages/Welcome';
import MainPage from "./pages/FreelancerMain";
import ProjectDetails from "./pages/ProjectDetails"
import ClientMain from "./pages/ClientMain";
import PostProject from "./pages/PostProject";
import UserType from './pages/UserType';
import './App.css'; // Import the custom CSS file

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <BrowserRouter>
      <NavbarComponent isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/usertype" /> : <LoginForm />} />
        <Route path="/register" element={isAuthenticated ? <Navigate to="/usertype" /> : <RegisterForm />} />
        <Route path="/welcome" element={isAuthenticated ? <WelcomePage /> : <Navigate to="/" />} />
        <Route path="/usertype" element={isAuthenticated ? <UserType /> : <Navigate to="/usertype" />} />
          {/* freelancer url */}
          <Route exact path="/form" element={ <MainPage /> } />
          <Route exact path="/project/:id" element={ <ProjectDetails /> } />
          {/* client url */}
          <Route exact path="/client" element={ <ClientMain/> } />
          <Route exact path="/postproject" element={ <PostProject/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
