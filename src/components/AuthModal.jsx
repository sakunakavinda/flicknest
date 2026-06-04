import React, { useState } from 'react';
import { X } from 'lucide-react';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  
  const [formData, setFormData] = useState({
    name: '',
    tpNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in with:', { tpNumber: formData.tpNumber, password: formData.password });
    } else {
      console.log('Registering with:', formData);
    }
    // Handle actual auth logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={24} />
        </button>
        
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        <p className="modal-subtitle">
          {isLogin ? 'Welcome back! Please enter your details.' : 'Create an account to get started.'}
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your name" 
                required={!isLogin} 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="tpNumber">TP Number</label>
            <input 
              type="tel" 
              id="tpNumber" 
              name="tpNumber" 
              placeholder="e.g. 0712345678" 
              required 
              value={formData.tpNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="••••••••" 
              required 
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword" 
                placeholder="••••••••" 
                required={!isLogin} 
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          )}

          <button type="submit" className="auth-submit-btn">
            {isLogin ? 'Log In' : 'Register'}
          </button>
        </form>

        <div className="auth-toggle">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <button type="button" className="toggle-btn" onClick={() => setIsLogin(false)}>
                Register
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button type="button" className="toggle-btn" onClick={() => setIsLogin(true)}>
                Log In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
