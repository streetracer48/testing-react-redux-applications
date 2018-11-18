import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active" exact={true}>Create Expense</NavLink>
        <NavLink to="/edit/34" activeClassName="is-active" exact={true}>Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active" exact={true}>Help</NavLink>
        <NavLink to="/playground/redux" activeClassName="is-active" exact={true}>playground</NavLink>
    </header>
)

export default Navbar