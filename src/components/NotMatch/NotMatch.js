import React from 'react';
import logo from '../../images/website-logo.png';
import './NotMatch.css';

const NoMatch = () => {

    return (
        <div className="not-found">
            <div className="text-center logo-info">
                <div className="pad">
                    <img src={logo} className="img-fluid" alt="website logo"/>
                    <span className="ml-2">Sports World</span>
                </div>
            </div>
            <div className="info container">
                <h1 className="text-danger font-weight-bold">404</h1>
                <h5 className="text-uppercase mt-4 text-danger">page not found</h5>
            </div>
        </div>
    );
};

export default NoMatch;