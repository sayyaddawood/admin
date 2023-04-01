import React, { useContext,useState,useEffect } from 'react'
import './style/player.css';
import Media from '../Components/playerComponents/media';
import TansferList from '../Components/playerComponents/mediaList';
import SeasonList from '../Components/playerComponents/seasonList';
import { ApiContext } from '../context/ApiContext'
import { useParams } from 'react-router-dom';
import { getAge } from '../UserComponents/Common';

const player= () => {
const {id} =useParams()
const {getPlayerdatabyId,getPlayertransfarhistory,playertransferinfo,playerInfo,playercountryInfo,playerteamInfo,getPlayermedia,playermediainfo} = useContext(ApiContext);
let contractUntil = new Date(playerInfo.contractUntilTimestamp* 1000).toDateString();
let dateOfBirth = new Date(playerInfo.dateOfBirthTimestamp* 1000).toLocaleDateString();
let Age=getAge(dateOfBirth)
let flagUrl=""
if(playercountryInfo.alpha2!=undefined&& playercountryInfo.alpha2!= null)
{
let flagName =playercountryInfo.alpha2  
let  result = flagName.toLowerCase()
flagUrl="https://www.sofascore.com/static/images/flags/"+result+".png"
}

useEffect(() => {
    getPlayerdatabyId(id)
    getPlayermedia(id)
    getPlayertransfarhistory(id)
      }, [id]);   
  return (
    <div>
    <div className="py-9 padding-inline-2vw padding-inline-lg-10vw bg-dark">
        <div className="row justify-content-between ">
            <div className="col-lg-7">
                <div className="d-flex align-items-start gap-5 flex-wrap ">
                    <img src={"https://api.sofascore.app/api/v1/player/"+playerInfo.id+"/image"} alt="" 
                    className="border border-1 border-primary imageStyle" />
                    <img src={"https://api.sofascore.app/api/v1/team/"+playerteamInfo.id+"/image"} alt="" style={{width: '60px'}}/>
                    <div>
                        <h1 className=" MetaLinkExtraBold text-primary text-capitalize">{playerInfo.name}</h1>
                        <h4 className=" text-white text-capitalize">{playerteamInfo.name}</h4>
                        <h6 className=" text-white text-capitalize font-15px">contact until {contractUntil}</h6>
                    </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="row row-cols-2 row-cols-lg-3 g-5">
                    <div className=" text-start text-lg-center">
                        <h5 className=" font-15px text-white text-uppercase">Nationality</h5>
                        <div className=" d-flex align-items-center justify-content-start justify-content-lg-center gap-2">
                            <img src={flagUrl} alt=""
                             style={{width: '35px',height: '35px'}} className=" rounded-circle border border-primary"/>
                            <h5 className=" MetaLinkSemiBold text-primary m-0 font-21px">{playercountryInfo.name}</h5>
                        </div>
                    </div>
                    <div className=" text-start text-lg-center">
                        <h5 className=" font-15px text-white text-uppercase">AGE</h5>
                        <h5 className=" MetaLinkSemiBold text-primary m-0 font-22px">{Age +" Yrs"}</h5>
                    </div>
                    <div className=" text-start text-lg-center">
                        <h5 className=" font-15px text-white text-uppercase">height</h5>
                        <h5 className=" MetaLinkSemiBold text-primary m-0 font-22px">{playerInfo.height}</h5>
                    </div>
                    <div className=" text-start text-lg-center">
                        <h5 className=" font-15px text-white text-uppercase">PREFERRED FOOT</h5>
                        <h5 className=" MetaLinkSemiBold text-primary m-0 font-22px">{playerInfo.preferredFoot}</h5>
                    </div>
                    <div className=" text-start text-lg-center">
                        <h5 className=" font-15px text-white text-uppercase">position</h5>
                        <h5 className=" MetaLinkSemiBold text-primary m-0 font-22px">{playerInfo.position}</h5>
                    </div>
                    <div className=" text-start text-lg-center">
                        <h5 className=" font-15px text-white text-uppercase">Shift number</h5>
                        <h5 className=" MetaLinkSemiBold text-primary m-0 font-22px">{playerInfo.jerseyNumber}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- transfer history --> */}
    <div className="py-7 padding-inline-2vw padding-inline-lg-10vw">
        
        <div className="row g-4 mb-4">
            <div className="col-lg-6">
                {/* <img src={require('../images/chart2.png')} alt=""/> */}
                {/* <!-- Attribute overview--> */}
                {/* <div className=" mt-7 mt-lg-13">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <h5 className=" MetaLinkBold font-16px">Attribute overview</h5>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#222226" cursor="pointer">
                            <path fill="#222226" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 7v6h-2v-6h2zm0-4v2h-2V7h2z" cursor="pointer"></path>
                        </svg>
                    </div>
                    <img src={require('../images/chart1.png')} alt="" className=" width-65 mx-auto"/>
                    <div className="searchbox d-flex align-items-center gap-2 p-2 rounded-3 bg-body-secondary mt-5 divStyle" >
                        <img src={require('../images/searchuser.webp')} alt="" style={{width:'40px',height: '40px'}} className=" rounded-circle object-fit-cover"/>
                        <input type="text" className=" form-control border rounded-3 flex-1 text-black-50 inputStyle" placeholder="Search to to compare players..." 
                        />
                    </div>
                    <div className="d-flex align-items-center gap-2 mt-3 px-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#222226" className="sc-bYMpWt kzZppL">
                            <path fill="#222226" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 7v6h-2v-6h2zm0-4v2h-2V7h2z" minW="24"></path>
                        </svg>
                        <span className=" opacity-5 font-14px fw-500">Tap on attribute overview to display average values for this position
                        </span>
                    </div>
                </div> */}
                <div className="">
                <div className="text-center mb-3">
            <h5 className=" MetaLinkBold font-16px">Media</h5>
        </div>
                    <div className="  not-last-border-line bottom-line-spacing divMedia" >
                    {playermediainfo.map((data , index) => (
                        <Media key={index} data={data}/>
                     ))}
                 
                   </div>
                </div>
    
            </div>
            <div className="col-lg-6">
            <div className="text-center mb-3">
            <h5 className=" MetaLinkBold font-16px">Transfer History</h5>
        </div>
            <ul className=" overflow-auto not-last-border-line maxHeight" >
            {playertransferinfo.map((data , index) => (
                        <TansferList key={index} data={data}/>
                     ))}
             </ul>
             <div className=" mt-7 mt-lg-10">
             <div className="accordion accordionDivStyle" id="accordionExample">
             <SeasonList/> 
             </div>
             </div>
            </div>
    
        </div>
    </div>
    </div>
  );
};

export default player;