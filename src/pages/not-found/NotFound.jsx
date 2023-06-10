import React from 'react';
import './styles/index.css';

const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <h1 className='not-found-h1'>404</h1>
            <h2 className='not-found-h2'>Page Not Found</h2>
            <p className='not-found-p'>Oops! The page you are looking for does not exist.</p>
            <a href="/" className="not-found-a">Go back to homepage</a>
        </div>
    );
};

export default NotFoundPage;