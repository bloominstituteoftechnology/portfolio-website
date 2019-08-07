import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import { About, Contact, Home, Nav, Work } from './components'

import './App.scss'

const App = () => {

  const [hide, setHide] = useState(false)

  return (

    <div className="App">
      <Nav hide={hide} setHide={setHide} />
      <div className={`smile ${hide ? 'top' : ''}`} />
      <div className='routes'>
        <div className='smileBlank' />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/work' component={Work} />
        </Switch>
      </div>
    </div>
  )

}

export default App
