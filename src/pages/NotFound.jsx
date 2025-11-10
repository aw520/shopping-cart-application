import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking doesn't exist.</p>
        <Link to="/">Go Back To Home</Link>
      </div>
    </>
  );
}
