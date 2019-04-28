import React, { useState } from 'react'
import { useCDM } from 'customHooks'

const Nav = props => {
    const [hide, setHide] = useState(false)

    useCDM(setTimeout(() => setHide(true), 5000))
    
    return (
        <nav>
        <div className={`${hide && 'hide'}`}>
            <span
                style={{
                    background: props.switch === 'home' && '#203838'
                }}
                onClick={() => props.click('home')}
            >Home</span>
            <span
                style={{
                    background: props.switch === 'about' && '#203838'
                }}
                onClick={() => props.click('about')}
            >About</span>
            <span
                style={{
                    background: props.switch === 'work' && '#203838'
                }}
                onClick={() => props.click('work')}
            >Work</span>
            <span
                style={{
                    background: props.switch === 'contact' && '#203838'
                }}
                onClick={() => props.click('contact')}
            >Contact</span>
        </div>
            <i
                className={`fas fa-chevron-circle-${hide ? 'down' : 'up'} ${hide && 'hide'}`}
                onClick={() => setHide(!hide)}
        />
        </nav>
    )
}

export default Nav
