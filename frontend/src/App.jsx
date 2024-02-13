import './App.css';
import React from 'react';
import LoginPage from './pages/login.jsx';
import SignupPage from './pages/signup.jsx';

const App = () => {
  return (
    <div className="app">
      <LoginPage />
      <SignupPage />
    </div>
  );
};

export default App;
