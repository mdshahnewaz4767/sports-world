import React from 'react';
import './BannerLeague.css';

const BannerLeague = (props) => {
    const {strBanner, strBadge} = props.league;
    
    const bannerStyle = {
        backgroundImage: `linear-gradient(rgb(91, 116, 148, 0.9), rgb(228, 226, 226, 0.9)), url(${strBanner})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        width: '100%',
        height: '250px'
    }

    return (
        <div>
            <div style={bannerStyle} className="d-flex justify-content-center align-items-center">
                <img src={strBadge} alt="" className="leagueLogo"/>
            </div>
        </div>
    );
};

export default BannerLeague;