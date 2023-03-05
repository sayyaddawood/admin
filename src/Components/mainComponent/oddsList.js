import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'

// import UsersContext from "../store/users-context";
const oddsList = ({data}) => {
   
  // const usersCtx = useContext(UsersContext);
  return (
    <div className="showSwitch">
    <ul className=" d-flex align-items-center justify-content-end gap-1">
        <li className=" text-center font-12px">
            <span className="d-block opacity-6">1</span>
            <a href="#" className=" text-dark border rounded-2 py-0 d-block px-2 lh-2 MetaLinkBold border-info hover-bg-gray .linkColour2" >1.53</a>
        </li>

        <li className=" text-center font-12px">
            <span className="d-block opacity-6">X</span>
            <a href="#" className=" text-dark border rounded-2 py-0 d-block px-2 lh-2 MetaLinkBold hover-bg-gray .linkColour2" >4.33</a>
        </li>

        <li className=" text-center font-12px">
            <span className="d-block opacity-6">2</span>
            <a href="#" className=" text-dark border rounded-2 py-0 d-block px-2 lh-2 MetaLinkBold hover-bg-gray .linkColour2">5.33</a>
        </li>
    </ul>
</div>
  );
};

export default oddsList;