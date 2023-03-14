import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const mediaList= ({data}) => {
    let transferDate = new Date(data.transferDateTimestamp* 1000).toDateString();   
  // const usersCtx = useContext(UsersContext);
  return (
                 
                        <li>
                            <a href="/player" className=" d-block py-2 px-3 hover-bg-gray linkstyle" >
                                <div className="d-flex gap-2">
                                    <img src={"https://api.sofascore.app/api/v1/team/"+data.transferTo.id+"/image"} alt="" style={{width: '45px'}}/>
                                    <div className=" d-flex align-items-center justify-content-between flex-1">
                                        <div>
                                            <h4 className=" text-capitalize text-dark font-14px fw-500 mb-1 lh-1">{data.toTeamName}</h4>
                                            <h5 className=" font-12px text-dark text-capitalize m-0 fw-300 opacity-5">
                                               
                                               {transferDate}
                                             
                                                </h5>
                                        </div>
                                        <h5 className=" text-success font-14px fw-400 m-0">
                                            
                                            {data.transferFeeRaw?data.transferFeeRaw.value+" "+data.transferFeeRaw.currency:<>0 EUR</>}
                                         </h5>
                                    </div>
                                </div>
                            </a>
                        </li>
  );
};

export default mediaList;