import { ListItem } from '@mui/material';
import React, { useContext, useState, useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
import ItemList from './listitem';
// import UsersContext from "../store/users-context";

const AllLeaguesList = ({ data, index }) => {
  const { getUniquetournament, Uniquetournamentlist, isLoading } = useContext(ApiContext);
  let flagUrl = ""
  if (data.alpha2 != undefined && data.alpha2 != null) {
    let flagName = data.alpha2
    let result = flagName.toLowerCase()
    flagUrl = "https://www.sofascore.com/static/images/flags/" + result + ".png"
  }

  const getlist = (id) => {
    var elems = document.querySelectorAll(".accordion-collapse");
    [].forEach.call(elems, function (el) {
      el.classList.remove("show");
    });

    elems = document.querySelectorAll(".accordion-button");
    [].forEach.call(elems, function (el) {
      el.classList.add("collapsed");
    });

    getUniquetournament(JSON.stringify(id))
  }

  return (
    <div className="accordion mt-3 accordionExample" id={"accordionExample" + data.id} >
      <div className="accordion-item overflow-hidden rounded-3 border-0">
        <h2 className="accordion-header  border-0" id={"heading1." + data.id}>
          <button value={data.id} className=" buttonstyle accordion-button gap-4 px-2 py-1 rounded-0 shadow-none collapsed " type="button" data-bs-toggle="collapse" aria-haspopup="true"
            data-bs-target={"#collapse" + data.id} aria-expanded="false" aria-controls={"#collapse" + data.id}
            onClick={() => getlist(data.id)}>
            <img src={flagUrl} alt="" style={{ width: '24px' }} />
            {data.name}
            <span className="font-12px text-secondary text-opacity-75 flex-1 text-end">
              <span className=" text-danger">
                {/* <?php echo $i ?> */}
                {/* 1 */}
              </span>
              {/* /2 */}
              {/* <?php echo $i ?> */}
            </span>
          </button>
        </h2>

        <div id={"collapse" + data.id} className="accordion-collapse collapse" aria-labelledby={"heading1." + data.id}
          data-bs-parent={"#accordionExample" + data.id} >
          <div className="accordion-body p-0">
            <ul className="py-2">
              {isLoading ? <center><span>Loading.....</span></center> : <>
                {Uniquetournamentlist.map((Item, index) => (
                  <ItemList key={index} data={Item} />
                ))}
              </>} </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllLeaguesList;