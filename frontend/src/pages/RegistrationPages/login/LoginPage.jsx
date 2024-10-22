import React, { useState } from 'react';
import './LoginPage.css'; 
import { useNavigate } from 'react-router-dom';
import docImage from '../../../assets/images/docIntro.webp'

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault(); 
      setError('');
      navigateTo('/home'); 
  
     
      if (username === 'admin' && password === 'password') {
          alert('Login successful!');
          
      } else {
          setError('Invalid username or password');
          
      }
  };
  

    return (
        <div className="login-container">
          <div className="text-content">
          <img id='doc-image' src={docImage} alt="" />
            <h4>Health Desk</h4>
            <h2>Corportate Login</h2>
            <p>Hi, Welcome Back!</p>
          </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button id='loginbtn' type="submit">Login</button>
            </form>
            <p>
                Dont you have any account?{' '}
                <span
                    className="login-link"
                    onClick={() => navigateTo('/register')}
                >
                    SignUp here
                </span>
            </p>
        </div>
    );
};

export default LoginPage;
