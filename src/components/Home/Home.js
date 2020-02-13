import React, { useState, useEffect } from 'react'

import { hooks, redux, node, python } from '../../images'
import './Home.scss'

const Home = props => {

    const [top, setTop] = useState({
        position: 'relative',
        left: '100vw'
    })

    const [bottom, setBottom] = useState({
        position: 'relative',
        right: '100vw'
    })

    const [skills, setSkills] = useState({
        opacity: 0
    })

    useEffect(_ => {
        setTimeout(_ => setTop({ position: 'relative', left: 0 }), 1000)
        setTimeout(_ => setBottom({ position: 'relative', right: 0 }), 1000)
        setTimeout(_ => setSkills({ opacity: 1 }), 1000)
    }, [])

    return <div className='Home'>
        <div className='Intro'>
            <h3 style={top}>Hi, my name is</h3>

            <h1>William Charles Umstead Junior</h1>

            <h4 style={bottom}>I'm a Full Stack Web Developer</h4>
        </div>

        <div className='Skills' style={skills}>
            <h2>Specializing in:</h2>
            <img src={hooks} alt='React Hooks' title='React Hooks' />
            <img src={redux} alt='Redux' title='Redux' />
            <img src={node} alt='Node' title='Node' />
            <img src={python} alt='Python' title='Python' />
        </div>
    </div>

}

export default Home
