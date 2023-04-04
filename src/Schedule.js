import React, { Component } from 'react'
import NavScreen from './NavScreen'
import TableScreen from './TableScreen'
import style from "./App.module.css";
import Footer from './Footer';

export default class Schedule extends Component {
  render() {
    return (
      <>
      <NavScreen/>
      <div className={style.legue}>
        <h4>League Schedule</h4>
      </div>
      <TableScreen/>
      <Footer/>
      </>
    )
  }
}
