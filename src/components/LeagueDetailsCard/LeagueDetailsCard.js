import React from 'react';
import maleLeagueImg from '../../images/male.png';
import femaleLeagueImg from '../../images/female.png';
import { faCheckCircle, faFlag, faFutbol, faMarsStroke } from '@fortawesome/free-solid-svg-icons'
import './LeagueDetailsCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LeagueDetailsCard = (props) => {
    const {strLeague, intFormedYear, strCountry, strSport, strGender} = props.league;

    return (
        <div>
            <div className="container">
                <div className="d-lg-flex mt-4 league">
                    <div className="col-12 col-lg-6 details">
                        <div className="p-4 text-white leagueInfo">
                            <h2 className="font-weight-bold">{strLeague}</h2>
                            <p>
                                <FontAwesomeIcon icon={faCheckCircle} className="leagueIcon" />
                                <span className="ml-3">Founded: {intFormedYear}</span>
                                </p>
                            <p>
                                <FontAwesomeIcon icon={faFlag} className="leagueIcon" />
                                <span className="ml-3">Country: {strCountry}</span>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faFutbol} className="leagueIcon" />
                                <span className="ml-3">Sports Type: {strSport}</span>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faMarsStroke} className="leagueIcon" />
                                <span className="ml-3">Gender: {strGender}</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className="col-12 col-lg-6">
                        <div className="p-4">
                            {
                                strGender === 'Male' ? 
                                <img src={maleLeagueImg} className="img-fluid" alt=""/> : 
                                <img src={femaleLeagueImg} className="img-fluid" alt=""/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeagueDetailsCard;