import React from 'react'
import nall_logo from "../images/nall_logo.png";
import {Link} from "react-router-dom";


function NavBar(){

    return(
        <nav className="navbar navbar-expand-xl navbar-dark" style={{backgroundColor: '#863084'}}
            aria-label="Sixth navbar example">
            <div className="container-fluid">
                <a className="navbar-brand" href="/src/user-page/user_index.html" style={{marginLeft: '3%'}}>
                    <img src={nall_logo} width="50" height="54" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample06"
                    aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample06">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to = "/about" className='nav-link active'>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact" className="nav-link active">Contact Us</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto mb-2 mb-xl-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">My Account</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;