import React, { Component } from 'react'
import style from "./App.module.css";
import { Link } from 'react-router-dom';


export default class NavScreen extends Component {
  render() {
    return (
        <>
        <nav>
        <header className={style.Navbar}>
          <div className={style.logo}>
            <img src="Images/logo.svg" alt="logo" width={110} />
          </div>
          <div className={style.topright}>
            <div className={style.schedule}>
              <img src="Images/schedule.png" alt=" " height={25} />
              <Link to="/schedule"><span>Schedule</span></Link>
            </div>
            <div className={style.leader}>
              <img src="Images/leaderboard.png" alt="" height={25} />
              <Link to="/leaderboard"><span>Leaderboard</span></Link>
              
            </div>
          </div>
        </header>
      </nav>
      </>
    )
  }
}
