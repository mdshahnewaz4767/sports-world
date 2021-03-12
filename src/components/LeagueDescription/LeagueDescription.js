import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './LeagueDescription.css';

const LeagueDescription = (props) => {
    const {strDescriptionEN, strDescriptionFR, strTwitter, strFacebook, strWebsite, strYoutube} = props.league;
    
    return (
        <div className="container">
            <div className="description">
                   <p className="text-white mt-3 mb-5">{strDescriptionEN}</p>
                <p className="text-white">{strDescriptionFR}</p>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <div className="icon bg-twitter">
                    <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="text-white twitter-icon mb-4" />
                    </a>
                </div>
                <div className="icon ml-4 bg-facebook">
                    <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} className="text-white facebook-icon" />
                    </a>
                </div>
                <div className="icon ml-4 bg-website">
                    <a href={`https://${strWebsite}`} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGlobe} className="text-white website-icon" />
                    </a>
                </div>
                <div className="icon ml-4 bg-youtube">
                    <a href={`https://${strYoutube}`} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faYoutube} className="text-white youtube-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LeagueDescription;