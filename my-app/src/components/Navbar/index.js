import React from 'react';
import './Navbar.css';
import {  
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default function Navbar() {
    return (
        <Router>
            <nav className="navbar">
                <a href="#home" className="navlink active">
                    <Link to="/">About</Link>
                </a>
                <a href="#features" className="navlink">
                    <Link to="/projects">Projects</Link>
                </a>
                <a href="#pricing" className="navlink">
                    <Link to="/writings">Writings</Link>
                </a>
            </nav>
        </Router>
    );
}