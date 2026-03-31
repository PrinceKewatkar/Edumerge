import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Setup from './pages/Setup';
import Applicants from './pages/Applicants';
import Admissions from './pages/Admissions';
import AdmissionDetail from './pages/AdmissionDetail';
import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><Navigate to="/dashboard" /></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/setup/:section" element={<PrivateRoute adminOnly={true}><Setup /></PrivateRoute>} />
            <Route path="/setup" element={<PrivateRoute adminOnly={true}><Setup /></PrivateRoute>} />
            <Route path="/applicants" element={<PrivateRoute><Applicants /></PrivateRoute>} />
            <Route path="/admissions" element={<PrivateRoute><Admissions /></PrivateRoute>} />
            <Route path="/admissions/:id" element={<PrivateRoute><AdmissionDetail /></PrivateRoute>} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </Router>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;