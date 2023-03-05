import React from "react";
import './headerFooter.css';
import PlayerList from'./playerList';
// import UsersContext from "../store/users-context";
const Hearder = () => {
  // const usersCtx = useContext(UsersContext);
  return (
        <div>
        <div className="topbar  bg-primary py-2 padding-inline-4vw">
            <div className=" d-flex align-items-center justify-content-end">
                <ul className="d-flex align-items-center gap-3">
                    <li className=" font-14px fw-600">Follow us</li>
                    <li><a href="#" className="text-dark"><i className="bi bi-tiktok"></i></a></li>
                    <li><a href="#" className=" text-dark"><i className="bi bi-instagram"></i></a></li>
                </ul>
            </div>
        </div>
        <nav className="navStyle navbar navbar-expand-lg padding-inline-4vw py-3 py-md-6 border-bottom border-primary bg-dark">
            <div className="container-fluid p-0">
                <a href="/" className=" navbar-brand d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-2 me-lg-9">
                    <img className="imgStyle" src="assets/assets/images/logo.jpg" alt=""/>
                </a>
                <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-justify-right text-white font-30px"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <PlayerList/>
                    <form className="col-12 col-md-6 col-lg-4" role="search">
                        <div className=" position-relative">
                            <input type="search" className=" transInput form-control border-top-0 border-bottom-0 border-start border-end border-primary rounded-0 font-13px mx-auto ps-7"
                              placeholder="Search Your National Team"/>
                            <div style={{Width:'30px',Left: '20px'}} alt="" className=" position-absolute top-50 translate-middle-y">
                                <svg  className="svgStyle" xmlnssvg="http://www.w3.org/2000/svg" 
                                 xmlnsXlink="http://www.w3.org/1999/xlink"
                                 version="1.1" id="Layer_1" x="0px" y="0px" 
                                 viewBox="0 0 1000 1000"  
                                 xmlSpace="preserve"
                                 >
                                    <g id="wxWy9G.tif">
                                        <g>
                                            <path d="M707.8,436.8c0,0.6-0.1,1.1-0.2,2H579.9c0-4.2,0.1-8.4,0-12.5c-0.2-11.5-2.3-22.7-5.3-33.8c-3.2-11.6-7.5-22.8-13.2-33.4    c-5-9.5-11-18.4-17.9-26.8c-8.7-10.6-18.7-19.7-30.2-27.1c-16.5-10.8-34.6-17.9-54.1-21.3c-9.2-1.6-18.4-2.4-27.7-2.6    c-15.1-0.4-29.9,1-44.6,4.6c-18.6,4.6-35.4,12.7-50.4,24.6c-13.8,11-24.7,24.3-33.4,39.6c-9.4,16.5-15.5,34.2-19,52.8    c-2.2,11.6-3.1,23.4-2.6,35.2c0.7,14.9,3,29.6,7.9,43.8c5.7,16.4,14,31.3,25.3,44.6c11.2,13.2,24.4,23.7,39.3,32.2    c16.7,9.5,34.6,15.5,53.3,18.9c7.7,1.4,15.6,2.1,23.4,2.6c7.9,0.5,15.8,0.4,23.7,0.6c1,0,2,0,3.3,0v113.5c0,3.4,0,3.5-3.4,3.4    c-8.8-0.1-17.7,0.1-26.4-0.5c-10.6-0.6-21.3-1.7-31.9-2.9c-22-2.4-43.5-7.4-64.4-14.6c-10.6-3.7-20.9-8.2-31.3-12.7    c-13.9-6-26.8-13.7-39.1-22.6c-8.2-5.9-16.1-12.2-23.7-18.8c-6.3-5.5-12.4-11.4-18.1-17.5c-10.8-11.7-20.2-24.5-28.3-38.2    c-9.9-16.6-17.7-34.1-23.5-52.5c-4.2-13.4-7.6-27.1-9.2-41.1c-1.3-11.4-2.5-22.8-2.9-34.2c-0.4-11.4-0.3-23,0.5-34.4    c1.7-22.1,6-43.8,13.2-64.8c6.1-17.8,14.1-34.8,24.2-50.8c6.8-10.6,14.1-20.8,22.7-30.1c6.4-6.9,12.7-13.8,19.6-20.1    c12.8-11.6,26.7-21.6,41.7-30.3c18.2-10.6,37.4-18.8,57.4-25.1c14.5-4.5,29.3-8.2,44.4-10c11.9-1.4,23.9-2.6,35.8-3.4    c8.7-0.6,17.5-0.8,26.2-0.4c11.2,0.5,22.5,1.6,33.7,2.8c18.8,2,37.1,6.3,55.1,12c15.8,5,31.1,11.4,45.8,19.1    c11.9,6.3,23.4,13.4,34.1,21.7c7.5,5.8,14.6,12.2,21.7,18.6c13.5,12.1,24.6,26.1,34.6,41.1c11.2,16.8,19.8,34.8,26.4,53.8    c5,14.5,8.7,29.3,11.1,44.4c1.3,8.3,2,16.8,2.6,25.2C707.4,420.2,707.5,428.5,707.8,436.8z" />
                                            <path d="M845.6,664.4c-5,23.6-9.9,47.2-14.9,70.9c-4,19.2-8.2,38.3-12.3,57.5c-2.3,10.7-4.4,21.4-6.7,32c-0.1,0.6-0.4,1.2-0.7,2.4    C703,744.8,595.3,662.7,487.4,580.5c31-37.3,61.9-74.4,92.9-111.6c4.5,3.2,8.9,6.4,13.3,9.6c10.5,7.6,21,15.3,31.4,22.9    c12.3,9,24.7,18,37,27c10.6,7.7,21.2,15.3,31.7,23c17.6,12.9,35.2,25.8,52.9,38.6c13.6,9.9,27.2,19.6,40.8,29.5    c14.6,10.6,29.1,21.3,43.6,31.9c4.3,3.2,8.7,6.4,13.1,9.4C845.6,661.8,845.9,662.8,845.6,664.4z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
    
    
                        </div>
                    </form>
                </div>
            </div>
        </nav>
        </div>
  );
};

export default Hearder;