import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const Rankings = () => {
  // const usersCtx = useContext(UsersContext);
  return (
    <div className=" mb-4">
    <h6 className=" MetaLinkBold mb-3">Rankings</h6>
    <ul>
        {/* <?php for ($i = 1; $i <= 1; $i++) { ?> */}
            <li><a href="#" className=" text-dark py-1 px-2 d-flex align-items-center justify-content-between  hover-bg-gray rounded-2 hoverstyle" >
                    <img src="https://www.sofascore.com/static/images/flags/fifa.png" style={{width: '24px'}} alt=""/>
                    <div className=" text-truncate flex-1 ps-4" data-bs-toggle="tooltip" data-bs-title="FIFA Rankings">
                        FIFA Rankings
                    </div>
                </a></li>
            <li><a href="#" className=" text-dark py-1 px-2 d-flex align-items-center justify-content-between  hover-bg-gray rounded-2 hoverstyle" >
                    <img src="https://www.sofascore.com/static/images/flags/uefa.png" style={{width: '24px'}} alt=""/>
                    <div className=" text-truncate flex-1 ps-4" data-bs-toggle="tooltip" data-bs-title="UEFA Rankings">
                        UEFA Rankings
                    </div>
                </a></li>

        {/* <?php } ?> */}

    </ul>
</div>
  );
};

export default Rankings;