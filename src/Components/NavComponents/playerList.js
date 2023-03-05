import React from "react";
import PlayerInfo from "./playerInfo";
// import UsersContext from "../store/users-context";
const PlayerList = () => {

    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2 gap-lg-6">
                    <li className="nav-item dropdown position-static ">
                    <a href="#" className="nav-link px-0 text-white link-primary font-15px text-uppercase dropdown-toggle fw-400 caret-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">players <i className="bi bi-caret-down-fill font-12px"></i></a>
                    <div className=" position-relative">
                        <div className="nav-caret position-absolute start-50 translate-middle-x" style={{bottom:'-46px'}}></div>
                            </div>
                            <div className=" divStyle dropdown-menu dropdown-menu-dark border-0 rounded-0 mt-2" >
                                
                                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 px-0 py-0 px-lg-4 py-lg-4 g-3 m-0">
                                <PlayerInfo  Path ="/player" id="12994"/>
                                <PlayerInfo  Path ="/player" id="12994"/>
                                <PlayerInfo  Path ="/player" id="12994"/>
                                <PlayerInfo  Path ="/player" id="12994"/>
                                
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
                                <PlayerInfo  Path ="/manager" id="52829"/>
                                <PlayerInfo  Path ="/manager" id="52829"/>
                                <PlayerInfo  Path ="/manager" id="52829"/>
                                <PlayerInfo  Path ="/manager" id="52829"/>
                               
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
                                <PlayerInfo />
                                <PlayerInfo />
                                <PlayerInfo />
                                <PlayerInfo />
                                <PlayerInfo />
                               
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
                                <PlayerInfo />
                                <PlayerInfo />
                                <PlayerInfo />
                                <PlayerInfo />
                                <PlayerInfo />
                                </div>
                            </div>
                        </li>
                    </ul>
    
  );
};

export default PlayerList;