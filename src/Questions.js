import React from 'react';
import User from './img/user.svg';
import Logo from './img/logo.png';

import Angry from './img/angry.png';
import Sad from './img/sad.png';
import Neutral from './img/neutral.png';
import Happy from './img/happy.png';
import Cheerful from './img/cheerful.png';

import Girl from './img/girl.svg';
import Friends from './img/friendship.svg';
import Slider from '@material-ui/lab/Slider';

import Happiness from './img/happiness.svg';
import Bored from './img/neutral.svg';

import Empty from './img/empty.svg';
import Full from './img/full.svg';

import Bad from './img/bad.svg';
import Good from './img/good.svg';

import Pie from './img/pie.png'

import End from './img/motherhood.svg';

import Fade from '@material-ui/core/Fade';
import { Link } from 'react-router-dom';


class Questions extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      number: 0,
      question: '',
      options: '',
      finished: 0
    }
  }

  componentWillMount() {
    var initOptions = [Angry, Sad, Neutral, Happy, Cheerful];

    this.setState({
      number: 1,
      question: 'How are you today?',
      option: (
        <div className='options'>
          {initOptions.map((el, i) => {
            return <img className="emotions" src={el} key={i} alt='emotion' onClick={(e) => {this.selectOpt(e)}}/>
          })}
        </div>)
    })
  }

  selectOpt = (e) => {
    e.target.classList.add('selected');
  }

  nextQuestion = () => {
    switch (this.state.number) {
      case 1:
        this.setState({
          number: 2,
          question: 'Have you spent time with friends, family or baby today?',
          option: (
            <div className="options">
              <img className="measures" width="50" src={Girl} alt="lonely"/>
              <Slider
                id="slider"
                value={30}
                />
              <img className="measures" width="50" src={Friends} alt="friends"/>
            </div>
          )
        })
        break;
      case 2:
        this.setState({
          number: 3,
          question: 'Did you do something that made you happy today?',
          option: (
            <div className="options">
              <button className="choices">
                <img className="measures" width="50" src={Bored} alt="lonely"/>
                <p>No</p>
              </button>
              <button className="choices">
                <img className="measures" width="50" src={Happiness} alt="friends"/>
                <p>Yes</p>
              </button>
            </div>
          )
        })
        break;
      case 3:
        this.setState({
          number: 4,
          question: 'Did you have difficulties breastfeeding today?',
          option: (
            <div className="options">
              <img className="measures" width="50" src={Empty} alt="empty bottle"/>
              <Slider
                id="slider"
                value={30}
                />
              <img className="measures" width="50" src={Full} alt="full bottle"/>
            </div>
          )
        })
        break;
      case 4:
        this.setState({
          number: 5,
          question: 'How was your quality of sleep last night?',
          option: (
            <div className="options">
              <img className="measures" width="50" src={Bad} alt="bad"/>
              <Slider
                id="slider"
                value={30}
                />
              <img className="measures" width="50" src={Good} alt="good"/>
            </div>
          )
        })
        break;
      case 5:
        this.setState({
          number: 6,
          question: 'How was your appetite today?',
          option: (
            <div className="options foodQuestion">
              <img className="food" width="200" src={Pie} alt="lonely"/>
              <p>40%</p>
            </div>
          )
        })
        break;
      case 6:
        this.setState({
          number: 7,
          question: 'Thanks Ina. See you again tomorrow!',
          option: (
            <div className="options foodQuestion">
              <img className="end" src={End} alt="mother baby heart"/>
            </div>
          ),
          finished: 1
        })
        break;
      default:
        break;
    }
  }

  render() {
    return(
      <div className="phone">
        <div className="top">
        </div>
        <div className="screen">
          <div className="menubar">
            <img className="icons" id="menu" width="32" alt="Hamburger icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/32px-Hamburger_icon.svg.png"/>
            <Link to="/"><img className="logo" height="32" alt="logo" src={Logo}/></Link>
            <Link to="/me"><img className="icons" id="user" height="32" src={User} alt="user icon"/></Link>
          </div>
          <Fade in={true}>
            <div className="question">
              <h2>{this.state.question}</h2>
              {this.state.option}
              { this.state.finished ?
                <Link to="/"><button className="finished">Finish</button></Link>
                :
                <button className="start" onClick={this.nextQuestion}>Next</button>
              }
            </div>
          </Fade>
        </div>
        <div className="bottom">
        </div>
      </div>
    )
  }
}

export default Questions;
