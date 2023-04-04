import React, { Component } from 'react'
import NavScreen from './NavScreen'

export default class NotFound extends Component {
  render() {
    return (
        <>
         <NavScreen/>
        <img src="public/Images/404.png" alt=' 'width={900}/>
        </>
     
    )
  }
}