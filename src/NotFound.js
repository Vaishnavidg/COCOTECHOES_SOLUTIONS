import React, { Component } from 'react'
import NavScreen from './NavScreen'
import style from "./App.module.css";
import Footer from './Footer';

export default class NotFound extends Component {
  render() {
    return (
        <>
         <NavScreen/>
        <img src="public/Images/404.png" alt=' 'width={900} className={style.NotFound}/>
        <Footer/>
        </>
     
    )
  }
}