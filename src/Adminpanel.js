import React from 'react';
import { useNavigate } from 'react-router-dom';

const Adminpanel = (props) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        props.setLogin(false);
        navigate('/customer-register');
    };

    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#2c2c2c",
            color: "#f0f0f0",
            fontFamily: "'Arial', sans-serif",
            textAlign: "center",
            padding: "20px",
            boxSizing: "border-box"
        }}>
            <h1 style={{
                fontSize: "2.5rem",
                marginBottom: "20px",
                borderBottom: "2px solid #444",
                paddingBottom: "10px"
            }}>
                Welcome, Admin
            </h1>
            <p style={{
                fontSize: "1.25rem",
                marginBottom: "30px",
                maxWidth: "600px"
            }}>
                You are logged in as an admin. Manage users, view reports, or log out using the button below.
            </p>
            <button onClick={handleLogout} style={{
                backgroundColor: "#e94e77",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
            }}>
                Logout
            </button>
        </div>
    );
};

export default Adminpanel;
