import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to KL Banking</h1>
      <p>Manage your accounts and transactions efficiently.</p>
      <Link to="/signin">
        <button>Sign In</button>
      </Link>
    </div>
  );
};

export default LandingPage;