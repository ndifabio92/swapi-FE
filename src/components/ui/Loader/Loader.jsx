import React from 'react';
import { CircularProgress } from '@mui/material';
import './styles/index.css';

const Loader = ({ isLoading }) => isLoading && (
    <div className="loaderContainer">
        <CircularProgress />
    </div>
);

export default Loader;