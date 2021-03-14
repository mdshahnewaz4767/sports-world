import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import bannerSportsImg from '../../images/banner.png';
import "./SportsBanner.css";
const SportsBanner = () => {
    const bannerStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${bannerSportsImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        width: '100%',
        height: '180px',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px'
    }
    
    return (
        <div className="container banner">
            <div style={bannerStyle} className="d-flex justify-content-center align-items-center">
                <h1 className="text-white text-capitalize text-center font-weight-bold">sports world</h1>
            </div>
        </div>
    );
};

export default SportsBanner;