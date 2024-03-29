import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApiProvider } from './context/ApiContext';
import Login from './UserComponents/Login';
import Header from './Components/NavComponents/header';
import Footer from './Components/NavComponents/footer';
import Main from './pages/main';
import Player from './pages/player';
import Manager from './pages/manager';
import Competition from './pages/competition';
import Team from './pages/teams';

function App() {
  return (
    <>
    <ApiProvider>
    
    <BrowserRouter>
      <Header/>
       <Switch>
         <Route exact to path="/" component={Main} />
         <Route exact to path="/player/:id" component={Player} />
         <Route exact to path="/manager/:Mid" component={Manager} />
         <Route exact to path="/competition/:id" component={Competition} />
         <Route exact to path="/team/:Tid" component={Team} />
      </Switch>
      <Footer/>
     </BrowserRouter>
       
    </ApiProvider>
    </>
  );
  }
  export default App;