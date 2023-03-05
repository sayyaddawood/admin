
import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const listitem= ({data}) => {

  return (
      <li ><a href="#" className=" text-dark py-1 pe-3 d-flex align-items-center justify-content-between ps-8 hover-bg-gray rounded-2 linkColour" >
           <div className=" text-truncate" data-bs-toggle="tooltip" data-bs-title="CAF Champions League">
               {data.name}
           </div>
        </a>
      </li>
    
  );
};

export default listitem;