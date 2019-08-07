import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = props => {

    useEffect(() => setTimeout(() => props.setHide(!props.hide), 5000), [])

    return (
        <nav className={`${props.hide && 'hide'}`}>
            <div className={`${props.hide && 'hide'}`}>

                <NavLink
                    exact to='/'
                    activeStyle={{
                        background: '#203838',
                        color: '#20383850',
                        cursor: 'default'
                    }}
                >Home
                </NavLink>

                <NavLink
                    to='/about'
                    activeStyle={{
                        background: '#203838',
                        color: '#20383850',
                        cursor: 'default'
                    }}
                >About
                </NavLink>

                <NavLink
                    to='/work'
                    activeStyle={{
                        background: '#203838',
                        color: '#20383850',
                        cursor: 'default'
                    }}
                >Work
                </NavLink>

                <NavLink
                    to='/contact'
                    activeStyle={{
                        background: '#203838',
                        color: '#20383850',
                        cursor: 'default'
                    }}
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
