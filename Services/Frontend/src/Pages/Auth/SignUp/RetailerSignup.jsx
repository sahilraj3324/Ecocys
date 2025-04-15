import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const RetailerSignup = () => {
    const [information, setInformation] = useState({
        name: "",
        email: "",
        password: "",
        phonenumber: "",
        address: "",
        pincode: "",
        userType: "",
        photo: "",
        gstnumber: "",
        tradename: "",
      });
    
      const [message, setMessage] = useState("");
      const [loading, setLoading] = useState(false);
    
      // Handle input changes
      const handleChange = (e) => {
        setInformation({ ...information, [e.target.name]: e.target.value });
      };
    
      // Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
    
        try {
          const response = await axios.post(
            "/api/Buyer/register", // Adjust API URL
            JSON.stringify(information),
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
    
          setMessage("User registered successfully!");
          setInformation({
            name: "",
            email: "",
            password: "",
            phonenumber: "",
            address: "",
            pincode: "",
            userType: "",
            photo: "",
            gstnumber: "",
            tradename: "",
          });
        } catch (error) {
          setMessage("Failed to register user. Please try again.");
          console.error("Error:", error);
        } finally {
          setLoading(false);
        }
      };
  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px", textAlign: "center" }}>
    <h2>Register User</h2>
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px" }}>
      <input type="text" name="name" placeholder="Name" value={information.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={information.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={information.password} onChange={handleChange} required />
      <input type="number" name="phonenumber" placeholder="Phone Number" value={information.phonenumber} onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" value={information.address} onChange={handleChange} required />
      <input type="number" name="pincode" placeholder="Pincode" value={information.pincode} onChange={handleChange} required />
      <input type="text" name="userType" placeholder="User Type (e.g., Seller/Buyer)" value={information.userType} onChange={handleChange} required />
      <input type="text" name="photo" placeholder="Photo URL" value={information.photo} onChange={handleChange} />
      <input type="text" name="gstnumber" placeholder="GST Number" value={information.gstnumber} onChange={handleChange} />
      <input type="text" name="tradename" placeholder="Trade Name" value={information.tradename} onChange={handleChange} />

      <button type="submit" disabled={loading} style={{ padding: "10px", background: "blue", color: "white" }}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>

    {message && <p style={{ marginTop: "10px", color: message.includes("Failed") ? "red" : "green" }}>{message}</p>}

    <Link to = '/homeRetailer'>
    
    <button>
      click to home 
      
      </button></Link>
  </div>
  )
}

export default RetailerSignup
