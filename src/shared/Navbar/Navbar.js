import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-container sticky-top'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="logo">
                        <Link to="/home">Bluestone</Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/rooms">Rooms</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/hotel-info">Hotel Info</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/offers">Offers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/location">Location</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dining">Dining</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/events">Events</Link>
                            </li>
                        </ul>
                        <div className='nav-login'>
                            <Link to="/register">Join</Link>
                            <Link to="/login">Signin</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;