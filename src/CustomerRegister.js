import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

const CustomerRegister = (props) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/register/customer', formData)
                .then(() => alert('Customer Registration successful!.')).then(() => {
                    props.setLogin(true)
                    navigate("/customerpanel")
                })

        } catch (error) {
            alert('Registration failed!');
        }
    };

    // Inline CSS styles
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
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
            <h1 style={{ alignSelf: "center" }}>
                Customer Registration
            </h1>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                required
                style={inputStyle}
                autoComplete="off"
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                required
                style={inputStyle}
                autoComplete="off"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
                style={inputStyle}
                autoComplete="off"
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
                style={inputStyle}
                autoComplete="off"

            />
            <button type="submit" style={buttonStyle}>Register</button>
        </form>
    );
};

export default CustomerRegister;
