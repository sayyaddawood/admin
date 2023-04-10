import React, { useContext,useState,useEffect } from 'react'
// import './style/team.css';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext'
import MatcheData from '../Components/teamComponents/matchdata';
import Matchedetails from '../Components/teamComponents/matchDetail';
import Standing from '../Components/teamComponents/Standingtable';
import Player from '../Components/teamComponents/players';
import SeasonsStatistics from '../Components/teamComponents/seasonStatistics';
import LatestTransfer from '../Components/teamComponents/latestTransfer'
import { useLocation } from 'react-router-dom';
import Tournaments from '../Components/teamComponents/tournaments'
const team = () => {

    // const location = useLocation();
    // const Tid = location.state;
    const {Tid} =useParams()

    let type="total"

    const { getTeamdatabyid,teamCountry,teamInfodata,
        teamManagerInfo,teamVenueData,getTeamSeasonStanding,
        teamSeasonStanding,getTeamplayer,teamPlayer,Players,
        getteamtournaments,teamtournamentdata,
        getteamEvent,teamEventData} = useContext(ApiContext);
    let foundationDate = new Date(teamInfodata.foundationDateTimestamp* 1000).toLocaleDateString();

    
    useEffect(() => {
        getTeamdatabyid(Tid)
        getTeamSeasonStanding(Tid)
        getTeamplayer(Tid)
           }, [Tid]);  

           useEffect(() => {
            getteamtournaments(Tid)
            getteamEvent(Tid)
               }, [Tid]);      

    let flagUrl=""
    if(teamCountry.alpha2!=undefined&& teamCountry.alpha2!= null)
    {
    let flagName =teamCountry.alpha2  
    let  result = flagName.toLowerCase()
    flagUrl="https://www.sofascore.com/static/images/flags/"+result+".png"
    }
        const onClick = (e) => {
            type=e.target.value
            // getteamStandings(Tid,type)
         } 

             
  return (
    <div>
      <div className="py-9 padding-inline-2vw padding-inline-lg-10vw bg-dark">
        <div className="row justify-content-between gap-4">
            <div className="col-lg-6">
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-4 gap-lg-12 flex-wrap ">
                    <div className="border-0 border-1 border-primary border-top border-bottom p-3"
                     style={{"width":"135px","-bsBorderWidth":"3px","background":"#202020","transform":"skewX(-10deg)"}}>
                        <img src={'https://api.sofascore.app/api/v1/team/'+teamInfodata.id+'/image'} alt=""
                         style={{"transform":"skewX(10deg)"}}/>
                    </div>
    
                    <div>
                        <h1 className=" MetaLinkExtraBold text-primary text-capitalize">{teamInfodata.fullName}</h1>
                        <div className="d-flex align-items-center gap-2">
                            <img src={flagUrl} alt="" style={{width: '20px'}}/>
                            <h5 className=" font-17px text-white text-capitalize m-0 fw-300">{teamCountry.name}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="row row-cols-2 g-5">
    
                    <div className=" text-start text-lg-center">
                        <h5 className=" font-15px text-white text-uppercase">Total Players</h5>
                        <h5 className=" MetaLinkSemiBold text-primary m-0 font-22px">{teamPlayer.players?teamPlayer.players.length:<></>}</h5>
                    </div>
                    <div className=" text-start text-lg-center">
                        <h5 className=" font-15px text-white text-uppercase">average player age</h5>
                        <h5 className=" MetaLinkSemiBold text-primary m-0 font-22px">27.5 yrs</h5>
                    </div>
                    <div className=" text-start text-lg-center">
                        <h5 className=" font-15px text-white text-uppercase">foreign players</h5>
                        <h5 className=" MetaLinkSemiBold text-primary m-0 font-22px">{teamPlayer.foreignPlayers?teamPlayer.foreignPlayers.length:<></>}</h5>
                    </div>
                    <div className=" text-start text-lg-center">
                        <h5 className=" font-15px text-white text-uppercase">national team player</h5>
                        <h5 className=" MetaLinkSemiBold text-primary m-0 font-22px">{teamPlayer.nationalPlayers?teamPlayer.nationalPlayers.length:<></>}</h5>
                    </div>
    
                </div>
            </div>
        </div>
    </div>
    
    
    <div className="py-7 padding-inline-2vw padding-inline-lg-10vw">
        <div className="row g-4 g-lg-13">
            <div className="col-lg-6">
                <div>
                    <h5 className=" MetaLinkBold font-16px">Info</h5>
                    <ul className=" bottom-line-spacing">
                        <li className="d-flex align-items-center justify-content-between gap-2">
                            <span className=" font-15px fw-400">Coach</span>
                            <span className=" font-15px fw-400"><a href="#" className=" text-info link-success">{teamManagerInfo.name} <i className="bi bi-chevron-right"></i></a></span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between gap-2">
                            <span className=" font-15px fw-400">Foundation date</span>
                            <span className=" font-15px fw-400">{foundationDate}</span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between gap-2">
                            <span className=" font-15px fw-400">Country</span>
                            <span className=" font-15px fw-400 d-flex align-items-center gap-2">
                                <img src={flagUrl} alt="" 
                                style={{width:"16px"}}/>{teamCountry.name}</span>
                        </li>
                    </ul>
                    <hr/>
                    <h5 className=" MetaLinkBold font-16px">Venue</h5>
                    <ul className=" bottom-line-spacing">
                        <li className="d-flex align-items-center justify-content-between gap-2">
                            <span className=" font-15px fw-400">Stadium</span>
                            <span className=" font-15px fw-400">{teamVenueData.stadium}</span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between gap-2">
                            <span className=" font-15px fw-400">Capacity</span>
                            <span className=" font-15px fw-400">
                            {teamVenueData.capacity}</span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between gap-2">
                            <span className=" font-15px fw-400">City</span>
                            <span className=" font-15px fw-400 d-flex align-items-center gap-2">{teamVenueData.cityName},{teamVenueData.countryName}</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h5 className=" MetaLinkBold font-16px m-0">Recent Form</h5>
                    <span className=" font-12px opacity-5 mb-2 d-block">Hover over the form graph to see event details.</span>
                    <img src={require('../images/chart4.png')} alt=""/>
                </div>
            </div>
            <div className="col-lg-6">
                {/* <!--######################################### 
                                Start Season statistics
                      ##########################################--> */}
                  <SeasonsStatistics key={Math.random()}  TeamSeasonStanding={teamSeasonStanding}/>
                <div className="mt-6">
                    {/* <!--######################################### 
                                   Start Latest Transfers
                      ##########################################--> */}
                    <h5 className=" MetaLinkBold font-16px mb-3">Latest Transfers</h5>
                    <LatestTransfer key={Math.random()} />
                    <hr/>
                    {/* <!--######################################### 
                                   Start Tournaments
                      ##########################################--> */}
                    <h5 className=" MetaLinkBold font-16px mb-3">Tournaments</h5>

                    <Tournaments key={Math.random()}  tournamentdata={teamtournamentdata}/>
                </div>
            </div>
        </div>
        {/* <!--######################################### 
                        Start Player
        ##########################################--> */}
          <div className=" mt-10">
            <h5 className=" MetaLinkBold font-16px mb-3 text-center">Players</h5>
    
            <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active border-0 d-flex align-items-center gap-3 text-dark" id="box-tab" data-bs-toggle="tab" data-bs-target="#box-tab-pane" type="button" role="tab" aria-controls="box-tab-pane" aria-selected="true">
                        <input type="radio" id="radio1" className="form-check-input m-0"
                         name="radiobutton" style={{"width":"20px","height":"20px"}} checked/>
                        <label for="radio1" className=" m-0 font-14px" style={{"cursor":"pointer"}}>Box View</label>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link border-0 text-dark d-flex align-items-center gap-3" id="list-tab" data-bs-toggle="tab" data-bs-target="#list-tab-pane" type="button" role="tab" aria-controls="list-tab-pane" aria-selected="false">
                        <input type="radio" id="radio2" className="form-check-input m-0" name="radiobutton"
                         style={{"width":"20px","height":"20px"}}/>
                        <label for="radio2" className=" m-0 font-14px" style={{"cursor":"pointer"}}>List View</label>
                    </button>
                </li>
    
            </ul>
                 <Player key={Math.random()} Players={Players} />        
        </div>              
        
        {/* // <!--######################################### 
        //                 Start Matches
        // ##########################################--> */}
        <div className="mt-10">
            <h5 className=" MetaLinkBold font-16px mb-0 text-center border-bottom pb-2">Matches</h5>
            <div className="row g-0">
        
                <div className="col-md-6 border-end">
                    <ul className="d-flex align-items-center justify-content-between border-bottom py-2 px-3 mb-3">
                        <li><a href="#" className=" text-uppercase font-12px btn btn-outline-info py-2 lh-1" style={{"-bsBtnHoverColor":"white"}}><i className="bi bi-chevron-left lh-1 font-16px"></i> previours</a></li>
                        <li><a href="#" className=" text-uppercase font-12px btn btn-outline-info py-2 lh-1" style={{"-bsBtnHoverColor":"white"}}>next <i className="bi bi-chevron-right lh-1 font-16px"></i></a></li>
                    </ul>
             <div className=" overflow-auto" style={{maxHeight:"750px"}}>   
             {teamEventData.map((data, index) => (
            <Matchedetails key={index}  data={data} />
                 ))} 
               </div>     
                </div>
          <MatcheData />
    
            </div>
        </div>
{/*     
        // <!--######################################### 
        //                 Start Standings
        // ##########################################--> */}
        <div className="mt-10">
          {/* <Standing key={Math.random()} checked={onClick} /> */}
    
          
        </div>
    </div>
    </div>
  );
};

export default team;