    
import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
import { getAge } from '../../UserComponents/Common';
import { Link } from "react-router-dom";

// import UsersContext from "../store/users-context";
const player= ({Players}) => {
 
  return (
            <div className="tab-content mt-4 " id="myTabContent">
                <div className="tab-pane fade show active bottom-line-spacing" id="box-tab-pane" role="tabpanel" aria-labelledby="box-tab" tabindex="0" style={{"-blSpacing":"15px"}}>
                    <div>
                        {/* <h5 className=" MetaLinkBold font-14px mb-3 text-success">Midfielder</h5> */}
                        <div className="row g-2 row-cols-2 row-cols-md-4 row-cols-lg-6">
                    
                        {Players.map((data , index) => (
                            
                        
                          <div>
                                    <div className=" rounded-3 position-relative" style={{"background":"var(--bs-gray-100)"}} data-bs-toggle="tooltip" data-bs-title="Gabriel Jesus">
                                        <div className="py-3 d-flex flex-column gap-4">
                                            <div className=" mx-auto position-relative" style={{"width":"64px","height":"64px"}}>
                                                <img src={"https://api.sofascore.app/api/v1/player/"+data.player.id+"/image"} alt="" 
                                                className="rounded-circle object-fit-cover border"/>
                                                <div className=" text-white p-1 bg-dark rounded-circle d-inline-flex align-items-center justify-content-center position-absolute bottom-0 end-0" style={{"width":"24px","height":"24px"}}>
                                                    <h5 className=" text-white m-0 lh-1 font-14px">{data.player.jerseyNumber}</h5>
                                                </div>
                                            </div>
                                            <h5 className=" MetaLinkBold font-14px text-center">{data.player.name}</h5>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between p-2 bg-body-secondary rounded-bottom-3" style={{"-bsBgOpacity":"0.3"}}>
                                            <h5 className={data.player.position=="F"?" font-14px text-danger MetaLinkBold m-0 ":"font-14px text-success MetaLinkBold m-0 "}>{data.player.position}</h5>
                                            <div className="d-flex align-items-center gap-1">
                                                <img src={"https://www.sofascore.com/static/images/flags/"+data.player.country.alpha2.toLowerCase()+".png"} alt=""
                                                 style={{"width":"16px","height":"16px"}}className=" object-fit-cover"/>
                                                <h5 className="m-0 font-14px lh-1">{data.player.country.name}</h5>
                                            </div>
                                        </div>
                                        <Link to={"../player/"+data.player.id}  className="stretched-link" ></Link>
                                        {/* <a href="#" className=" stretched-link"></a> */}
                                    </div>
                                </div>
                                 ))} 
                                 
                        </div>
                    </div>
               
                </div>
    
                <div className="tab-pane fade" id="list-tab-pane" role="tabpanel" aria-labelledby="list-tab" tabindex="0">
                    <div className="table-responsive">
                        <table className=" table table-bordered align-middle">
                            <thead>
                                <tr>
                                    <th className=" fw-400 font-15px px-3" style={{"background":"var(--bs-gray-100)"}}>Players</th>
                                    <th className=" fw-400 font-15px px-3 text-center" style={{"background":"var(--bs-gray-100)"}}>Position</th>
                                    <th className=" fw-400 font-15px px-3 text-center" style={{"background":"var(--bs-gray-100)"}}>Age</th>
                                    <th className=" fw-400 font-15px px-3 text-center" style={{"background":"var(--bs-gray-100)"}}>Nationality</th>
                                </tr>
                            </thead>
                            <tbody>
                            {Players.map((data , index) => ( 
                               
                                    <tr>
                                        <td className="p-0">
                                            <a href="#" className=" p-2 d-flex align-items-center gap-2 text-dark font-14px hover-bg-gray" style={{"-bsBgHoverColor":"var(--bs-gray-100)"}}>
                                                <div className="d-flex align-items-center justify-content-center rounded-circle bg-dark" style={{"width":"24px","height":"24px"}}>
                                                    <h4 className=" m-0 text-white font-14px lh-1">{data.player.jerseyNumber}</h4>
                                                </div>
                                                {data.player.name}
                                            </a>
                                        </td>
                                        <td className=" MetaLinkBold font-14px text-success text-center">{data.player.position}</td>
                                        <td className="text-center font-14px">
                                             {
                                               
                                                 getAge(new Date(data.player.dateOfBirthTimestamp*1000).toLocaleDateString())
                                             }
                                            </td>
                                        <td className=" text-center">
                                            <div className="d-flex align-items-center justify-content-center gap-2">
                                                <img src={"https://www.sofascore.com/static/images/flags/"+data.player.country.alpha2.toLowerCase()+".png"}
                                                alt="" style={{"width":"20px"}}/>
                                                <h5 className=" font-14px text-capitalize m-0 text-uppercase">{data.player.country.name}</h5>
                                            </div>
                                        </td>
                                    </tr>
                                     ))} 
                            
    
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>    
  );
};

export default player;  
        
        
