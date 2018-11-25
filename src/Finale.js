import React from 'react';
import User from './img/user.svg';
import Stat from './img/stat.png'
import Logo from './img/logo.png'

import Phone from './img/phone.png';
import Chat from './img/text.png';
import Book from './img/book.png';

import { Link } from 'react-router-dom';


class Finale extends React.Component {
  render() {
    return(
      <div className="phone">
        <div className="top">
        </div>
        <div className="screen">
          <div className="menubar">
            <img className="icons" id="menu" width="32" alt="Hamburger icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/32px-Hamburger_icon.svg.png"/>
            <Link to="/"><img className="logo" height="32" alt="logo" src={Logo}/></Link>
            <Link to="/"><img className="icons" id="user" height="32" src={User} alt="user icon"/></Link>
          </div>
          <span id="birthdate">Baby's birthday: 10 Oct</span>
          <span>Based on your data so far, there is a</span>
          <h2 id="risk">Medium Risk</h2>
          <img id="stat" src={Stat} alt="percentage"></img>
          <span>that you may have an underlying medical condition.</span>

          <h2 id="next">Next Steps:</h2>
          <div className="step">
            <img src={Phone} alt="call"/>
            <p> Call your healthcare provider </p>
          </div>
          <div className="step">
            <img src={Chat} alt="chat"/>
            <p> Talk to someone you trust </p>
          </div>
          <div className="step">
            <img src={Book} alt="book"/>
            <p> Learn more </p>
          </div>
        </div>
        <div className="bottom">
        </div>
      </div>
    )
  }
}

export default Finale;
