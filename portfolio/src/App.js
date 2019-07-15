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
      switch: window.location.pathname !== '/' ? window.location.pathname.split('/')[1] : 'home',
      hide: false
    }
  }

  click = name => {
    this.setState({
      ...this.state,
      switch: name
    })
    if (name !== 'home') {
      window.location.pathname = `/${name}`
    } else {
      window.location.pathname = '/'
    }
  }

  hide = bool => {
    this.setState({
      ...this.state,
      hide: bool
    })
  }

  render() {
    return (
      <div className="App">
        <Nav
          switch={this.state.switch}
          click={this.click}
          hide={this.hide}
        />
        <div className={`smile ${this.state.hide ? 'top' : ''}`} />
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
