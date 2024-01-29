import React from "react";

const Navbar = () => {
    return (
        <div>
        <header>
        <div className="logo">
            <a href="#" className="logo-link">
                <span>Ilocos Sur Polytechnic State College</span>
            </a>
        </div>
        <nav>
            <ul>
                <li><a href="#" className="nav-link">Home</a></li>
                <li><a href="#" className="nav-link">About us</a></li>
                <li><a href="#" className="nav-link">Admission</a></li>
                <li><a href="#" className="nav-link">Academics</a></li>
                <li><a href="#" className="nav-link">News</a></li>
            </ul>
        </nav>
    </header>
    </div>
    );
};

export default Navbar;
