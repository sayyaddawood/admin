import React from "react";
import { Link } from "react-router-dom";
// import UsersContext from "../store/users-context";
const PlayerInfo = ({Path,id}) => {
  // const usersCtx = useContext(UsersContext);
  return (
<div>
    <Link to={`${Path}/${id}`}  className=" text-primary-hover" >
    {/* <a href={Path}   > */}
        <div className="d-flex align-items-center gap-3">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" 
            className="border border-1 border-primary imgStyle2" 
            ></img>
            <div>
                <h4 className=" text-uppercase text-white hover-this font-14px fw-500 mb-1 ">lionel messi</h4>
                <div className="d-flex align-items-center gap-2">
                    <img src="https://www.sofascore.com/static/images/flags/au.png" alt="" style={{width: '20px'}}/>
                    <h5 className=" font-12px text-white text-capitalize m-0 fw-300">paris saint-germain</h5>
                </div>
            </div>
        </div>
    {/* </a> */}
    </Link>
</div>
  );
};

export default PlayerInfo;