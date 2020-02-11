import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = props => {

    useEffect(() => { setTimeout(() => props.setHide(!props.hide), 5000) }, [])

    const activeStyle = {
        background: '#203838',
        color: 'white',
        cursor: 'default'
    }

    return (
        <nav className={`${props.hide && 'hide'}`}>
            <div className={`${props.hide && 'hide'}`}>

                <NavLink
                    exact to='/'
                    activeStyle={activeStyle}
                >Home
                </NavLink>

                <NavLink
                    to='/about'
                    activeStyle={activeStyle}
                >About
                </NavLink>

                <NavLink
                    to='/work'
                    activeStyle={activeStyle}
                >Work
                </NavLink>

                <NavLink
                    to='/contact'
                    activeStyle={activeStyle}
                >Contact
                </NavLink>

            </div>
            <i
                className={`fas fa-chevron-circle-${props.hide ? 'down' : 'up'} ${props.hide && 'hide'}`}
                onClick={() => props.setHide(!props.hide)}
            />
        </nav>
    )
}

export default Nav
