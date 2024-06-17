import React from 'react';

const Header = () => {
    return (
        <header className="header navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">
                <img src="https://kilala.com.vn/data/images/loading_logo_kilala.png" className="d-block w-100" alt="logo"></img>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about-us">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#feature-work">Feature Work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#reference">Reference</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#blog">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#footer">Contact</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;