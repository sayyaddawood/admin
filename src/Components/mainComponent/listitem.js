
import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
import { Link } from "react-router-dom";
// import UsersContext from "../store/users-context";
const listitem= ({data}) => {
  const path = `competition/${data.id}`
  return (
    <Link to={path}  className=" text-primary-hover" >
      <li ><a  className=" text-dark py-1 pe-3 d-flex align-items-center justify-content-between ps-8 hover-bg-gray rounded-2 linkColour" >
           <div className=" text-truncate">
               {data.name}
           </div>
        </a>
      </li>
      </Link>
    
  );
};

export default listitem;