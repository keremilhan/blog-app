import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Profile from './pages/Profile/Profile';
import Myblog from './pages/Myblog/Myblog'
import CreatePost from './pages/CreatePost/CreatePost';
import { LoginProvider } from './context/userContext';


const AppRouter = () => {

  return (
    <LoginProvider>
      <Router>
          <Routes>
              <Route path="/" element={<Navbar/>}>
                  <Route index element={<Home/>} />
                  <Route path="about" element={<About />} />
                  <Route path="login" element={<Login />} />
                  <Route path="myblog" element={<Myblog />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="create-post" element={<CreatePost />} />
              </Route>
          </Routes>
      </Router>      
    </LoginProvider>

  )
}

export default AppRouter