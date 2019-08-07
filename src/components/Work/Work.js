import React from 'react'

import { sites } from './sites'
import Site from './Site/Site'

import './work.scss'

const Work = () => {
    return (
        <div className='work'>
            <h1>Work</h1>
            <div className='work header-img' />
            {sites.map((site, id) => <Site site={site} key={id} />)}
        </div>
    )
}

export default Work
