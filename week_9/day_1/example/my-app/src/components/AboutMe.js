import React, { Component } from 'react'
import "../App.css"
import profile from './images/dogBash.jpg'

 class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
        <img src={profile} alt="dog bash"/>
      </div>
    )
  }
}

export default AboutMe;
