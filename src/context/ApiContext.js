import React, {createContext,useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {BASE_URL,BASE_URL2,header,findDuplicates } from '../UserComponents/Common';
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


  const [leaguestandingData,setleaguestandingData]=useState([])
  const [leaguestandingTourInfo,setleaguestandingTourInfo]=useState([])
  const [leagueCategoryInfo,setleagueCategoryInfo]=useState([])
  const [leagueMatchesdata,setleagueMatchesdata]=useState([])
  const [teamStatisticsData,setteamStatisticsData]=useState([])
  const [playerStatisticsData,setplayerStatisticsData]=useState([])
  const [seasonsData,setseasonsData]=useState([])
  const [TitleData,setTitleData]=useState([])
  const [SeasonList,setSeasonList]=useState([])
  const [Eventdata,setEventdata]=useState([])



  const [teamSeasonStanding,setteamSeasonStanding]=useState([])
  const [teamInfodata,setteamInfodata]=useState([])
  const [teamCountry,setteamCountry]=useState([])
  const [teamManagerInfo,setteamManagerInfo]=useState([])
  const [teamVenueData,setteamVenueData]=useState([])
  const [teamPlayer,setteamPlayer]=useState([])
  const [Players,setPlayers]=useState([])
  const [teamtournamentdata,setteamtournamentdata]=useState([])
  const [teamEventData,setteamEventData]=useState([])

   
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

  const getTournament = (currentDate) => {
    if(currentDate==undefined || currentDate=="")
    {
     currentDate = new Date().toJSON().slice(0, 10);
     }
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


  const getleaguetandingdata = (id,type,sid) => {
  
    const options = {
      method: 'GET',
      url: BASE_URL+'seasons/standings',
      params: {standing_type: type , seasons_id: sid, unique_tournament_id: id},
      headers: header()
    }

    axios.request(options).then(function (response) {
      if(response.status==200)
      {
       setleaguestandingTourInfo(response.data.data[0].tournament.uniqueTournament)
       setleagueCategoryInfo(response.data.data[0].tournament.category)
       setleaguestandingData(response.data.data[0].rows)
      }
    }).catch(function (error) {
      console.error(error);
    });  

};

const getMatchdataBytourandSeasonIds = (id,sid) => {
     const options = {
      method: 'GET',
      url: BASE_URL+'seasons/events',
      params: {
        course_events: 'last',page: '0',seasons_id: sid,unique_tournament_id: id
      },
      headers: header()
    }

    axios.request(options).then(function (response) {
      if(response.status==200)
      {
        setleagueMatchesdata(response.data.data.events)
      }
    }).catch(function (error) {
      console.error(error);
    });
};


// const getPlayerStatistics = (id,Sid) => {
//   const options = {
//     method: 'GET',
//     url:BASE_URL2+'unique-tournament/'+id+'/season/'+Sid+'/statistics?limit=20&order=-rating&offset=20&accumulation=total&group=summary',
//   }
//   axios.request(options).then(function (response) {
//     if(response.status==200)
//     {
//      setplayerStatisticsData(response.data.results)
//     }
//   }).catch(function (error) {
//     console.error(error);
//   });
// };




const getPlayerStatistics = (id,Sid) => {
  const options = {
    method: 'GET',
    url: BASE_URL+'seasons/players-statistics/result',
    params: {
      unique_tournament_id: id,
      seasons_id: Sid,
      seasons_statistics_type: 'overall'
    },
    headers: header()
  }
  let  playerStatistics = [];
  let  tackles=[]; 
  let  goals=[];
  let  assists=[];
  let  EXgoals=[];
  let  successfulDribbles=[];
  let  accuratePasses=[];

  axios.request(options).then(function (response) {
    if(response.status==200)
    {
      
      for (let i = 0; i < response.data.data.rating.length ; i++) {
        for (let j = 0; j < response.data.data.rating.length ; j++) {  
        if(response.data.data.rating[i].player.id===response.data.data.tackles[j].player.id)
            tackles.push(response.data.data.tackles[j].statistics.tackles)
        if(response.data.data.rating[i].player.id===response.data.data.goals[j].player.id)
            goals.push(response.data.data.goals[j].statistics.goals)
        if(response.data.data.rating[i].player.id===response.data.data.accuratePasses[j].player.id)
            accuratePasses.push(response.data.data.accuratePasses[j].statistics.accuratePassesPercentage)   
        if(response.data.data.rating[i].player.id===response.data.data.assists[j].player.id)
             assists.push(response.data.data.assists[j].statistics.assists)           
        // if(response.data.data.avgRating[i].team.id===response.data.data.goalsConceded[j].team.id)
        //     goalsConceded.push(response.data.data.goalsConceded[j].statistics.goalsConceded)
        if(response.data.data.rating[i].player.id===response.data.data.successfulDribbles[j].player.id)
           successfulDribbles.push(response.data.data.successfulDribbles[j].statistics.successfulDribbles)
          
         }
        if(tackles[i]==undefined)
           tackles.push(0)
        if(goals[i]==undefined)
            goals.push(0)  
        if(accuratePasses[i]==undefined)
           accuratePasses.push(0)   
        if(successfulDribbles[i]==undefined)
           successfulDribbles.push(0)    
        if(assists[i]==undefined)
            assists.push(0)    
           
           
         playerStatistics.push({
          teamId:response.data.data.rating[i].team.id,
          teamName:response.data.data.rating[i].team.name,
          Rating:response.data.data.rating[i].statistics.rating,
          playerName:response.data.data.rating[i].player.name,
          playerId:response.data.data.rating[i].player.id,
          tackles:tackles[i],
          goals:goals[i],
          assists:assists[i],
          expectedgoals:"undefined",
          successfulDribbles:successfulDribbles[i],
          accuratePasses:accuratePasses[i],
         }) 
         
       
      }
      setplayerStatisticsData(playerStatistics)
    }
  }).catch(function (error) {
    console.error(error);
  });
};


const getTeamStatistics = (id,Sid) => {
  const options = {
    method: 'GET',
    url: BASE_URL+'seasons/teams-statistics/result',
    params: {
      seasons_id: Sid,
      seasons_statistics_type: 'overall',
      unique_tournament_id: id,
    },
    headers: header()
  }
  let  teamStatistics = [];
  let  tackles=[]; 
  let  goalsScored=[];
  let  goalsConceded=[];
  let  successfulDribbles=[];
  let  accuratePasses=[];

  axios.request(options).then(function (response) {
    if(response.status==200)
    {
      for (let i = 0; i < response.data.data.avgRating.length ; i++) {
     
        for (let j = 0; j < response.data.data.avgRating.length ; j++) {  

         if(response.data.data.avgRating[i].team.id===response.data.data.tackles[j].team.id)
           tackles.push(response.data.data.tackles[j].statistics.tackles)
         if(response.data.data.avgRating[i].team.id===response.data.data.goalsScored[j].team.id)
          goalsScored.push(response.data.data.goalsScored[j].statistics.goalsScored)
         if(response.data.data.avgRating[i].team.id===response.data.data.goalsConceded[j].team.id)
          goalsConceded.push(response.data.data.goalsConceded[j].statistics.goalsConceded)
         if(response.data.data.avgRating[i].team.id===response.data.data.successfulDribbles[j].team.id)
         successfulDribbles.push(response.data.data.successfulDribbles[j].statistics.successfulDribbles)
         if(response.data.data.avgRating[i].team.id===response.data.data.accuratePasses[j].team.id)
          accuratePasses.push(response.data.data.accuratePasses[j].statistics.accuratePasses)
         }     
        
         teamStatistics.push({
          teamId:response.data.data.avgRating[i].team.id,
          teamName:response.data.data.avgRating[i].team.name,
          avgRating:response.data.data.avgRating[i].statistics.avgRating,
          tackles:tackles[i],
          goalsScored:goalsScored[i],
          goalsConceded:goalsConceded[i],
          successfulDribbles:successfulDribbles[i],
          accuratePasses:accuratePasses[i],
         }) 

         setteamStatisticsData(teamStatistics) 
        
      }
      
    }
  }).catch(function (error) {
    console.error(error);
  });
};


const getFactSeasondata = (id,Sid) => {

  const options = {
    method: 'GET',
    url:  BASE_URL+'seasons/data',
    params: {unique_tournament_id: id, seasons_id: Sid},
    headers:header()
  }; 
  axios.request(options).then(function (response) {
    if(response.status==200)
    {
       setseasonsData(response.data.data)
        
      }
      
  }).catch(function (error) {
    console.error(error);
  });
};



const getTeamdatabyid = (Tid) => {

  const options = {
    method: 'GET',
    url:BASE_URL+'teams/data',
    params: {team_id: Tid},
    headers:header()
  };

  axios.request(options).then(function (response) {

    if(response.status==200)
    {
         
      setteamInfodata(response.data.data)
      setteamCountry(response.data.data.country)
      setteamManagerInfo(response.data.data.manager)
      setteamVenueData({cityName:response.data.data.venue.city.name,
       countryName:response.data.data.venue.country.name,
       stadium:response.data.data.venue.stadium.name,
       capacity:response.data.data.venue.stadium.capacity
      })                    
        
      }
      
  }).catch(function (error) {
    console.error(error);
  });
};


const getTeamSeasonStanding = (Tid) => {

  const options = {
    method: 'GET',
    url: BASE_URL+'teams/standings/seasons',
    params: {team_id: Tid},
    headers:header()
  };

  axios.request(options).then(function (response) {

    if(response.status==200)
    {    
      setteamSeasonStanding(response.data.data)                 
    }   
      
      
  }).catch(function (error) {
    console.error(error);
  });
};

const getTeamplayer = (Tid) => {
  setIsLoading(true)
  const options = {
    method: 'GET',
    url: BASE_URL+'teams/players',
    params: {team_id: Tid},
    headers:header()
  };
  axios.request(options).then(function (response) {

    if(response.status==200)
    {
  
      setteamPlayer(response.data.data)     
      setPlayers(response.data.data.players)   
      setIsLoading(false)          
    }   
      
      
  }).catch(function (error) {
    console.error(error);
  });
};

const getteamtournaments = (Tid) => {
 

  const options = {
    method: 'GET',
    url:  BASE_URL+'teams/current-tournaments',
    params: {team_id: Tid},
    headers:header()
  };
  axios.request(options).then(function (response) {
    if(response.status==200)
    {
     console.log(response.data.data)
     setteamtournamentdata(response.data.data)
    
    }
  }).catch(function (error) {
    console.error(error);
  });
};

 const getteamEvent = (Tid) => {
  setIsLoading(true)
  const options = {
    method: 'GET',
    url: BASE_URL+'teams/events',
    params: {team_id: Tid, page: '0', course_events: 'last'},
    headers:header()
  };
  let  tourName = [];

  axios.request(options).then(function (response) {
    
    if(response.status==200)
    {
      
        for (let i = 0; i < response.data.data.events.length ; i++) {
          tourName.push(response.data.data.events[i].tournament)
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
                for(let j in response.data.data.events) {
                  if(response.data.data.events[j].tournament.name == uniqueObject[i].name && 
                    response.data.data.events[j].tournament.category.id==uniqueObject[i].category.id)
                     { matchdata.push(response.data.data.events[j])}
                  }
                tourdata.push({tourdata:uniqueObject[i],matchdata})
               }
               setteamEventData(tourdata)
               setIsLoading(false)
             }

    }
    
  }).catch(function (error) {
    console.error(error);
  });
};

const getTitle = (id) => {
  setIsLoading(true)
  const options = {
    method: 'GET',
    url: BASE_URL+'unique-tournaments/data',
    params: {unique_tournament_id: id},
    headers:header()
  };
  axios.request(options).then(function (response) {

    if(response.status==200)
    {
      setTitleData(response.data.data)
    }   
      
      
  }).catch(function (error) {
    console.error(error);
  });
};


const getseasonlistbytourId= (id) => {
  setIsLoading(true)
  const options = {
    method: 'GET',
    url: BASE_URL+'unique-tournaments/seasons',
    params: {unique_tournament_id: id},
    headers:header()
  };
  axios.request(options).then(function (response) {

    if(response.status==200)
    {
      setSeasonList(response.data.data)
    }   
      
      
  }).catch(function (error) {
    console.error(error);
  });
};

const getEventDataById= (id) => {
 
  const options = {
    method: 'GET',
    url: BASE_URL+'events/data',
    params: {event_id: id},
    headers:header()
  };
  axios.request(options).then(function (response) {

    if(response.status==200)
    {
      console.log(response.data.data)
      setEventdata(response.data.data)
    }   
      
      
  }).catch(function (error) {
    console.error(error);
  });
};

// const getteamdata = (id,Sid,type) => {
//   const options = {
//     method: 'GET',
//     url:BASE_URL2+'unique-tournament/17/season/41886/events/next/1',
//   }
//   axios.request(options).then(function (response) {
//     if(response.status==200)
//     {
//      console.log(response.data)
    
//     }
//   }).catch(function (error) {
//     console.error(error);
//   });
// };












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
        getleaguetandingdata,
        getMatchdataBytourandSeasonIds,
        getTeamStatistics,
        getPlayerStatistics,
        getFactSeasondata,
        getTeamdatabyid,
        getTeamSeasonStanding, 
        getTeamplayer,
        getteamtournaments,
        getteamEvent,
        getTitle,
        getseasonlistbytourId,
        getEventDataById,

        Eventdata,
        SeasonList,
        TitleData,
        teamEventData,
        teamtournamentdata,
        Players, 
        teamPlayer,
        teamSeasonStanding,
        teamVenueData,
        teamManagerInfo,
        teamCountry,
        teamInfodata,
        seasonsData,
        playerStatisticsData,
        teamStatisticsData,
        leagueMatchesdata,
        leagueCategoryInfo,
        leaguestandingTourInfo,
        leaguestandingData,
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