import React, {createContext,useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {BASE_URL,header,findDuplicates } from '../UserComponents/Common';
export const ApiContext = createContext();
export const ApiProvider = ({children}) => {

  const [playerInfo, setplayerInfo] = useState([]);
  const [playerteamInfo, setplayerteamInfo] = useState({});
  const [playercountryInfo, setcountryInfo] = useState({});
  const [playermediainfo, setplayermediainfo] = useState([]);
  const [playertransferinfo, setplayertransferinfo] = useState([]);



  const [managerInfo, setmanagerInfo] = useState({});
  const [managerteamInfo, setmanagerteamInfo] = useState({});
  const [managercountryInfo, setmanagercountryInfo] = useState({});
  const [managerperformance, setmanagerperformance] = useState({});
  const [managercareer, setmanagercareer] = useState([]);

  const [categorieslist, setcategories]=useState([])
  const [Uniquetournamentlist, setUniquetournamentlist]=useState([])

  const [scheduledate,setScheduledate]=useState([])
  const [tournamentdata,settournamentdata]=useState([])

  const [schedulecategory,setschedulecategory]=useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setmessage] = useState('');

 

const getPlayerdatabyId= (id) => {
  setIsLoading(true)
const options = {
  method: 'GET',
  url: BASE_URL+'players/data',
  params: {player_id: id},
  headers: header()
}
 axios.request(options).then(function (response) {
  if(response.status==200)
  {
    setIsLoading(false)
    setplayerInfo(response.data.data)
    setplayerteamInfo(response.data.data.team)
    setcountryInfo(response.data.data.country)
   }
}).catch(function (error) {
	console.error(error);
});
         
  };

  const getPlayermedia= (id) => {
    setIsLoading(true)
  const options = {
    method: 'GET',
    url: BASE_URL+'players/media',
    params: {player_id: id},
    headers: header()
  }
   axios.request(options).then(function (response) {
    if(response.status==200)
    {
      setplayermediainfo(response.data.data)
     }
  }).catch(function (error) {
    console.error(error);
  });
           
    };

    const getPlayertransfarhistory= (id) => {
      setIsLoading(true)
    const options = {
      method: 'GET',
      url: BASE_URL+'players/transfer-history',
      params: {player_id: id},
      headers: header()
    }
     axios.request(options).then(function (response) {
      if(response.status==200)
      {
        setplayertransferinfo(response.data.data)
       }
    }).catch(function (error) {
      console.error(error);
    });
             
      };
  



  const  getManagerdatabyId= (id) => {
    const options = {
      method: 'GET',
      url: BASE_URL+'managers/data',
      params: {manager_id: id},
      headers: header()
    }
    axios.request(options).then(function (response) {
      if(response.status==200)
      {
        setmanagerInfo(response.data.data)
        setmanagerteamInfo(response.data.data.team)
        setmanagercountryInfo(response.data.data.country)
        setmanagerperformance(response.data.data.performance)
      }
    }).catch(function (error) {
      console.error(error);
    });
    
  }


  const  getManagercareer= (id) => {
    const options = {
      method: 'GET',
      url: BASE_URL+'managers/career-history',
      params: {manager_id: id},
      headers: header()
    }
    axios.request(options).then(function (response) {
      if(response.status==200)
      {
        setmanagercareer(response.data.data)
      }
    }).catch(function (error) {
      console.error(error);
    });
    
  }


  const  getcategories= () => {
    setIsLoading(true)
    const options = {
      method: 'GET',
      url: BASE_URL+'categories',
      params: {sport_id: '1'},
      headers: header()
    }
    axios.request(options).then(function (response) {
      if(response.status==200)
      {
        // console.log(response);
        setIsLoading(false)
        setcategories(response.data.data)
      }
    }).catch(function (error) {
      console.error(error);
    });
    
  }

  const getUniquetournament= (id) => {
    setIsLoading(true)
    const options = {
      method: 'GET',
      url: BASE_URL+'unique-tournaments',
      params: {category_id: id},
      headers: header()
    };
    // console.log(options)
    axios.request(options).then(function (response) {
      if(response.status==200)
      {
        setIsLoading(false)
        setUniquetournamentlist(response.data.data)
      }
    }).catch(function (error) {
      console.error(error);
    });
  }



 const getSchedulecategory = (id) => {
  setIsLoading(true)
    let currentDate = new Date().toJSON().slice(0, 10);
    const options = {
      method: 'GET',
      url: BASE_URL+'events/schedule/category',
      params: {date: currentDate, category_id: id},
      headers: header()
    }
    axios.request(options).then(function (response) {
      setIsLoading(false)
      if(response.status==200)
      {   
       setschedulecategory(response.data.data)   
      }

    }).catch(function (error) {
      console.error(error);
    });
    
  }

  const getTopLegue = () => { 
    const options = {
      method: 'GET',
      url: BASE_URL+'unique-tournaments-top',
      params: {locale: 'DE'},
      headers: header()
    }
    var Topleagues=[]
    axios.request(options).then(function (response) {
      setIsLoading(false)
      if(response.status==200)
      {   
        for(let i in response.data.data.topUniqueTournamentIds)
        {
          for(let j in  response.data.data.uniqueTournaments){
          if(response.data.data.topUniqueTournamentIds[i]===response.data.data.uniqueTournaments[j].id)
          {
            Topleagues.push(response.data.data.uniqueTournaments[i])
          }
         }
        }
        // console.log(Topleagues)
      }

    }).catch(function (error) {
      console.error(error);
    });
   }

  const getTournament = () => {
    let currentDate = new Date().toJSON().slice(0, 10);
    const options = {
      method: 'GET',
      url: BASE_URL+'events/schedule/date',
      params: {date: currentDate , sport_id: '1'},
      headers: header()
    }

    let  tourName = [];

    axios.request(options).then(function (response) {
      if(response.status==200)
      {
          for (let i = 0; i < response.data.data.length ; i++) {
            tourName.push(response.data.data[i].tournament)
          }
          if(tourName!=null && tourName!=[])
          {
                 let tourdata = [];  
                 let uniqueObject = {};
              
                 for (let i in tourName) {
                    let objTitle = tourName[i]['name'];
                     uniqueObject[objTitle] = tourName[i];
                 }
                 
                 for ( let i in uniqueObject) {
                  var matchdata=[]
                  for(let j in response.data.data) {
                    if(response.data.data[j].tournament.name == uniqueObject[i].name && 
                      response.data.data[j].tournament.category.id==uniqueObject[i].category.id)
                       { matchdata.push(response.data.data[j])}
                    }
                  tourdata.push({tourdata:uniqueObject[i],matchdata})
                 }
                 settournamentdata(tourdata)
               }
  
      }
    }).catch(function (error) {
      console.error(error);
    });
    
  }




  const MemberVerification = () => {
      alert("hello ssssssss");
  };


  return (
    <ApiContext.Provider
      value={{
        getPlayerdatabyId,
        MemberVerification,
        getcategories,
        getManagerdatabyId,
        getUniquetournament,
        getSchedulecategory, 
        getTournament,
        getPlayermedia,
        getTopLegue,
        getPlayertransfarhistory,
        getManagercareer,

        playertransferinfo,
        managercareer,
        tournamentdata,
        playermediainfo,
        Uniquetournamentlist,
        scheduledate,
        schedulecategory,
        playerInfo,
        playercountryInfo,
        playerteamInfo,
        categorieslist,
        managerInfo,
        managerteamInfo,
        managercountryInfo,
        managerperformance,
        isLoading,
        isDisabled
      }}>
      {children}
    </ApiContext.Provider>
  );
};