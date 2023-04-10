import React, { useContext,useState,useEffect } from 'react'
import './style/main.css';
import AllLeaguesList from'../Components/mainComponent/allLeaguesList';
import CountrylistCup from'../Components/mainComponent/countrylistCup';
import TopLeagues from'../Components/mainComponent/topLeagues';
import Rankings from'../Components/mainComponent/ranking';
import ItemList from '../Components/mainComponent/listitem';

import { ApiContext } from '../context/ApiContext'

const Main= () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [todaydate, onDateChange] = useState(new Date());
  
    const {categorieslist,tournamentdata,getTournament,getTopLegue,getcategories} = useContext(ApiContext);
    useEffect(() => {
        getcategories()
        getTournament(selectedDate)
        getTopLegue()
          }, []);  
     const [showResults, setShowResults] = React.useState(false)
          const onClick = (e) => {
              setShowResults(e.target.checked)
          }    

        //   function onDateChange(){
        //     getTournament(todaydate)
        //   }
        
          function handleInputChange(event) {
           setSelectedDate(event.target.value)
            getTournament(event.target.value)
          }        

  return (
    
    <>
    <div className="py-5 padding-inline-2vw padding-inline-lg-10vw">
    <div className="row justify-content-between g-0 g-lg-4">
        <div className="col-lg-3 d-none d-lg-block">
            <div>
                <h6 className=" MetaLinkBold mb-3">All Leagues</h6>
                {/* <form action="" className=" position-relative">
                    <input type="text" className=" form-control bg-secondary-subtle rounded-3 ps-7" placeholder="Filter"/>
                    <i className="bi bi-search position-absolute top-50 translate-middle-y" style={{left: '20px'}}></i>
                </form> */}
                {categorieslist.map((data , index) => (
                    <> 
                     <AllLeaguesList key={index} data={data}/>
                   </>
                ))}
                
            </div>
        </div>
        <div className="col-lg-5">
            <div>
            <div className="d-flex align-items-center justify-content-between mb-4">
                    {/* <!-- <h3>All</h3> --> */}
                    {/* <div className="d-flex align-items-center ms-auto gap-3">
                        <h4 className=" font-14px m-0">Show odds</h4>
                        <div className="switchButton">
                            <input type="checkbox"  id="switch" hidden  onClick={onClick}/>
                            <label for="switch" className=" m-0">Toggle</label>
                        </div>
                    </div> */}
        </div>
            {tournamentdata.map((data , index) => (
                <CountrylistCup  key={index} data={data} showResults={showResults}  />   
                ))}
            </div>

        </div>
        <div className="col-lg-3 d-none d-lg-block">
        <div className="mb-4">
        
        {/* <input type="text" class="selectDate border-0" /> */}
                <input type="date" value={selectedDate}  onChange={handleInputChange} className="selectDate border-0"/>
            </div>
          
            <TopLeagues  key={Math.random()}/>
            <Rankings  key={Math.random()}/>
        </div>
    </div>
</div>
</>
  );
};

export default Main;