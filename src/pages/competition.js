import React, { useContext,useState,useEffect } from 'react'
import './style/competitionStyle.css';
import { ApiContext } from '../context/ApiContext'
import Standing from '../Components/competitionComponents/Standingtable';
import Matchedetail from '../Components/competitionComponents/matchDetail';
import Matchedata from '../Components/competitionComponents/matchdata';
import LeagueInfodata from '../Components/competitionComponents/leagueInfodata';
import LeagueInfolist from '../Components/competitionComponents/leagueInfolist';
import { useLocation } from 'react-router-dom';
import PlayerStatistics from '../Components/competitionComponents/playerStatistics';
const competition= () => {
   
    const location = useLocation();
    let Sid="37036"
    const data = location.state.objdata; 
    let type="total"

 const {getleaguetandingdata,
        leaguestandingData,
        leaguestandingTourInfo,
        leagueCategoryInfo,
        getMatchdataBytourandSeasonIds,
        leagueMatchesdata,
        getPlayerStatistics,
        playerStatisticsData,
        getFactSeasondata,
        seasonsData,
    } = useContext(ApiContext);
 let flagUrl=""
 if(leagueCategoryInfo.alpha2!=undefined&& leagueCategoryInfo.alpha2!= null)
 {
 let flagName =leagueCategoryInfo.alpha2  
 let  result = flagName.toLowerCase()
 flagUrl="https://www.sofascore.com/static/images/flags/"+result+".png"
 }


 useEffect(() => {
    getleaguetandingdata(data.id,type,Sid)
    getMatchdataBytourandSeasonIds(data.id,Sid)
    getPlayerStatistics(data.id,Sid)
    getFactSeasondata(data.id,Sid)
       }, [data.id,Sid]);  


    const onClick = (e) => {
        type=e.target.value
        getleaguetandingdata(data.id,type,data.Sid)
     }    
  return (
    // <?php include('assets/include/header.php') ?>
<div> 
    <div className="py-9 padding-inline-2vw padding-inline-lg-10vw bg-dark">
        <div className="row justify-content-between gap-4">
            <div className="col-lg-9">
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-4 gap-lg-12 flex-wrap ">
                    <div className="border-0 border-1 border-primary border-top border-bottom p-3" style={{"width":"135px","-bsBorderWidth":"3px","background":"#202020","transform":"skewX(-10deg)"}}>
                        <img src={"https://api.sofascore.app/api/v1/unique-tournament/"+leaguestandingTourInfo.id+"/image"} alt="" style={{"transform":"skewX(10deg)"}}/>
                    </div>
    
                    <div>
                        <h1 className=" MetaLinkExtraBold text-primary text-capitalize"> {leaguestandingTourInfo.name}</h1>
                        <div className="d-flex align-items-center gap-2">
                            <img src={flagUrl} alt="" style={{width: '25px'}} className=" rounded-circle border border-primary"/>
                            <h5 className=" font-17px text-white text-capitalize m-0 fw-300">{leagueCategoryInfo.name}</h5>
                        <div>
                            <select className=" transInput form-control border-top-0 border-bottom-0 
                            border-start border-end border-primary rounded-0 font-13px mx-auto ps-4">
                              <option>2012-2013</option>
                              </select>
                              </div>
                           </div>
                        </div>
                      
                </div>
            </div>
    
        </div>
    </div>
    
    
    <div className="py-7 padding-inline-2vw padding-inline-lg-10vw">
        <Standing key={Math.random()} checked={onClick} StandingtabeData={leaguestandingData}/>
        {/* <!--#########################################  */}
                        {/* Start Matches */}
        {/* ##########################################--> */}
        <div className="mt-10">
            <h5 className=" MetaLinkBold font-16px mb-0 text-center border-bottom pb-2">Matches</h5>
            <div className="row g-0">
                <div className="col-md-6 border-end">
                    <ul className="d-flex align-items-center justify-content-between border-bottom py-2 px-3 mb-3">
                        <li><a href="#" className=" text-uppercase font-12px btn btn-outline-info py-2 lh-1" style={{"-bsBtnHoverColor":"white"}}><i className="bi bi-chevron-left lh-1 font-16px"></i> previours</a></li>
                        <li><a href="#" className=" text-uppercase font-12px btn btn-outline-info py-2 lh-1" style={{"-bsBtnHoverColor":"white"}}>next <i className="bi bi-chevron-right lh-1 font-16px"></i></a></li>
                    </ul>
              <Matchedetail leagueId={leaguestandingTourInfo.id} leagueName={leaguestandingTourInfo.name} data={leagueMatchesdata}/>
                </div>
          <Matchedata/>
    
            </div>
        </div>
    
        {/* // <!--#########################################  */}
                        {/* // Start League info */}
        {/* // ##########################################--> */}
        <div className=" mt-10">
            <h5 className=" MetaLinkBold font-16px mb-0 text-center border-bottom pb-2">League info</h5>
            <div className="row">
               <LeagueInfodata/>
                <LeagueInfolist seasonsData={seasonsData} leagueId={leaguestandingTourInfo.id} leagueName={leaguestandingTourInfo.name} /> 
            </div>
        </div>
    
        <div className=" mt-7">
        <h5 className=" MetaLinkBold m-0 font-14px text-center mb-3">Player Statistics</h5>
        {/* <!-- table --> */}
        <PlayerStatistics playerStatistics={playerStatisticsData}/>
        </div>
    </div>
     </div>

    // <?php include('assets/include/footer.php') ?>
  );
};
export default competition;