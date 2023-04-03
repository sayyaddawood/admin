
import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const standing= ({playerStatistics}) => {

  return (
    
    <div className="cover-datatable">
        <table className="table table-bordered table-sm table-striped display datatable align-middle" cellspacing="0" width="100%" data-searching="false" data-lengthChange="false" data-info="false">
            <thead>
                <tr>
                    <th className=" font-14px fw-400 bg-body-secondary p-2 text-center" style={{"-bsBgOpacity":"0.4"}}>#</th>
                    <th className=" font-14px fw-400 bg-body-secondary p-2" style={{"-bsBgOpacity":"0.4"}}>Team</th>
                    <th className=" font-14px fw-400 bg-body-secondary p-2 text-center" style={{"-bsBgOpacity":"0.4"}}>Name</th>
                    <th className=" font-14px fw-400 bg-body-secondary p-2 text-center" style={{"-bsBgOpacity":"0.4"}}>Goals</th>
                    {/* <th className=" font-14px fw-400 bg-body-secondary p-2 text-center" style={{"-bsBgOpacity":"0.4"}}>Expected Goals (XG)</th> */}
                    <th className=" font-14px fw-400 bg-body-secondary p-2 text-center" style={{"-bsBgOpacity":"0.4"}}>Succ. dribbles</th>
                    <th className=" font-14px fw-400 bg-body-secondary p-2 text-center" style={{"-bsBgOpacity":"0.4"}}>Tackles</th>
                    <th className=" font-14px fw-400 bg-body-secondary p-2 text-center" style={{"-bsBgOpacity":"0.4"}}>Assists</th>
                    <th className=" font-14px fw-400 bg-body-secondary p-2 text-center" style={{"-bsBgOpacity":"0.4"}}>Accurate passes %</th>
                    <th className=" font-14px fw-400 bg-body-secondary p-2 text-center" style={{"-bsBgOpacity":"0.4"}}>Rating</th>
                </tr>
            </thead>
            <tbody>
            {playerStatistics.map((data , index) => (

                    <tr>
                        <td className=" text-center">
                        {index+1}
                            </td>
                        <td><img src={"https://api.sofascore.app/api/v1/team/"+data.teamId+"/image" }
                        className=" mx-auto object-fit-cover" alt="" style={{width: '25px' ,height: '25px'}}/></td>
                        <td>{data.playerName}</td>
                        <td className=" text-center">{data.goals}</td>
                        {/* <td className=" text-center">{data.expectedgoals}</td> */}
                        <td className=" text-center">{data.successfulDribbles}</td>
                        <td className=" text-center">{data.tackles}</td>
                        <td className=" text-center">{data.assists}</td>
                        <td className=" text-center">{Math.round(data.accuratePasses).toFixed(2)}</td>
                        <td className=" text-success text-center">{Math.round(data.Rating).toFixed(2)}</td>
                    </tr>
              
                ))}
            </tbody>
        </table>
    </div>
    
    
  );
};

export default standing;


