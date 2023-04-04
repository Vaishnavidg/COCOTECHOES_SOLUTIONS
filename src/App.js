import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Leaderboard from "./Leaderboard";
import Schedule from "./Schedule";
import NotFound from "./NotFound";
import { Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route index element={Schedule} />
        <Route path="/" exact component={Schedule} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/leaderboard" component={Leaderboard} />

        {/* <Route path="*" component={NotFound} /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
