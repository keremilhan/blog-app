import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import { UserProvider } from './context/userContext';


const AppRouter = () => {
  return (
    <UserProvider>
      <Router>
          <Routes>
              <Route path="/" element={<Navbar/>}>
                  <Route index element={<Home/>} />
                  <Route path="about" element={<About />} />
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
              </Route>
          </Routes>
      </Router>      
    </UserProvider>

  )
}

export default AppRouter