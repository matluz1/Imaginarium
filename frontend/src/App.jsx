import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [token, setToken] = useState('');

  // Generate random token for a new user
  useEffect(() => {
    axios.get('/api/generateToken')
      .then((response) => {
        setToken(response.data.token);
      })
      .catch((error) => {
        console.error('Error generating token:', error);
      });
  }, []);

  return (
    <div>
      <h1>Your Token: {token}</h1>
    </div>
  );
};

export default App;
