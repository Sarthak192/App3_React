import React, { Component } from 'react';

const Navbar = (props) => {
    return(
        <nav className = "navbar navbar-light bg-light">
            <a className = "navbar-brand">
                Navbar
                <span className = "badge badge-pill badge-secondary m-2">{props.length}</span>
            </a> 
        </nav>
    )
}

 
export default Navbar;