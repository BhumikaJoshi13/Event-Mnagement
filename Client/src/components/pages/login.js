import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Here you would typically make an API call to authenticate the user
    // For this example, we'll just simulate a login process
    try {
      if (email === 'user@example.com' && password === 'password') {
        alert('Login successful!');
        // Redirect or update app state here
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h3 className="login-title">Welcome Back</h3>
        <form onSubmit={handleSubmit}>
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
          <div className="form-actions">
            <button type="submit" className="login-button">
              Login
            </button>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
        </form>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

// CSS styles
const styles = `
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f3f4f6;
  }

  .login-form {
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .login-title {
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
  }

  .login-button {
    background-color: #2563eb;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .login-button:hover {
    background-color: #1d4ed8;
  }

  .forgot-password {
    font-size: 0.875rem;
    color: #2563eb;
    text-decoration: none;
  }

  .forgot-password:hover {
    text-decoration: underline;
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
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default LoginPage;