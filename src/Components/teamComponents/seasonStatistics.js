import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const seasonsStatistics= ({TeamSeasonStanding}) => {
  return (
    <div>
    <h5 className=" MetaLinkBold font-16px mb-3">Season statistics</h5>
    <div className="p-2 rounded-3 d-flex align-items-center gap-2 shadow-sm mb-3">
        <div>
            <select name="" id="" className=" select-box border-0" data-minimum-results-for-search="Infinity">
                <option data-image="https://api.sofascore.app/api/v1/unique-tournament/17/image" selected>Premier League</option>
                <option data-image="https://api.sofascore.app/api/v1/unique-tournament/7/image">UEFA Champions League</option>
                <option data-image="https://api.sofascore.app/api/v1/unique-tournament/19/image">FA Cup</option>
                <option data-image="https://api.sofascore.app/api/v1/unique-tournament/21/image">EFL Cup</option>
            </select>
        </div>
        <div>
            <select className="select-box form-control" data-minimum-results-for-search="Infinity" style={{"minWidth":"90px"}}>
                <option selected>16/17</option>
                <option>11/12</option>
                <option>15/13</option>
                <option>20/23</option>
                <option>1/15</option>
            </select>
        </div>
    </div>
    <div className="d-flex align-items-center justify-content-between gap-2 px-3 border-bottom py-2">
        <div>
            <span className=" font-14px MetaLinkBold d-block">Average Sofascore rating</span>
            <span className=" font-12px opacity-6 d-block">Ranked 2/20 in this competition</span>
        </div>
        <span className="p-1 rounded-2 bg-success text-white font-14px">7.05</span>
    </div>

    <div className="accordion not-last-border-line" id="accordionExample" style={{"-bsAccordionActiveBg":"white"}}>
        {/* <?php for ($i = 1; $i <= 10; $i++) { ?> */}

            <div className="accordion-item overflow-hidden rounded-0 border-0">
                <h2 className="accordion-header border-0" id="heading2.1">
                    <button className="accordion-button font-15px MetaLinkBold gap-4 px-3 py-2 rounded-0 shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2.1" aria-expanded="false" aria-controls="collapseOne" style={{"-bsAccordionBtnIconWidth":"15px"}}>
                        Summary
                    </button>
                </h2>
                <div id="collapse2.1" className="accordion-collapse collapse" aria-labelledby="heading2.1" data-bs-parent="#accordionExample">
                    <div className="accordion-body bg-transparent px-3 py-2">
                        <ul className=" bottom-line-spacing">
                            <li className="d-flex align-items-center justify-content-between gap-2">
                                <span className=" font-15px fw-400">Total played</span>
                                <span className=" font-15px fw-400">12</span>
                            </li>
                            <li className="d-flex align-items-center justify-content-between gap-2">
                                <span className=" font-15px fw-400">Started</span>
                                <span className=" font-15px fw-400">12</span>
                            </li>
                            <li className="d-flex align-items-center justify-content-between gap-2">
                                <span className=" font-15px fw-400">Minutes per game</span>
                                <span className=" font-15px fw-400">74</span>
                            </li>
                            <li className="d-flex align-items-center justify-content-between gap-2">
                                <span className=" font-15px fw-400">Team of the week</span>
                                <span className=" font-15px fw-400">12</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        {/* <?php } ?> */}
    </div>
</div>
  );
};

export default seasonsStatistics;