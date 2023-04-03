

import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const leagueInfolist= ({seasonsData,leagueId,leagueName}) => {
    
    let total=seasonsData.homeTeamWins+seasonsData.draws+seasonsData.awayTeamWins
    let homeTeamWinsPer= Math.round(((seasonsData.homeTeamWins)/total)*100)+"%"
    let drawsPer = Math.round(((seasonsData.draws)/total)*100)+"%"
    let awayTeamWinsPer =Math.round(((seasonsData.awayTeamWins)/total)*100)+"%"

  return (
    <div className="col-lg-6">
    <div className="p-3 border-bottom">
        <h5 className=" font-14px m-0 MetaLinkBold">Lower division</h5>
        <ul className="mt-3">
            <li>
                <a href="#" className=" d-flex align-items-center gap-3 text-capitalize font-14px text-dark">
                    <img src="https://api.sofascore.app/api/v1/unique-tournament/10709/image" alt="" 
                    style={{width: '30px', height: '30px'}} className=" object-fit-cover"/>
                    Ligue 2
                </a>
            </li>
        </ul>
    </div>
    <div className="p-3 border-bottom">
        <h5 className=" font-14px m-0 MetaLinkBold text-capitalize"> newcomers from lower division</h5>
        <ul className="mt-3 bottom-line-spacing ulStyle">
        {/* {seasonsData.newcomersLowerDivision.map((data , index) => (  */}
            <li>
            <a href="#" className=" d-flex align-items-center gap-3 text-capitalize font-14px text-dark">
                <img src="https://api.sofascore.app/api/v1/unique-tournament/10709/image" alt="" 
                style={{width: '30px', height: '30px'}} className=" object-fit-cover"/>
                AJ Auxere
            </a>
         </li>

               {/* ))} */}
           
        </ul>
    </div>
    <div className="p-3 ">
        <h5 className=" font-14px mb-0 MetaLinkBold text-capitalize">Facts</h5>
        <ul className=" bottom-line-spacing mt-3">
            <li className="d-flex align-items-center justify-content-between gap-2">
                <span className=" font-15px fw-400">Goals</span>
                <span className=" font-15px fw-400">{seasonsData.goals}</span>
            </li>
            {/* <li className="d-flex align-items-center justify-content-between gap-2">
                <span className=" font-15px fw-400">Average goals</span>
                <span className=" font-15px fw-400">{seasonsData.goals}</span>
            </li> */}
            <li className="d-flex align-items-center justify-content-between gap-2">
                <span className=" font-15px fw-400">Home team wins</span>
                <span className=" font-15px fw-400">{homeTeamWinsPer}</span>
            </li>
            <li className="d-flex align-items-center justify-content-between gap-2">
                <span className=" font-15px fw-400">Away Team Wins</span>
                <span className=" font-15px fw-400">{awayTeamWinsPer}</span>
            </li>
            <li className="d-flex align-items-center justify-content-between gap-2">
                <span className=" font-15px fw-400">Draws</span>
                <span className=" font-15px fw-400">{drawsPer}</span>
            </li>
            <li className="d-flex align-items-center justify-content-between gap-2">
                <span className=" font-15px fw-400">Yellow cards</span>
                <span className=" font-15px fw-400">{seasonsData.yellowCards}</span>
            </li>
            <li className="d-flex align-items-center justify-content-between gap-2">
                <span className=" font-15px fw-400">Red cards</span>
                <span className=" font-15px fw-400">{seasonsData.redCards}</span>
            </li>
            <li className="d-flex align-items-center justify-content-between gap-2">
                <span className=" font-15px fw-400">Number of competitiors</span>
                <span className=" font-15px fw-400">{seasonsData.numberOfCompetitors}</span>
            </li>
            <li className="d-flex align-items-center justify-content-between gap-2">
                <span className=" font-15px fw-400">Division level</span>
                <span className=" font-15px fw-400">0</span>
            </li>
        </ul>
    </div>
</div>
  );
};

export default leagueInfolist;
