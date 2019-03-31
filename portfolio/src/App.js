import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition'
import Home from './components/Home/Home'
import About from './components/About/About'
import Work from './components/Work/Work'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='smile' />
        <div className='routes'>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/work' component={Work} />
          </AnimatedSwitch>
        </div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/work'>Work</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </div>
    );
  }
}

export default App;
