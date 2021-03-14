import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { useParams } from 'react-router';
import BannerLeague from '../BannerLeague/BannerLeague';
import LeagueDetailsCard from '../LeagueDetailsCard/LeagueDetailsCard';
import LeagueDescription from '../LeagueDescription/LeagueDescription';
import Loading from '../Loading';
import './LeagueDetails.css';
import Header from '../Header/Header';

const LeagueDetails = () => {
    const {leagueId} = useParams();

    const [league, setLeague] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setLeague(data.leagues[0])
        })
        .then(() => setLoading(false))
        .catch((error) => setLoading(false));
    }, [leagueId])

    return (
        <div>
            {loading && (
                <div className="text-center loading-style">
                    <Loading />
                </div>
            )}
            <Header league={league}></Header>
            <BannerLeague league={league}></BannerLeague>
            <LeagueDetailsCard league={league}></LeagueDetailsCard>
            <LeagueDescription league={league}></LeagueDescription>
        </div>
    );
};


export default LeagueDetails;