
import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
import OddsList from'./oddsList';
// import UsersContext from "../store/users-context";
const matchdatalist= ({data,showResults}) => {

  return (
    <div role="button" className="d-flex align-items-center flex-1 hover-bg-gray py-2 hoverstyle" >
    <div className=" text-center" style={{width: '60px'}}>
        <span className=" text-dark d-block font-12px opacity-5">{new Date(data.startTimestamp*1000).toLocaleDateString()}</span>
        <span className=" text-dark d-block font-12px opacity-5">FT</span>
    </div>
    <div className="d-flex align-items-center justify-content-between ps-2 pe-2 border-start border-end flex-1">
        <div>
            <span className=" text-dark d-block font-14px lh-1 mb-1">{data.homeTeam.name}</span>
            <span className=" text-dark d-block font-14px lh-1 mb-1 opacity-5">{data.awayTeam.name}</span>
        </div>

        <div className="d-flex align-items-center gap-3 text-center">
        { showResults ? <OddsList data={data}/> : null }

            <div style={{width: '15px'}}>
                <span className=" text-dark d-block font-14px">
                   {data.homeScore.current}
                    </span>
                <span className=" text-dark d-block font-14px opacity-5">{data.awayScore.current}</span>
            </div>
        </div>
    </div>
    {/* <div className=" text-center" style={{Width: '45px'}}>
        <a href="#" className="hoverColor hover-bg-info p-1 rounded-2 " >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#1d7cd8">
                <path fill="#1d7cd8" d="M12 21.5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 4.86 6 7.42 6 10.5v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6C8 8.02 9.51 6 12 6s4 2.02 4 4.5v6z"></path>
            </svg>
        </a>
    </div> */}
</div>
    
  );
};

export default matchdatalist;