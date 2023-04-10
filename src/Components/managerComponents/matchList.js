
import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const matchList= () => {
  // const usersCtx = useContext(UsersContext);
  return (
   
    <div className=" border-bottom mb-3 pb-1">
    <div className="d-flex align-items-center gap-4 mb-2">
        <img src="https://api.sofascore.app/api/v1/unique-tournament/17/image" 
        alt="" className=" rounded-circle" style={{width: '24px'}}/>
        <div>
            <a href="#" className=" font-12px opacity-5 text-dark d-block link-info lh-1">Premier League</a>
        </div>
    
    </div>
    {/* <?php for ($b = 1; $b <= 5; $b++) { ?> */}
        <div role="button" className="d-flex align-items-center flex-1 hover-bg-gray py-2 linkstyle" >
            <div className=" text-center" style={{width: '70px'}}>
                <span className=" text-dark d-block font-12px opacity-5">08/12/22</span>
                <span className=" text-dark d-block font-12px opacity-5 text-uppercase">Ft</span>
            </div>
            <div className="d-flex align-items-center justify-content-between ps-2 pe-2 border-start border-end flex-1">
                <div>
                    <span className=" text-dark d-block font-14px lh-1 mb-1">Arsenal</span>
                    <span className=" text-dark d-block font-14px lh-1 mb-1 opacity-5">Olympique Lyonnais</span>
                </div>
    
                <div className="d-flex align-items-center gap-3 text-center">
                    <ul className=" d-flex align-items-center justify-content-end gap-1">
                        <li className=" text-center font-12px">
                            <i className="bi bi-hand-thumbs-up text-success"></i>
                        </li>
                        <li className=" text-center font-12px">
                            <i className="bi bi-play-circle text-success"></i>
                        </li>
                    </ul>
    
                    <div style={{width: '15px'}}>
                        <span className=" text-dark d-block font-14px">
                            {/* <?php echo $b ?> */}1
                            </span>
                        <span className=" text-dark d-block font-14px opacity-5">1</span>
                    </div>
                </div>
            </div>
            <div className=" text-center" style={{width: '45px'}}>
                <div className=" rounded-circle bg-success d-flex align-items-center justify-content-center mx-auto" style={{width: '24px', height: '24px'}}>
                    <h5 className=" font-14px MetaLinkBold text-uppercase m-0 text-white lh-1">W</h5>
                </div>
            </div>
        </div>
    {/* // <?php } ?> */}
    
    
    </div>

  );
};

export default matchList;

