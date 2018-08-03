import React, { Component } from 'react';

const Navbar = ({ title }) => {
    return (
        <div>
            <nav className="light-blue darken-4">
                <div className="container">
                    <a className="brand-logo" href="/">{title}</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;