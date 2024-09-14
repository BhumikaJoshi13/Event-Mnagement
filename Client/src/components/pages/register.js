import React, { useState } from 'react';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Here you would typically make an API call to register the user
    // For this example, we'll just simulate a registration process
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // If the registration is successful
      setSuccess('Registration successful! You can now log in.');
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h3 className="register-title">Create an Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="register-button">
              Register
            </button>
          </div>
        </form>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
      </div>
    </div>
  );
};

// CSS styles
const styles = `
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f3f4f6;
  }

  .register-form {
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .register-title {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1.5rem;
    color: #1f2937;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #4b5563;
  }

  .form-group input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 1rem;
  }

  .form-group input:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  .form-actions {
    margin-top: 1.5rem;
  }

  .register-button {
    width: 100%;
    background-color: #2563eb;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .register-button:hover {
    background-color: #1d4ed8;
  }

  .error-message {
    margin-top: 1rem;
    padding: 0.5rem;
    background-color: #fee2e2;
    border: 1px solid #ef4444;
    border-radius: 4px;
    color: #b91c1c;
    font-size: 0.875rem;
  }

  .success-message {
    margin-top: 1rem;
    padding: 0.5rem;
    background-color: #d1fae5;
    border: 1px solid #10b981;
    border-radius: 4px;
    color: #047857;
    font-size: 0.875rem;
  }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default RegisterPage;