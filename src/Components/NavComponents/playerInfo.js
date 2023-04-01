
import React, { useContext,useEffect } from 'react'
import { Link } from "react-router-dom";
// import UsersContext from "../store/users-context";
const PlayerInfo = ({Path,id,name,team,pic,flag,Tid,Sid,Mid,noborder}) => {

   let path= `${Path}/${id}`
   let flagUrl="https://www.sofascore.com/static/images/flags/au.png"
   let image ="https://api.sofascore.app/api/v1/player/"+id+"/image"
   let bstyle = "border border-1 border-primary  imgStyle2"
   if(pic!=undefined)
   {
    image ="https://api.sofascore.app/api/v1/unique-tournament/"+id+"/image"
   }
   if(Tid!=undefined)
   {
   
    if(id==undefined){
      image ="https://api.sofascore.app/api/v1/team/"+Tid+"/image"
      path=`${Path}/${Tid}`
    }
    flagUrl="https://api.sofascore.app/api/v1/team/"+Tid+"/image"
   }
   if(noborder != undefined){
    bstyle = "imgStyle2"
   }
   if(Mid!=undefined)
   {
    path=`${Path}/${Mid}`
    image ="https://api.sofascore.app/api/v1/manager/"+Mid+"/image"
    flagUrl="https://api.sofascore.app/api/v1/team/"+Tid+"/image"
   }
  if(Sid!=undefined)
  {
    path=`${Path}/${id}/${Sid}`
    flagUrl="https://api.sofascore.app/api/v1/team/"+Tid+"/image"
  }
 
  return (
<div>
    <Link to={path}  className=" text-primary-hover" >
    {/* <a href={Path}   > */}
        <div className="d-flex align-items-center gap-3">
            <img src={image} alt="" 
            className={bstyle} 
            ></img>
            <div>
                <h4 className=" text-uppercase text-white hover-this font-14px fw-500 mb-1 ">{name}</h4>
                <div className="d-flex align-items-center gap-2">
                    <img src={flagUrl} alt="" style={{width: '20px'}}/>
                    <h5 className=" font-12px text-white text-capitalize m-0 fw-300">{team}</h5>
                </div>
            </div>
        </div>
    {/* </a> */}
    </Link>
</div>
  );
};

export default PlayerInfo;