import React, { useState } from 'react';
import './RegistrationPage.css'; 
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Basic validation
        if (password !== confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        // Simulate registration (replace with real API call)
        if (username && email && password) {
            alert('Registration successful!');
            // Clear form or redirect here
        } else {
            setError('Please fill in all fields');
        }
    };

    return (
        <div className="registration-container">
            <h2>Register</h2>
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
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                <div>
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Register</button>
            </form>

            <p>
                Already have an account?{' '}
                <span
                    className="login-link"
                    onClick={() => navigate('/login')}
                >
                    Login here
                </span>
            </p>
        </div>
    );
};

export default RegistrationPage;
