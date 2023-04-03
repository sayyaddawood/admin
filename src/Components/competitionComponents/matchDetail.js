
import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const matchedetail= ({data,leagueId,leagueName}) => {

  return (
    <div className=" overflow-auto" style={{maxHeight:"750px"}}>
    {/* <?php for ($a = 1; $a <= 4; $a++) { ?> */}
        <div className=" border-bottom mb-3 pb-1">
            <div className="d-flex align-items-center gap-4 mb-2">
                <img src={"https://api.sofascore.app/api/v1/unique-tournament/"+leagueId+"/image"}
                alt="" className=" rounded-circle" style={{width: '24px'}}/>
                <div>
                    <a href="#" className=" font-12px opacity-5 text-dark d-block link-info lh-1">{leagueName}</a>
                    {/* <span className="MetaLinkSemiBold font-12px ms-auto text-success d-block">Sofascore ratings</span> */}
                </div>
            </div>
            {data.map((data2 , index) => (
                <div role="button" className="d-flex align-items-center flex-1 hover-bg-gray py-2" style={{"-bsBgHoverColor":"var(--bs-gray-100)"}}>
                <div className=" text-center" style={{width: '70px'}}>
                    <span className=" text-dark d-block font-12px opacity-5">{new Date(data2.startTimestamp*1000).toLocaleDateString()}</span>
                    <span className=" text-dark d-block font-12px opacity-5 text-uppercase">FT</span>
                </div>
                <div className="d-flex align-items-center justify-content-between ps-2 pe-2 border-start border-end flex-1">
                    <div>
                        <span className=" text-dark d-block font-14px lh-1 mb-1">{data2.homeTeam.name}</span>
                        <span className=" text-dark d-block font-14px lh-1 mb-1 opacity-5">{data2.awayTeam.name}</span>
                    </div>

                    <div className="d-flex align-items-center gap-3 text-center">
                        <ul className=" d-flex align-items-center justify-content-end gap-1">
                            <li className=" text-center font-12px">
                                {/* <i className="bi bi-hand-thumbs-up text-success"></i> */}
                            </li>
                            <li className=" text-center font-12px">
                                {/* <i className="bi bi-play-circle text-success"></i> */}
                            </li>
                        </ul>

                        <div style={{width: '15px'}}>
                            <span className=" text-dark d-block font-14px"> {data2.homeScore.current}</span>
                            <span className=" text-dark d-block font-14px opacity-5">{data2.awayScore.current}</span>
                        </div>
                    </div>
                </div>
                {/* <div className=" text-center" style={{width: '45px'}}>
                    <div className=" rounded-circle bg-success d-flex align-items-center justify-content-center mx-auto" style={{width: '24px', height: '24px'}}>
                        <h5 className=" font-14px MetaLinkBold text-uppercase m-0 text-white lh-1">W</h5>
                    </div>
                </div> */}
            </div>
                
                ))}  
                       

                      
                 
         

            {/* <?php for ($b = 1; $b <= 2; $b++) { ?> */}
                
            {/* <?php } ?> */}


        </div>

    {/* <?php } ?> */}
</div>
  );
};

export default matchedetail;