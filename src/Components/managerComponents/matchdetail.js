
import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const matchdetail= () => {
  // const usersCtx = useContext(UsersContext);
  return ( 
<div className="tab-pane p-2" id="tabv1-3" role="tabpanel" aria-labelledby="tabv1-3-tab">
                                <h5 className=" font-16px MetaLinkBold text-center text-capitalize my-3">Team streaks</h5>
                                <div className="bg-body-tertiary p-3 pt-1 rounded-2 mt-2">
                                    <div className=" d-flex align-items-center justify-content-between">
                                        <span className=" font-12px">First team to score</span>
                                        <img src="https://api.sofascore.app/api/v1/odds/provider/469/logo" style={{width: '60px'}} alt=""/>
                                    </div>
                                    <ul className=" d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                        <li className=" flex-1"><a href="#" className=" bg-white p-1 rounded-2 text-dark d-flex align-items-center justify-content-center MetaLinkBold border hover-bg-gray listStyle" >
                                                <div className="text-center font-12px">
                                                    <span className=" opacity-5">Arsenal</span>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
    
                                                        1.5
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className=" flex-1"><a href="#" className=" bg-white p-1 rounded-2 text-dark d-flex align-items-center justify-content-center MetaLinkBold hover-bg-gray border">
                                                <div className="text-center font-12px listStyle" >
                                                    <span className=" opacity-5">No goal</span>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        13.0
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className=" flex-1"><a href="#" className=" bg-white p-1 rounded-2 text-dark d-flex align-items-center justify-content-center MetaLinkBold hover-bg-gray border">
                                                <div className="text-center font-12px listStyle" >
                                                    <span className=" opacity-5">Manchester United</span>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        2.20
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
    
                                    </ul>
                                </div>
                                <ul className="mt-3 bottom-line-spacing ulStyle" >
                                    {/* <?php for ($i = 1; $i <= 5; $i++) { ?> */}
                                        <li className="d-flex align-items-center justify-content-between">
                                            <img src="https://api.sofascore.app/api/v1/team/35/image"
                                             style={{width: '24px', height: '24px'}} alt=""/>
                                            <span className=" font-14px">Wins</span>
                                            <span className=" font-14px">7</span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <img src="https://api.sofascore.app/api/v1/team/42/image"
                                             style={{width: '24px', height: '24px'}} alt=""/>
                                            <span className=" font-14px">No goals conceded</span>
                                            <span className=" font-14px">7</span>
                                        </li>
    
                                    {/* <?php } ?> */}
    
                                </ul>
                            </div>
  );
};

export default matchdetail;





