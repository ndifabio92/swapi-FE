import React from 'react';
import { CircularProgress } from '@mui/material';
import './styles/index.css';
import logo from '../../../assets/images/Starwars-logo.png'

const Loader = ({ isLoading }) => isLoading && (
    <div className="loaderContainer">
        {/* <CircularProgress /> */}
        <img src={logo} alt="" style={{ width: "75px" }} className='spinner' />
    </div>
);

export default Loader;