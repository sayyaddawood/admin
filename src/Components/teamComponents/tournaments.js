
import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const tournaments= ({tournamentdata}) => {

  return (

 <div className="row g-4 justify-content-center align-items-center">
    {tournamentdata.map((data , index) => (
<div className="col-4">
    <a href="#" className=" hover-opacity-07">
        <div className=" text-center">
            <img src={"https://api.sofascore.app/api/v1/unique-tournament/"+data.id+"/image"} alt="" style={{width: "30px"}} className=" mx-auto"/>
            <span className=" font-12px opacity-7 d-block mt-2 text-dark">{data.name}</span>
        </div>
    </a>
</div>
    ))} 
</div>
  );
};

export default tournaments;
