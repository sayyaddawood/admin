import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const careerList= ({data}) => {
    let startDate = new Date(data.startTimestamp* 1000).toDateString();
    let endDate = new Date(data.endTimestamp* 1000).toDateString();   
  // const usersCtx = useContext(UsersContext);
  return (
   
    <li>
<a href="player.php" className=" d-block py-2 px-3 hover-bg-gray linkstyle" >
    <div className="d-flex gap-2">
        <img src={"https://api.sofascore.app/api/v1/team/"+data.team.id+"/image"} alt="" style={{width: '45px'}}/>
        <div className=" flex-1">
            <div className=" d-flex align-items-center justify-content-between">
                <h4 className=" text-capitalize text-dark font-14px fw-500 mb-1 lh-1">{data.team.name}</h4>
                <h5 className=" font-14px fw-400 m-0">{data.performance.totalPoints}</h5>
            </div>
            <div className=" d-flex align-items-center justify-content-between">
                <h5 className=" font-12px text-dark text-capitalize m-0 fw-300 opacity-5">
                    {startDate+" to "+endDate}
                 </h5>
                <ul className=" d-flex align-items-center justify-content-end gap-3">

                    <li className=" font-15px">{data.performance.total}</li>
                    <li className="font-15px text-success">{data.performance.wins}</li>
                    <li className="font-15px opacity-5">{data.performance.draws}</li>
                    <li className="font-15px text-dangeer">{data.performance.losses}</li>
                </ul>
            </div>

        </div>
    </div>
</a>
</li>
  );
};

export default careerList;
