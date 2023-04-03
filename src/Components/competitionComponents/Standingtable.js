
import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const standing= ({checked,StandingtabeData}) => {

  return (
    <div>
   <div className="text-center mb-3">
            <h5 className=" MetaLinkBold font-16px">Standing</h5>
        </div>
        <div className=" d-flex align-items-center gap-2 mt-4">
            <div>
                <input type="radio" className="btn-check" name="options-outlined" id="all-outlined" 
                autocomplete="off" checked="" value="total" onChange={checked}/>
                <label className="btn btn-info mb-0 lh-1 font-15px MetaLinkBold rounded-3 inputStyle" for="all-outlined">All</label>
            </div>
    
            <div>
                <input type="radio" className="btn-check" name="options-outlined" id="home-outlined" 
                 autocomplete="off" value="home" onChange={checked}/>
                <label className="btn btn-info mb-0 lh-1 font-15px MetaLinkBold rounded-3 inputStyle" for="home-outlined" >Home</label>
            </div>
    
    
            <div>
                <input type="radio" className="btn-check" name="options-outlined" id="away-outlined" 
                 autocomplete="off" value="away" onChange={checked}/>
                <label className="btn btn-info mb-0 lh-1 font-15px MetaLinkBold rounded-3 inputStyle" for="away-outlined">Away</label>
            </div>
    
        </div>
        {/* <!--######3 table #####--> */}
        <table className=" table table-borderless align-middle table-sm mt-3 table-hover tableStyle">
            <thead>
                <tr>
                    <th className="fw-400 font-14px opacity-6 text-center" style={{width: '3%'}}>#</th>
                    <th className="fw-400 font-14px opacity-6" style={{width: '60%'}}>Team</th>
                    <th className="fw-400 font-14px opacity-6 text-center">P</th>
                    <th className="fw-400 font-14px opacity-6 text-center">W</th>
                    <th className="fw-400 font-14px opacity-6 text-center">D</th>
                    <th className="fw-400 font-14px opacity-6 text-center">L</th>
                    <th className="fw-400 font-14px opacity-6 text-center">Goals</th>
                    {/* <th className="fw-400 font-14px opacity-6 text-center" style={{width: '3%'}}>Last 5</th> */}
                    <th className="fw-400 font-14px opacity-6 text-center">Pts</th>
                </tr>
            </thead>
            <tbody>
            {StandingtabeData.map((data , index) => (
                 <tr className={index%2==0?"table-active clickable-row":"clickable-row"} data-href="https://google.com" style={{"cursor": "pointer"}}>
                  <td>
                      <div style={{width: '24px',height: '24px'}} className=" rounded-circle bg-success d-flex align-items-center justify-content-center">
                          <h5 className="m-0 font-13px text-white lh-1">
                             {index+1}
                              </h5>
                      </div>
                  </td>
                  <td>
                      <div className="d-flex align-items-center gap-2">
                          <img src={"https://api.sofascore.app/api/v1/team/"+data.team.id+"/image"} alt="" 
                          style={{width: '24px',height: '24px'}} className=" object-fit-cover"/>
                          <h5 className=" m-0 font-14px">{data.team.name}</h5>
                      </div>
                  </td>
                  <td className=" font-14px text-center">{data.matches}</td>
                  <td className=" font-14px text-center">{data.wins}</td>
                  <td className=" font-14px text-center">{data.draws}</td>
                  <td className=" font-14px text-center">{data.losses}</td>
                  <td className=" font-14px text-center">{data.scoresFor}:{data.scoresAgainst}</td>
                  {/* <td className=" text-center">
                      <div className="btn-group">
                          <a href="#" className="btn justify-content-center btn-success MetaLinkBold font-14px text-white p-0 lh-1 " style={{width: '22px', height: '20px'}}>W</a>
                          <a href="#" className="btn justify-content-center btn-success MetaLinkBold font-14px text-white p-0 lh-1 " style={{width: '22px', height: '20px'}}>W</a>
                          <a href="#" className="btn justify-content-center btn-danger MetaLinkBold font-14px text-white p-0 lh-1 " style={{width: '22px', height: '20px'}}>L</a>
                          <a href="#" className="btn justify-content-center btn-secondary MetaLinkBold font-14px text-white p-0 lh-1 " style={{"width":"22px","height":"20px","-bsBtnBg":"var(--bs-gray-500)","-bsBtnBorderColor":"var(--bs-gray-500)"}}>D</a>
                          <a href="#" className="btn justify-content-center btn-success MetaLinkBold font-14px text-white p-0 lh-1 " style={{width: '22px', height: '20px'}}>W</a>
                          <a href="#" className="btn justify-content-center btn-secondary MetaLinkBold font-14px text-white p-0 lh-1 " style={{"width":"22px","height":"20px","-bsBtnBg":"var(--bs-gray-500)","-bsBtnBorderColor":"var(--bs-gray-500)"}}>&nbsp;</a>

                      </div>
                  </td> */}
                  <td className=" font-14px text-center">{data.points}</td>
              </tr>
                       
                     ))}
            
    
            </tbody>
        </table>
    
        <div className=" d-flex align-items-center gap-2 mt-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(34, 34, 38, 0.45)" className="sc-bYMpWt ehhckD">
                <path fill="rgba(34, 34, 38, 0.45)" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 7v6h-2v-6h2zm0-4v2h-2V7h2z" w="24" h="24" minW="24" mr="lg"></path>
            </svg>
            <span className=" font-12px">In the event that two (or more) teams have an equal number of points, the following rules break the tie: 1. Goal difference 2. Goals scored</span>
        </div>
    </div>
    
  );
};

export default standing;