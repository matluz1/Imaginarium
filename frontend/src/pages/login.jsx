import React, { useState } from 'react';
import axios from 'axios';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCheck = async () => {
    try {
      const result = await axios.get('/api/protected');
      console.log('Response:', result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleUsernameChange = (element) => {
    setUsername(element.target.value);
  };

  const handlePasswordChange = (element) => {
    setPassword(element.target.value);
  };

  const handleSubmit = (form) => {
    form.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    axios
      .post('/api/login', {
        username,
        password,
      })
      .then((response) => {
        console.log('Response:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <button onClick={handleCheck}>Check</button>
      </div>
    </div>
  );
}
