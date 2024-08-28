import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import CustomerRegister from './CustomerRegister';
import AdminRegister from './AdminRegister';
import AdminLogin from './AdminLogin';
import CustomerPanel from './CustomerPanel';
import Adminpanel from './Adminpanel';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [login, setLogin] = useState(false)
  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      {!login && <div style={{
        marginBottom: '5rem',
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
        gap: "10px"
      }}>
        <button
          onClick={() => handleNavigation('/customer-register')}
          style={{
            backgroundColor: "transparent",
            outline: "none",
            border: "none",
            cursor: "pointer",
            borderBottom: location.pathname === '/customer-register' ? "3px solid #007bff" : "3px solid transparent",
          }}
        >
          Customer Register
        </button>
        <button
          onClick={() => handleNavigation('/admin-register')}
          style={{
            backgroundColor: "transparent",
            outline: "none",
            border: "none",
            cursor: "pointer",
            borderBottom: location.pathname === '/admin-register' ? "3px solid #007bff" : "3px solid transparent",
          }}
        >
          Admin Register
        </button>
        <button
          onClick={() => handleNavigation('/admin-login')}
          style={{
            backgroundColor: "transparent",
            outline: "none",
            border: "none",
            cursor: "pointer",
            borderBottom: location.pathname === '/admin-login' ? "3px solid #007bff" : "3px solid transparent",
          }}
        >
          Admin Login
        </button>
      </div>}

      {login ?
        <Routes>
          <Route path="/customerpanel" element={<CustomerPanel setLogin={setLogin} />} />
          <Route path="/adminpanel" element={<Adminpanel setLogin={setLogin} />} />
        </Routes>
        :
        <Routes>
          <Route path="/" element={<Navigate to="/customer-register" />} />
          <Route path="/customer-register" element={<CustomerRegister setLogin={setLogin} />} />
          <Route path="/admin-register" element={<AdminRegister setLogin={setLogin} />} />
          <Route path="/admin-login" element={<AdminLogin setLogin={setLogin} />} />
        </Routes>}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
