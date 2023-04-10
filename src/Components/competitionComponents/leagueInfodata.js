

import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const leagueInfodata= ({titleData})=> {
let teamId =""
let teamId2=""
if(titleData.titleHolder) 
{
    teamId=titleData.titleHolder.id
}
if(titleData.mostTitlesTeams) 
{
    teamId2=titleData.mostTitlesTeams[0].id
}
  return (
<div className="col-lg-6 border-end"> 
    <h5 className=" p-3 font-14px m-0 MetaLinkBold">Title</h5>
    <div className=" bg-body-tertiary p-5 rounded-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div className=" text-center">
                        <img src={"https://api.sofascore.app/api/v1/team/"+teamId+"/image"} alt="" style={{width: '50px',height: '50px'}}className=" object-fit-cover mx-auto mb-2"/>
                        <h5 className=" MetaLinkBold font-14px text-capitalize mb-1 lh-1">{titleData.titleHolder?titleData.titleHolder.name:<></>}</h5>
                        <span className=" opacity-6 font-12px lh-1 d-block">Title holder({titleData.titleHolderTitles})</span>
                    </div>
                    <div className=" text-center">
                        <img src={"https://api.sofascore.app/api/v1/team/"+teamId2+"/image"} alt="" style={{width: '50px',height: '50px'}}className=" object-fit-cover mx-auto mb-2"/>
                        <h5 className=" MetaLinkBold font-14px text-capitalize mb-1 lh-1">{titleData.mostTitlesTeams?titleData.mostTitlesTeams[0].name:<></>}</h5>
                        <span className=" opacity-6 font-12px lh-1 d-block">Title most({titleData.mostTitles})</span>
                    </div>
    </div>
    {/* <!-- team of the week --> */}
    {/* <div className=" mt-4">
        <div className="d-flex align-items-center justify-content-between mb-2">
            <h5 className=" MetaLinkBold m-0 font-14px">Team of the week</h5>
            <div>
                <select name="" id="" className=" select-box" data-minimum-results-for-search="Infinity">
                    <option selected>Round 15</option>
                    <option>Round 16</option>
                    <option>Round 17</option>
                    <option>Round 2</option>
                    <option>Round 5</option>
                    <option>Round 13</option>
                </select>
            </div>
        </div>
        <img src={require('../../images/chart6.png')}  alt=""/>
    </div> */}
</div>

  );
};

export default leagueInfodata;
