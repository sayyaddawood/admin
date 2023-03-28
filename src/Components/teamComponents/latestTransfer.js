
import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const latesttransfer= ({data}) => {

  return (
    <div className="row">
    <div className="col-6">
        <h5 className="font-14px text-success MetaLinkBold">Arrivals 9 <i className="bi bi-info-circle font-14px"></i></h5>
        <ul>
            <li className=" font-14px">Aurélien Tehouaméni</li>
            <li className=" font-14px">Antonie Rudiger</li>
            <li className=" font-14px">Antonie Blanco</li>
        </ul>
    </div>
    <div className="col-6">
        <h5 className="font-14px text-danger MetaLinkBold">Departures <i className="bi bi-info-circle font-14px"></i></h5>
        <ul>
            <li className=" font-14px">Aurélien Tehouaméni</li>
            <li className=" font-14px">Antonie Rudiger</li>
            <li className=" font-14px">Antonie Blanco</li>
        </ul>
    </div>
    </div>
  );
};

export default latesttransfer;
