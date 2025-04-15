import { useState } from 'react'
import './App.css'
import AuthPage from './components/Auth'
import VendorSignUp from './Pages/Auth/SignUp/VendorSignUp'
import RetailerSignup from './Pages/Auth/SignUp/RetailerSignup'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartScreen from './Pages/Auth/StartScreen'
import HomeRetailer from './Pages/Retailers/Home/HomeRetailer'
import ProductPost from './Pages/Vendor/ProductPost/ProductPost'
import LandingPage from './Pages/Landing/LandingPage'
import Section from './Pages/Retailers/Section/Section'
import Vendorhome from './Pages/Vendor/Home/VendorHome'
import VendorLogin from './Pages/Auth/Login/VendorLogin'
import VendorDashboard from './Pages/Vendor/Dashboard/VendorDashboard'

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={< LandingPage/>} />
        <Route path="/retailerSignup" element={< RetailerSignup/>} />
        <Route path="/startscreen" element={< StartScreen/>} />
        <Route path="/vendorSignup" element={< VendorSignUp/>} />
        <Route path="/homeRetailer" element={< Section/>} />
        <Route path="/productPost" element={< ProductPost/>} />
        <Route path="/vendorhome" element={< Vendorhome/>} />
        <Route path="/vendorlogin" element={< VendorLogin/>} />
        <Route path="/vendordashboard" element={< VendorDashboard/>} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </Router>
  )
}

export default App
