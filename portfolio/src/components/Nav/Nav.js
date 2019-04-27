import React from 'react'

const Nav = props => {
    console.log(window.location)
    return (
        <nav>
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
        </nav>
    )
}

export default Nav
