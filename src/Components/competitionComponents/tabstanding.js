

import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const tabstanding= ({data}) => {

  return (
    <div className="tab-pane" id="tabv1-2" role="tabpanel" aria-labelledby="tabv1-2-tab">
    <div className=" d-flex align-items-center gap-2 mt-2 px-2">
        <div>
            <input type="radio" className="btn-check" name="standingOption" id="standingAll" 
            autocomplete="off" checked/>
            <label className="btn btn-info mb-0 lh-1 font-15px MetaLinkBold rounded-3 inputStyle" for="standingAll">All</label>
        </div>

        <div>
            <input type="radio" className="btn-check" name="standingOption" id="standingHome" 
            autocomplete="off"/>
            <label className="btn btn-info mb-0 lh-1 font-15px MetaLinkBold rounded-3 inputStyle" for="standingHome" >Home</label>
        </div>


        <div>
            <input type="radio" className="btn-check" name="standingOption" id="standingAway" 
            autocomplete="off"/>
            <label className="btn btn-info mb-0 lh-1 font-15px MetaLinkBold rounded-3 inputStyle" for="standingAway" >Away</label>

        </div>

    </div>
    {/* <!--######3 table #####--> */}
    <table className=" table table-borderless align-middle table-sm mt-3 table-hover tableStyle2">
        <thead>
            <tr>
                <th className="fw-400 font-14px opacity-6 text-center" style={{width: '3%'}}>#</th>
                <th className="fw-400 font-14px opacity-6" style={{width: '70%'}}>Team</th>
                <th className="fw-400 font-14px opacity-6 text-center">P</th>
                <th className="fw-400 font-14px opacity-6 text-center">DIFF</th>
                <th className="fw-400 font-14px opacity-6 text-center">Pts</th>
            </tr>
        </thead>
        <tbody>
            {/* <?php for ($i = 1; $i <= 5; $i++) { ?> */}
                <tr className=" table-active clickable-row border-start border-3 border-success" data-href="https://google.com" style={{"cursor":"pointer;"}}>
                    <td>
                        <div style={{width: '24px', height: '24px'}} className=" rounded-circle bg-success d-flex align-items-center justify-content-center">
                            <h5 className="m-0 font-13px text-white lh-1">
                                {/* <?php echo $i ?> */}1
                                </h5>
                        </div>
                    </td>
                    <td>
                        <div className="d-flex align-items-center gap-2">
                            <img src="https://api.sofascore.app/api/v1/team/42/image" alt=""
                             style={{width: '24px', height: '24px'}} className=" object-fit-cover"/>
                            <h5 className=" m-0 font-14px">Arsenal</h5>
                        </div>
                    </td>
                    <td className=" font-14px text-center">18</td>
                    <td className=" font-14px text-center">+15</td>
                    <td className=" font-14px text-center">26</td>
                </tr>
                <tr className=" clickable-row" data-href="https://google.com" style={{"cursor":"pointer"}}>
                    <td>
                        <div style={{width: '24px', height: '24px'}} className=" rounded-circle bg-success d-flex align-items-center justify-content-center">
                            <h5 className="m-0 font-13px text-white lh-1">
                                {/* <?php echo $i ?> */}1
                                </h5>
                        </div>
                    </td>
                    <td>
                        <div className="d-flex align-items-center gap-2">
                            <img src="https://api.sofascore.app/api/v1/team/17/image" alt="" 
                            style={{width: '24px', height: '24px'}}  className=" object-fit-cover"/>
                            <h5 className=" m-0 font-14px">Man City</h5>
                        </div>
                    </td>
                    <td className=" font-14px text-center">18</td>
                    <td className=" font-14px text-center">+15</td>
                    <td className=" font-14px text-center">36</td>
                </tr>

            {/* <?php } ?> */}

        </tbody>
    </table>
</div>
  );
};

export default tabstanding;
