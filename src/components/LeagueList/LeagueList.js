import React, { useEffect, useState} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./LeagueList.css";
import { Link } from 'react-router-dom';

const LeagueList = (props) => {
    const {strLeague, strSport, idLeague} = props.league;

    //For League Badge
    const [leagueBadge, setLeagueLogo] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setLeagueLogo(data.leagues)
        })
    }, [idLeague])

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card mb-4 mt-2 text-center">
                {
                    leagueBadge.map(league => <img src={league.strBadge} key={league.idLeague} className="leagueImg" alt=""/>)
                }
                <div className="card-body">
                    <h5 className="card-title fw-bold">{strLeague}</h5>
                    <p className="card-text">Sports type: {strSport}</p>
                </div>
                <div className="footer-card">
                    <Link to={`/league/${idLeague}`}>
                        <button className="btn btn-custom px-3 mt-2 text-white ms-3 mb-3">
                            Explore
                            <FontAwesomeIcon icon={faArrowRight} className="ml-2"></FontAwesomeIcon>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LeagueList;
