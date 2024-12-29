import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Splash from './pages/Splash'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cv from './pages/Cv'
// import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import NavbarCV from './components/NavbarCV'
import Footer from './components/Footer'
import NavbarBlog from './components/NavbarBlog'
import Blog from './pages/HomeBlog'
import FooterBlog from './components/FooterBlog'
import Admin from './pages/Admin'

import './utils/iconLibrary';  // Import the icon library configuration

function App() {

  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarBlog />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Splash />} 
            />
            <Route 
              path="/Admin" 
              element={<Admin />} 
            />
            <Route 
              path="/cv" 
              element={<Cv />} 
            />
            <Route 
              path="/blog" 
              element={<Blog />} 
            />
            <Route 
              path="/dashboard" 
              element={user ? <Home /> : <Navigate to="/login"/>} 
            />
            <Route 
              path="/login" 
              element={user ? <Navigate to="/dashboard" /> : <Login />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/dashboard"/>} 
            />
          </Routes>
        </div>
        {/* <FooterBlog /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

