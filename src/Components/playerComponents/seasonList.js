import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const seasonList= () => {
  // const usersCtx = useContext(UsersContext);
  return (
                    <div >
            
                            {/* <div className="accordion-item overflow-hidden rounded-0 border-0 border-bottom">
                                <h2 className="accordion-header  border-0" id="heading1.<?php echo $i ?>">
                                    <button className="accordion-button buttonStyle font-15px MetaLinkBold gap-4 px-3 py-2 rounded-0 shadow-none collapsed" type="button" data-bs-toggle="collapse"
                                     data-bs-target="#collapse1.1" aria-expanded="false" aria-controls="collapseOne" 
                                     >
                                        Season Heatmap
                                    </button>
                                </h2>
                                <div id="collapse1.1" className="accordion-collapse collapse" aria-labelledby="heading1.1" data-bs-parent="#accordionExample">
                                    <div className="accordion-body bg-transparent px-3 py-2">
                                        <img src={require('../../images/chart3.png')} alt=""/>
                                    </div>
                                </div>
                            </div> */}
                            <div className="accordion-item overflow-hidden rounded-0 border-0 border-bottom">
                                <h2 className="accordion-header border-0" id="heading2.2">
                                    <button className="accordion-button  buttonStyle font-15px MetaLinkBold gap-4 px-3 py-2 rounded-0 shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2.2" aria-expanded="false" aria-controls="collapseOne" 
                                    >
                                        Matches
                                    </button>
                                </h2>
                                <div id="collapse2.2" className="accordion-collapse collapse" aria-labelledby="heading2.2" data-bs-parent="#accordionExample">
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
                    </div>
    
        
  );
};

export default seasonList;