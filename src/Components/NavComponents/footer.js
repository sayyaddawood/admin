import React from "react";
import './headerFooter.css';
// import UsersContext from "../store/users-context";
const footer = () => {
  // const usersCtx = useContext(UsersContext);
  return (
    <div>
 <footer className="bg-dark">
  <div className="pt-6 pb-5 pb-lg-10 padding-inline-2vw padding-inline-lg-10vw ">
    <div className="text-center">
      <img src="../assets/assets/images/logo.jpg" alt="" className=" mx-auto mb-8 footerImg" />
    </div>
    <div className="row justify-content-between gap-4">
      <div className="col-lg-4">
        <h3 className=" MetaLinkBold text-white">Players</h3>
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-3">
          <ul>
            <li><a href="#" className=" text-white link-primary font-15px">Paul Pagba</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Kevin De Bruyne</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Harry Maguire</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Mason Mount</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Cristiano Ronaldo</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Erling Haaland</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Mohamed Salah</a></li>
          </ul>
          <ul>
            <li><a href="#" className=" text-white link-primary font-15px">Sadio Mané</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Virgil van Dijk</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Robert Lewandowski</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Lionel Messi</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Kylian Mbappé</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Neymar</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Vinicius Junior</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3">
        <h3 className=" MetaLinkBold text-white">Teams</h3>
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-3">
          <ul>
            <li><a href="#" className=" text-white link-primary font-15px">Liverpool</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Man City</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Man Utd</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Chelsea</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Arsenal</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Dortmund</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Atletico</a></li>

          </ul>
          <ul>
            <li><a href="#" className=" text-white link-primary font-15px">Inter</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Real world</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Barcelona</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Psg</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Bayern</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Juventus</a></li>
            <li><a href="#" className=" text-white link-primary font-15px">Milan</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2">
        <h3 className=" MetaLinkBold text-white text-center text-lg-start">Follows Us</h3>
        <div className="d-flex align-items-center justify-content-center justify-content-lg-between flex-wrap gap-2 mt-3">
          <ul className=" d-flex align-items-center gap-4">
            <li><a href="#" className=" link-primary font-25px"><i className="bi bi-tiktok"></i></a></li>
            <li><a href="#" className=" link-primary font-25px"><i className="bi bi-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</footer>
<div className="copyright padding-inline-2vw padding-inline-lg-10vw py-3" style={{background:'#202020'}}>
  <p className=" text-white m-0 font-13px text-center text-lg-start">2023 LiveStats - All Rights Reserved.</p>
</div>
    </div>
  );
};

export default footer;