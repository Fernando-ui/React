import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <NavLink exact activeClassName='active' className="navbar-brand" to="./">Home</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink exact activeClassName='active' className="nav-link active" aria-current="page" to="./about">About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact activeClassName='active' className="nav-link" to="./login">Login</NavLink>
                </li>
            </ul>
            <span className="navbar-text">
                Navbar text with an inline element
            </span>
            </div>
        </div>
    </nav>

    )
}
