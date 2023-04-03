// import style from "./App.module.css";

import React from "react";
// import TableScreen from "./TableScreen";
import { BrowserRouter, Route } from 'react-router-dom';
import Leaderboard from "./Leaderboard";
// import NavScreen from "./NavScreen";
import Schedule from "./Schedule";
// import NotFound from "./NotFound";
import LeagueService from "./services/LeagueService";

function App() {
  const Data = new LeagueService();
  Data.fetchData();
  return (
    <>
    <BrowserRouter>
      <Route path="/" exact component={Schedule} />
      <Route path="/schedule " component={Schedule} />
      <Route path="/leaderboard" component={Leaderboard} />
      {/* <Route path="*" component={NotFound} /> */}
    </BrowserRouter> 
    </>
  );
}

export default App;
