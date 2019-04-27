import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: localStorage.getItem('page') !== null ? localStorage.getItem('page') : 'home'
    }
  }

  click = name => {
    this.setState({
      ...this.state,
      switch: name
    })
    localStorage.setItem('page', name)
  }

  render() {
    return (
      <div className="App">
        <Nav
          switch={this.state.switch}
          click={this.click}
        />
        <div className='smile' />
        <div className='routes'>
          <div className='smileBlank' />
          {(() => {
            switch (this.state.switch) {
              case 'home':
                return <Home />
              case 'about':
                return <About />
              case 'work':
                return <Work />
              case 'contact':
                return <Contact />
              default:
                return <Home />
            }
          })()}
        </div>
      </div>
    );
  }
}

export default App;
