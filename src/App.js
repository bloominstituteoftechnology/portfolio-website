import React, { useState, useEffect } from 'react'
import { NavLink, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Home, About, Work } from './components'
import './App.scss'

library.add(fab, faAt)

const App = () => {

  const [links, setLinks] = useState({ marginTop: '-100%' })

  useEffect(_ => {
    setTimeout(_ => setLinks({ marginTop: 0 }), 1000)
  }, [])

  return <div className="App">
    <nav>
      <NavLink exact to='/' className='home'>Home</NavLink>
      <NavLink to='/about' className='about'>About</NavLink>
      <NavLink to='/work' className='work'>Work</NavLink>
      <a
        href="https://docs.google.com/document/d/1jRMkE040orW6gBoYssTHJ7g8s8VN3OPtYTF-fz_EYII/edit?usp=sharing"
        target='_blank'
        rel='noopener noreferrer'
      >Resume</a>
      <hr />
    </nav>

    <div className="Routes">
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/work' component={Work} />
    </div>

    <footer style={links}>
      <h2>Get in touch</h2>

      <div>
        <FontAwesomeIcon
          icon={['fab', 'github']}
          className='Link'
          onClick={() => window.open('https://github.com/brellin')}
        />
        GitHub
      </div>

      <div>
        <FontAwesomeIcon
          icon={['fab', 'linkedin']}
          className='Link'
          onClick={() => window.open('https://linkedin.com/in/brellin')}
        />
        LinkedIn
      </div>

      <div>
        <FontAwesomeIcon
          icon='at'
          className='Link'
          onClick={() => window.location = 'mailto: will@willujr.com'}
        />
        Email
      </div>
    </footer>

  </div>

}

export default App
