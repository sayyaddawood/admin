import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const Topleagues = () => {
  // const usersCtx = useContext(UsersContext);
  return (
    <div className=" mb-4">
<h6 className=" MetaLinkBold mb-3">Top leagues</h6>
<div className="accordion mt-3 accordionExample " id="accordionExample2" >
    {/* <?php for ($i = 1; $i <= 1; $i++) { ?> */}
        <div className="accordion-item overflow-hidden rounded-3 border-0">
            <h2 className="accordion-header  border-0" id="Topleaguesheading1.1">
                <button className="accordion-button gap-4 px-2 py-1 rounded-0 shadow-none collapsed buttonstyle" type="button" data-bs-toggle="collapse" data-bs-target="#Topleagues1.1" aria-expanded="false" aria-controls="collapseOne" >
                    <img src="https://api.sofascore.app/api/v1/unique-tournament/16/image" alt="" style={{width: '24px'}}/> World Championship
                </button>
            </h2>
            <div id="Topleagues1.1" className="accordion-collapse collapse" aria-labelledby="Topleagues1.1" data-bs-parent="#accordionExample2">
                <div className="accordion-body p-0">
                    <ul className="py-2">
                        <li><a href="#" className=" text-dark py-1 pe-3 d-flex align-items-center justify-content-between ps-8 hover-bg-gray rounded-2 linkColour" >
                                <div className=" text-truncate" data-bs-toggle="tooltip" data-bs-title="2022 Qatar">
                                    2022 Qatar
                                </div>
                            </a></li>
                        <li><a href="#" className=" text-dark py-1 pe-3 d-flex align-items-center justify-content-between ps-8 hover-bg-gray rounded-2 linkColour" >
                                <div className=" text-truncate" data-bs-toggle="tooltip" data-bs-title="2018 Russia">
                                    2018 Russia
                                </div>
                            </a></li>

                        <li><a href="#" className=" text-dark py-1 pe-3 d-flex align-items-center justify-content-between ps-8 hover-bg-gray rounded-2 linkColour" >
                                <div className="text-truncate" data-bs-toggle="tooltip" data-bs-title="2014 Brazil">2014 Brazil</div>
                            </a></li>

                    </ul>
                </div>
            </div>
        </div>

    {/* <?php } ?> */}
</div>
<ul>
    {/* <?php for ($i = 1; $i <= 5; $i++) { ?> */}
        <li><a href="#" className=" text-dark py-1 px-2 d-flex align-items-center justify-content-between  hover-bg-gray rounded-2 hoverstyle">
                <img src="https://api.sofascore.app/api/v1/unique-tournament/7/image" style={{width: '24px'}} alt=""/>
                <div className=" text-truncate flex-1 ps-4" data-bs-toggle="tooltip" data-bs-title="UEFA Champions League">
                    UEFA Champions League
                </div>
            </a></li>
        <li><a href="#" className=" text-dark py-1 px-2 d-flex align-items-center justify-content-between  hover-bg-gray rounded-2 hoverstyle">
                <img src="https://api.sofascore.app/api/v1/unique-tournament/679/image" style={{width: '24px'}} alt=""/>
                <div className=" text-truncate flex-1 ps-4" data-bs-toggle="tooltip" data-bs-title="UEFA Europa League">
                    UEFA Europa League
                </div>
            </a></li>
        <li><a href="#" className=" text-dark py-1 px-2 d-flex align-items-center justify-content-between  hover-bg-gray rounded-2 hoverstyle" >
                <img src="https://api.sofascore.app/api/v1/unique-tournament/17/image" style={{width: '24px'}} alt=""/>
                <div className=" text-truncate flex-1 ps-4" data-bs-toggle="tooltip" data-bs-title="Premier League">
                    Premier League
                </div>
            </a></li>
    {/* <?php } ?> */}

</ul>
</div>
  );
};

export default Topleagues;
