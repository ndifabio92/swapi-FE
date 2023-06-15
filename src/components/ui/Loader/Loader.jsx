import React from 'react';
import logo from '../../../assets/images/logo/Starwars-logo.png'
import './styles/loader.css';

const Loader = ({ isLoading }) => isLoading && (
    <div className="loaderContainer">
        <img src={logo} alt="" className='spinner img' />
    </div>
);

export default Loader;