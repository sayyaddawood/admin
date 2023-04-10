import React,{ useContext, useState, useEffect } from 'react'
import './style/manager.css';
import { ApiContext } from '../context/ApiContext'
import CareerList from '../Components/managerComponents/careerList'
import Detail from '../Components/managerComponents/detail';
import Standing from '../Components/managerComponents/standings';
import MatchList from '../Components/managerComponents/matchList'
import Matchdetail from '../Components/managerComponents/matchdetail'
import { useLocation, useParams } from 'react-router-dom';
import { getAge } from '../UserComponents/Common';
import Matchedetails from '../Components/teamComponents/matchDetail';

const manager = () => {

    // const location = useLocation();
    // const Mid = location.state;
    const { Mid } = useParams()

    const { getManagerEvents,managerEvents,getManagerdatabyId, getManagercareer, managerInfo, managerteamInfo, managercountryInfo, managerperformance, managercareer } = useContext(ApiContext);
    let dateOfBirth = new Date(managerInfo.dateOfBirthTimestamp * 1000).toLocaleDateString();
    let winsPer = Math.round(((managerperformance.wins) / managerperformance.total) * 100).toFixed(2) + "%"
    let drawsPer = Math.round(((managerperformance.draws) / managerperformance.total) * 100).toFixed(2) + "%"
    let lossesPer = Math.round(((managerperformance.losses) / managerperformance.total) * 100).toFixed(2) + "%"
    let Age = getAge(dateOfBirth)

    let flagUrl = ""
    if (managercountryInfo.alpha2 != undefined && managercountryInfo.alpha2 != null) {
        let flagName = managercountryInfo.alpha2
        let result = flagName.toLowerCase()
        flagUrl = "https://www.sofascore.com/static/images/flags/" + result + ".png"
    }

    useEffect(() => {
        getManagerdatabyId(Mid)
        getManagercareer(Mid)
        getManagerEvents(Mid)
    }, [Mid]);

    


   

const imageStyle = {
    width:135,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
}
    return (


        <div>
            <div className="py-9 padding-inline-2vw padding-inline-lg-10vw bg-dark">
                <div className="row justify-content-between gap-4">
                    <div className="col-lg-6">
                        <div className="d-flex align-items-start  gap-5 flex-wrap ">
                            <img style={imageStyle}  src={"https://api.sofascore.app/api/v1/manager/" + managerInfo.id + "/image"} alt=""
                                className="border border-1 border-primary "
                            />
                            <img src={flagUrl} alt="" style={{ width: '60px' }} />
                            <div>
                                <h1 className=" MetaLinkExtraBold text-primary text-capitalize">{managerInfo.name}</h1>
                                <h4 className=" text-white text-capitalize">{managerteamInfo.name}</h4>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="row row-cols-2 row-cols-lg-3 g-5">
                            <div className="d-none d-md-block"></div>
                            <div className=" text-start text-lg-center">
                                <h5 className=" font-15px text-white text-uppercase">Nationality</h5>
                                <div className=" d-flex align-items-center justify-content-start justify-content-lg-center gap-2">
                                    <img src="https://www.sofascore.com/static/images/flags/de.png"
                                        alt="" style={{ width: '35px', height: '35px' }}
                                        className=" rounded-circle border border-primary" />
                                    <h5 className=" MetaLinkSemiBold text-primary m-0 font-21px">{managerInfo.nationality}</h5>
                                </div>
                            </div>
                            <div className=" text-start text-lg-center">
                                <h5 className=" font-15px text-white text-uppercase">{dateOfBirth}</h5>
                                <h5 className=" MetaLinkSemiBold text-primary m-0 font-22px">{Age}</h5>
                            </div>

                            <div className=" text-start text-lg-center">
                                <h5 className=" font-15px text-white text-uppercase">PREFERRED FOOT</h5>
                                <h5 className=" MetaLinkSemiBold text-primary m-0 font-22px">{managerInfo.preferredFormation}</h5>
                            </div>
                            <div className=" text-start text-lg-center">
                                <h5 className=" font-15px text-white text-uppercase">Games</h5>
                                <h5 className=" MetaLinkSemiBold text-primary m-0 font-22px">{managerperformance.total}</h5>
                            </div>
                            <div className=" text-start text-lg-center">
                                <h5 className=" font-15px text-white text-uppercase">points/match</h5>
                                <h5 className=" MetaLinkSemiBold text-primary m-0 font-22px">{managerperformance.totalPoints}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-7 padding-inline-2vw padding-inline-lg-10vw">
                <div className="text-center mb-3">
                    <h5 className=" MetaLinkBold font-16px">Career History</h5>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6">
                        {/* <img src={require('../images/chart5.png')} alt="" /> */}
                        {/* <!-- performance --> */}
                        <div className=" mt-6">
                            <div className="text-center">
                                <h5 className=" MetaLinkBold font-18px">Performance</h5>
                            </div>
                            <div className=" d-flex align-items-center justify-content-between">
                                <span className=" font-14px text-success">{managerperformance.wins}</span>
                                <span className=" font-14px opacity-5">{managerperformance.draws}</span>
                                <span className=" font-14px text-danger">{managerperformance.losses}</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className=" bg-success p-2 text-white font-14px flex-fill rounded-start-2" style={{ width: { winsPer } }}>{winsPer}</div>
                                <div className=" bg-secondary p-2 text-white font-14px flex-fill text-center" style={{ width: { drawsPer } }}>{drawsPer}</div>
                                <div className=" bg-danger p-2 text-white font-14px flex-fill rounded-end-2 text-end" style={{ width: { lossesPer } }}>{lossesPer}</div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className=" d-flex align-items-center justify-content-between mb-3">
                            <h6 className=" m-0 MetaLinkBold font-14px text-capitalize">career</h6>
                            <h6 className=" m-0 opacity-5 font-14px text-capitalize">points per match</h6>
                        </div>
                        <ul className=" overflow-auto not-last-border-line maxHeight" >
                            {managercareer.map((data, index) => (
                                <CareerList key={index} data={data} />
                            ))}

                        </ul>
                    </div>
                </div>
                {/* // <!--######################################### 
                        Start Matches
        // ##########################################--> */}
                <div className="mt-10">
                    <h5 className=" MetaLinkBold font-16px mb-0 text-center border-bottom pb-2">Matches</h5>
                    <div className="row g-0">
                        <div className="col-md-6 border-end">
                          
                        {managerEvents.map((data, index) => (
            <Matchedetails key={index}  data={data} />
                 ))} 

                         
                        </div>
                        <div className="col-md-6">
                            <div className="px-3 py-2">
                                <ul className=" d-flex align-items-center gap-2">
                                    <li><a href="#" className=" text-info font-12px MetaLinkBold">England</a></li>
                                    <li><i className="bi bi-caret-right-fill lh-1 font-11px opacity-4"></i></li>
                                    <li><a href="#" className=" text-info font-12px MetaLinkBold">Premier League, Round 21</a></li>
                                    <li><i className="bi bi-caret-right-fill lh-1 font-11px opacity-4"></i></li>
                                    <li><a href="#" className=" font-12px MetaLinkBold text-body-tertiary">Arsenal - Man Utd</a></li>
                                </ul>
                                <div>
                                    <div className="d-flex align-items-end justify-content-between mt-3">
                                        <div className="d-flex align-items-end gap-1">
                                            <div className=" text-center mb-3" style={{ width: '40px' }}>
                                                <a href="#" className=" hover-bg-info p-1 rounded-2 atagstyle" >
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#1d7cd8">
                                                        <path fill="#1d7cd8" d="M12 21.5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 4.86 6 7.42 6 10.5v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6C8 8.02 9.51 6 12 6s4 2.02 4 4.5v6z"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className=" text-center">
                                                <h5 className="mb-3 font-13px">Arsenal</h5>
                                                <a href="#">
                                                    <img src="https://api.sofascore.app/api/v1/team/42/image" alt="" style={{ width: '50px' }} />
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" text-center mb-1">
                                            <h5 className=" font-18px MetaLinkBold mb-1">Next week</h5>
                                            <h6 className=" font-12px opacity-5 m-0">22/01/2023 21:30</h6>
                                        </div>
                                        <div className="d-flex align-items-end gap-1">
                                            <div className=" text-center">
                                                <h5 className="mb-3 font-13px">Man Utd</h5>
                                                <a href="#">
                                                    <img src="https://api.sofascore.app/api/v1/team/35/image" alt="" style={{ width: '50px' }} />
                                                </a>
                                            </div>
                                            <div className=" text-center mb-3" style={{ width: '40px' }}>
                                                <a href="#" className=" hover-bg-info p-1 rounded-2 atagstyle" >
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#1d7cd8">
                                                        <path fill="#1d7cd8" d="M12 21.5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 4.86 6 7.42 6 10.5v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6C8 8.02 9.51 6 12 6s4 2.02 4 4.5v6z"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-3">
                                        <a href="#" className=" btnStyle2 btn btn-info text-uppercase rounded-pill px-3 lh-1 font-14px MetaLinkBold " >Show more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2">
                                {/* <!-- Nav tabs --> */}
                                <div className="border-top shadow-sm">
                                    <ul className="nav nav-tabs border-0 ulStyle2" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link p-3 font-14px border-top-0 border-start-0 border-end-0 text-uppercase active" id="tabv1-1-tab" data-bs-toggle="tab" data-bs-target="#tabv1-1" type="button" role="tab" aria-controls="tabv1-1" aria-selected="true">Details</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link p-3 font-14px border-top-0 border-start-0 border-end-0 text-uppercase" id="tabv1-2-tab" data-bs-toggle="tab" data-bs-target="#tabv1-2" type="button" role="tab" aria-controls="tabv1-2" aria-selected="false" tabindex="-1">Standings</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link p-3 font-14px border-top-0 border-start-0 border-end-0 text-uppercase" id="tabv1-3-tab" data-bs-toggle="tab" data-bs-target="#tabv1-3" type="button" role="tab" aria-controls="tabv1-3" aria-selected="false" tabindex="-1">Matches</button>
                                        </li>
                                    </ul>
                                </div>

                                {/* <!-- Tab panes --> */}
                                <div className="tab-content p-2">
                                    <Detail />
                                    <Standing />
                                    <Matchdetail />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default manager;