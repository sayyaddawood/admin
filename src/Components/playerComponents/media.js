import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const media = ({data}) => {
  // const usersCtx = useContext(UsersContext);
  return (
   
        <div className="d-flex gap-3 flex-wrap flex-md-nowrap position-relative">
            <div className=" position-relative flex-shrink-0">
                <img src={data.thumbnailUrl} alt="" style={{width: '160px',height: '90px'}} className=" object-fit-cover"/>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className=" position-absolute top-50 start-50 translate-middle">
                    <path fill="white" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM7.5 5.402c.094 0 .186.026.265.076l6.557 4.098c.234.146.305.455.159.689-.04.064-.095.119-.16.159l-6.556 4.098c-.234.146-.543.075-.689-.16-.05-.079-.076-.17-.076-.264V5.902c0-.276.224-.5.5-.5z" transform="translate(2.000000, 2.000000)"></path>
                </svg>
            </div>
            <div className="d-flex flex-column width-100 width-md-70">
                <h5 className=" font-15px MetaLinkBold text-capitalize mb-1 headingStyle" >{data.title}</h5>
                <span className=" text-truncate opacity-5 font-12px width-90">{data.subtitle}</span>
                <span className="opacity-5 font-12px mt-auto"></span>
            </div>
            <a href={data.sourceUrl} target="_blank" className=" stretched-link"></a>
        </div>

  );
};

export default media;