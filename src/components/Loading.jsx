import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

const Loading = () => {
    const loaderStyle = {
        height: '100vh'
    }
    return (
        <div style={loaderStyle}>
             <Loader type="Grid" color="#00BFFF" height={80} width={80} timeout={3000} />
        </div>
    );
};

export default Loading;