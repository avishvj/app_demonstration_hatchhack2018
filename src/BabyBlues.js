import React from 'react';
import { Link } from 'react-router-dom';
import Trail from './img/dashboard.png';
import User from './img/user.svg';
import Logo from './img/logo.png'

class BabyBlues extends React.Component {

  render() {
    return (
    <div className="phone">
      <div className="top">
      </div>
      <div className="screen">
        <img className="icons" id="menu" width="32" alt="Hamburger icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/32px-Hamburger_icon.svg.png"/>
        <Link to="/"><img className="logo" height="32" alt="logo" src={Logo}/></Link>
        <img id="dashboard" src={Trail} alt="chain of emotion faces"/>
        <Link to="/me"><img className="icons" id="user" height="32" src={User} alt="user icon"/></Link>
        <Link className="start-wrapper" to="/questions"><button className="start">How are you today?</button></Link>
      </div>
      <div className="bottom">
      </div>
    </div>)
  }
}

export default BabyBlues;
