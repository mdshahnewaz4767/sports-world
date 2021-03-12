import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LeagueList from '../LeagueList/LeagueList';
import Loading from '../Loading';
import "./League.css";
const League = () => {
    const [leagues, setLeagues] = useState([]);
    const [visible, setVisible] = useState(15);
    const [loading, setLoading] = useState(false);
    const allLeagues = leagues.slice(0, visible);

    const loadMoreLeagues =  () => {
        setVisible(previousLeague => previousLeague + 15)
    };

    useEffect(() => {
        setLoading(true)
        fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
        .then(res => res.json())
        .then(data => {
            setLeagues(data.leagues)
        })
        .then(() => setLoading(false))
        .catch(error => alert("Something went wrong!! Please try again later!"))
    }, [])

    return (
        <div className="text-white container mt-4 leagueCard">
            <div className="text-center mt-4">
                {loading && (
                    <Loading />
                )}
            </div>
            <div className="card-group row">
                {
                    allLeagues.map(league => <LeagueList league={league} key={league.idLeague}></LeagueList>)
                }
            </div>
            <div className="card-btn ">
                <button onClick={loadMoreLeagues} className="btn btn-custom mt-2 text-white ms-3 d-block m-auto">Load More</button>
            </div>
        </div>
    );
};

export default League;