import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
import Matchdatalist from './matchdataList';
// import UsersContext from "../store/users-context";
const countrylistcup= ({data,showResults}) => {    
 const {getSchedulecategory,schedulecategory} = useContext(ApiContext);

 let flagUrl=""
if(data.tourdata.category.alpha2!=undefined&& data.tourdata.category.alpha2!= null)
{
let flagName =data.tourdata.category.alpha2  
let  result = flagName.toLowerCase()
flagUrl="https://www.sofascore.com/static/images/flags/"+result+".png"
}

 return (
 
<div className=" border-bottom mb-3 pb-1">
    <div className="d-flex align-items-center gap-4 mb-2">
        <img src={flagUrl} alt="" className=" rounded-circle" style={{width: '24px'}}/>
        <div>
            <a href="#" className=" font-12px opacity-5 text-dark d-block link-info lh-1">{data.tourdata.category.flag}</a>
            <a href="#" className=" font-12px text-dark d-block link-info MetaLinkExtraBold">{data.tourdata.name}</a>
        </div>
        <span className="MetaLinkSemiBold font-12px ms-auto text-success">Sofascore ratings</span>
    </div>
    {data.matchdata.map((data2 , index) => (
       <Matchdatalist key={index} data={data2} showResults={showResults}/>
                 ))} 
            
</div>
  );
};

export default countrylistcup;