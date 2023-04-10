import React, { useContext,useState,useEffect } from 'react'
import PlayerInfo from "./playerInfo";

// import UsersContext from "../store/users-context";
const PlayerList = () => {
    const [playersdata,setplayersdata]=useState([])
    const [managersdata,setmanagersdata]=useState([])
    const [teamsdata,setteamsdata]=useState([])
    const [competitionsdata,setcompetitionsdata]=useState([])
    async function fetchData() {
        try {
          const response = await fetch('https://empecto.com/demo/livestats/api.php?tab=get_menu');
          const data = await response.json();
          setplayersdata(data.players)
          setmanagersdata(data.managers)
          setteamsdata(data.teams)
          setcompetitionsdata(data.competitions)
        } catch (error) {
          console.error(error);
        }
      }
     
      
      
      
      
   useEffect(() => {
    fetchData()
       }, []);
    

    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2 gap-lg-6">
                    <li className="nav-item dropdown position-static ">
                    <a href="#" className="nav-link px-0 text-white link-primary font-15px text-uppercase dropdown-toggle fw-400 caret-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">players <i className="bi bi-caret-down-fill font-12px"></i></a>
                    <div className=" position-relative">
                        <div className="nav-caret position-absolute start-50 translate-middle-x" style={{bottom:'-46px'}}></div>
                            </div>
                            <div className=" divStyle dropdown-menu dropdown-menu-dark border-0 rounded-0 mt-2" >
                                
                                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 px-0 py-0 px-lg-4 py-lg-4 g-3 m-0">
                                {
                                  playersdata.map((data , index) => (
                                        <PlayerInfo  key={index} Path ="/player"  id={data.id} Tid={data.team_id} name={data.name} team={data.team_name} data={data} />
                                        ))     
                                }

                            </div>
                        </div>
                    </li>
    
                        <li className="nav-item dropdown position-static"><a href="#" className="nav-link px-0 text-white link-primary font-15px text-uppercase dropdown-toggle fw-400 caret-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">Managers 
                        <i className="bi bi-caret-down-fill font-12px"></i></a>
                            <div className=" position-relative">
                                <div className="nav-caret position-absolute start-50 translate-middle-x" style={{bottom:'-46px'}}></div>
                            </div>
                            <div className=" divStyle dropdown-menu dropdown-menu-dark border-0 rounded-0 mt-2" >
                                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 px-0 py-0 px-lg-4 py-lg-4 g-3 m-0">
                               
                                {
                                 managersdata.map((data , index) => (
                                        <PlayerInfo  key={index} Path ="/manager" Mid={data.id} Tid={data.team_id} name={data.name} team={data.team_name} data={data} />
                                        ))     
                                }
                               
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown position-static">
                         <a href="#" className="nav-link px-0 text-white link-primary font-15px text-uppercase dropdown-toggle fw-400 caret-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">Teams 
                            <i className="bi bi-caret-down-fill font-12px"></i></a>
                            <div className=" position-relative">
                                <div className="nav-caret position-absolute start-50 translate-middle-x" style={{bottom: '-46px'}}></div>
                            </div>
                            <div className="dropdown-menu dropdown-menu-dark border-0 rounded-0 mt-2 divStyle" >
                                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 px-0 py-0 px-lg-4 py-lg-4 g-3 m-0">  
                                {
                                 teamsdata.map((data , index) => (
                                        <PlayerInfo  key={index} Path ="/team" flag={data.parent_flag} Tid={data.id} name={data.name} team={data.parent_name} data={data} noborder='1' />
                                        ))     
                                 }
                               
                               
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown position-static">
                            <a href="#" className="nav-link px-0 text-white link-primary font-15px text-uppercase dropdown-toggle fw-400 caret-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">competitions 
                            <i className="bi bi-caret-down-fill font-12px"></i></a>
                            <div className=" position-relative">
                                <div className="nav-caret position-absolute start-50 translate-middle-x" style={{bottom: '-46px'}}></div>
                            </div>
                            <div className="dropdown-menu dropdown-menu-dark border-0 rounded-0 mt-2 divStyle" >
                                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 px-0 py-0 px-lg-4 py-lg-4 g-3 m-0">
                                {
                                 competitionsdata.map((data , index) => (
                                        <PlayerInfo key={index} Path ="/competition"  flag={data.parent_flag}  pic={data.image} id={data.id} name={data.name} team={data.parent_name} data={data} noborder='1' iscomp='1' />
                                        ))     
                                 }
                                </div>
                            </div>
                        </li>
                    </ul>
    
  );
};

export default PlayerList;