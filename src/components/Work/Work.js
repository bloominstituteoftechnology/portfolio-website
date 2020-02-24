import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import GitHub from 'react-github-calendar'
import './Work.scss'

const Work = props => {

    return <div className="Work">
        <div className="Buttons">
            <NavLink exact to='/work'>Projects</NavLink>
            <NavLink to='/work/activity'>Activity</NavLink>
        </div>
        <Route exact path='/work' component={Projects} />
        <Route path='/work/activity' component={Activity} />
    </div>

}

const Projects = props => {
    return <>
        <div className="Project BlackHole">
            <h2>Black Hole</h2>

            <p onClick={() => window.open('https://blackhole.willujr.com')}>{`A web app using React for the front-end and Node for the back-end. This project allows the user to vent into a “black hole” - without the worry of anybody hearing what was said. 
            
            I was responsible for the front end of this project.
            
            `}<a
                    href="https://github.com/black-hole-lambda-build-week/front-end"
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={e => e.stopPropagation()}
                >GitHub Repository</a></p>
        </div>

        <div className="Project Howl">
            <h2>Howl For Change</h2>

            <p onClick={() => window.open('https://howl-for-change-staging.netlify.com')}>{`A marketplace using React for the front-end, Firebase for the backend, and Node to interact with Dwolla for payments. Allows nonprofit organizations to post projects for creative users to apply for - using portfolios made within the app. Only one 'winner' is chosen per project.
            
            I was the lead technical developer for this project.
            
            `}<a
                    href="https://bitbucket.org/hfc-wolfpack/howlforchange/"
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={e => e.stopPropagation()}
                >Bitbucket Repository</a></p>
        </div>

        <div className="Project Chao">
            <h2>Chao Fever</h2>

            <p onClick={() => window.open('https://chaofever.willujr.com')}>{`My first maserpiece, made at 15 years of age - 2008. Originally composed using HTML, CSS, and PHP. This iteration was refactored to use HTML and LESS.
            
            The website is focused on a side-story of the Sonic Adventure series...Chao!
            
            `}<a
                    target='_blank'
                    rel='noopener noreferrer'
                    href="https://github.com/brellin/chaofever"
                    onClick={e => e.stopPropagation()}
                >GitHub Repository</a></p>
        </div>
    </>
}

const Activity = props => {
    return <>
        <h2>WakaTime</h2>
        <figure><embed src="https://wakatime.com/share/@brellin/f844d8ee-85dc-4ba1-b3e1-4277288ef657.svg"></embed></figure>

        <h2>GitHub</h2>
        <GitHub username='brellin' theme={{
            background: 'none',
            text: '#03D4FE',
            grade4: '#03D4FE',
            grade3: '#055',
            grade2: '#099',
            grade1: '#001a1a',
            grade0: 'none',
        }} />
    </>
}

export default Work
