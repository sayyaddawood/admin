
import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
import Tabdetail from '../competitionComponents/tabdetail';
import TabStanding from '../competitionComponents/tabstanding';
import Tabmatchdata from '../competitionComponents/tabmatchdata';

// import UsersContext from "../store/users-context";
const matchdata= ({data}) => {

  return (
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
                    <div className=" text-center mb-3" style={{width: '40px'}}>
                        <a href="#" className=" hover-bg-info p-1 rounded-2 atagStyle" >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#1d7cd8">
                                <path fill="#1d7cd8" d="M12 21.5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 4.86 6 7.42 6 10.5v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6C8 8.02 9.51 6 12 6s4 2.02 4 4.5v6z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className=" text-center">
                        <h5 className="mb-3 font-13px">Arsenal</h5>
                        <a href="#">
                            <img src="https://api.sofascore.app/api/v1/team/42/image" alt="" 
                            style={{width: '50px'}}/>
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
                            <img src="https://api.sofascore.app/api/v1/team/35/image" alt="" 
                            style={{width: '50px'}}/>
                        </a>
                    </div>
                    <div className=" text-center mb-3" style={{width: '40px'}}>
                        <a href="#" className=" hover-bg-info p-1 rounded-2 atagStyle">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#1d7cd8">
                                <path fill="#1d7cd8" d="M12 21.5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 4.86 6 7.42 6 10.5v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6C8 8.02 9.51 6 12 6s4 2.02 4 4.5v6z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-3">
                <a href="#" className="btn btn-info text-uppercase rounded-pill px-3 lh-1 font-14px MetaLinkBold linkstyle">Show more</a>
            </div>
        </div>
    </div>
    <div className="mt-2">
        {/* <!-- Nav tabs --> */}
        <div className="border-top shadow-sm">
            <ul className="nav nav-tabs border-0" id="myTab" role="tablist ulstyle2" >
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
          <Tabdetail/>
          <TabStanding/>
          <Tabmatchdata/>
        </div>
     </div>
    </div>
  );
};

export default matchdata;
