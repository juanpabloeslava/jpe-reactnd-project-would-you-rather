import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import { AppBar, Toolbar, Link, IconButton, Typography } from '@material-ui/core';


class Nav extends Component {
    
    render() {

        return (
            <div className='nav-container'>
                <ul>
                    <li>
                        <NavLink to='/'> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add'> Create Question </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard'> Leaderboard </NavLink>
                    </li>
                    <li className='login'>
                        <NavLink to='/login'> Log in </NavLink>
                    </li>
                </ul>
            </div>
        )
            
    }
}

export default Nav