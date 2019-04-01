import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition'
import Home from './components/Home/Home'
import About from './components/About/About'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: false
    }
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <div className='smileBlank' />
          <Link to='/work'>Work</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
        <div className='smile' />
        <div className='routes'>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/work' component={Work} />
            <Route path='/contact' component={Contact} />
          </AnimatedSwitch>
        </div>
      </div>
    );
  }
}

export default App;
