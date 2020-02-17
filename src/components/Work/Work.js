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
        <h2>Black Hole</h2>
        <div className="Project BlackHole">
            <p onClick={() => window.open('https://blackhole.willujr.com')}>{`A web app that allows the user to create an account, log in, and vent about anything that has been troubling you - without the worry of anybody finding out about what you said.
            
            I was responsible for the front end of this project.
            
            `}<a
                    href="https://github.com/black-hole-lambda-build-week/front-end"
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={e => e.stopPropagation()}
                >GitHub Repository</a></p>
        </div>

        <h2>Howl For Change</h2>
        <div className="Project Howl">
            <p onClick={() => window.open('https://howl-for-change-staging.netlify.com')}>{`A marketplace that allows nonprofit organizations to post projects for creative users to apply for - using portfolios made within the app. Only one 'winner' is chosen per project.
            
            I was the lead technical developer for this project.
            
            `}<a
                    href="https://bitbucket.org/hfc-wolfpack/howlforchange/"
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={e => e.stopPropagation()}
                >Bitbucket Repository</a></p>
        </div>

        <h2>Chao Fever</h2>
        <div className="Project Chao">
            <p onClick={() => window.open('https://chaofever.willujr.com')}>{`My first maserpiece, made at 15 years of age - 2008
            
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
        <figure><embed src="https://wakatime.com/share/@brellin/486bd322-98a8-4e1a-a9a0-30c55d351ec5.svg" /></figure>

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
