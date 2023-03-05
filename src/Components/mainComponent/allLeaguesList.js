import { ListItem } from '@mui/material';
import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
import ItemList from './listitem';
// import UsersContext from "../store/users-context";
 
const AllLeaguesList= ({data,index}) => {
const {getUniquetournament,Uniquetournamentlist,isLoading} = useContext(ApiContext);   
let flagUrl=""
if(data.alpha2!=undefined&& data.alpha2!= null)
{
let flagName =data.alpha2  
let  result = flagName.toLowerCase()
flagUrl="https://www.sofascore.com/static/images/flags/"+result+".png"
}
const getlist = (id) => {
    getUniquetournament(JSON.stringify(id))
      }
      
  return (
    <div className="accordion mt-3 accordionExample" id="accordionExample" >
                        <div className="accordion-item overflow-hidden rounded-3 border-0">
                            <h2 className="accordion-header  border-0" id={"heading1."+data.id}>
                                <button value={data.id} className=" buttonstyle accordion-button gap-4 px-2 py-1 rounded-0 shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#"+data.id} aria-expanded="false" aria-controls="collapseOne"
                                 onClick={() => getlist(data.id)}>
                                    <img src={flagUrl} alt="" style={{width: '24px'}}/> 
                                    {data.name}
                                    <span className="font-12px text-secondary text-opacity-75 flex-1 text-end">
                                        
                                        <span className=" text-danger">
                                        {/* <?php echo $i ?> */}
                                        1
                                        </span>
                                        /2
                                        {/* <?php echo $i ?> */}
                                        </span>
                                </button>
                            </h2>
                  <div id={data.id} className="accordion-collapse collapse" aria-labelledby={"heading1."+data.id} data-bs-parent="#accordionExample">
                   <div className="accordion-body p-0">
                    <ul className="py-2">
                    {isLoading? <center><span>Loading.....</span></center>:<>
                    {Uniquetournamentlist.map((Item , index) => (
                      <ItemList key={index} data={Item}/>   
                     ))}
                    </>} </ul>
                    </div>
                     </div>   
                        </div>
                </div>
  );
};

export default AllLeaguesList;