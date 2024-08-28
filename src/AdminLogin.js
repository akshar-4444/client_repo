import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = (props) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {

        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login/admin', formData);
            localStorage.setItem('token', response.data.token);
            alert('Login successful!');
            props.setLogin(true)
            navigate("/adminpanel")
        } catch (error) {
            console.log(error);
            alert(error?.response?.data || "Invalid input");
        }
    };

    // Inline CSS styles
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    };

    const inputStyle = {
        marginBottom: '10px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ddd'
    };

    const buttonStyle = {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer'
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h1 style={{ alignSelf: "center" }}>Admin Login</h1>
            <input
                value={formData.email}
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
                style={inputStyle}
            />
            <input
                value={formData.password}
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
                style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Login</button>
        </form>
    );
};

export default AdminLogin;
