import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Out And About</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Cruise
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="https://www.carnival.com/" target="_blank">Carnival</a></li>
                                    <li><a className="dropdown-item" href="https://www.royalcaribbean.com/" target="_blank">Royal C.</a></li>
                                    <li><a className="dropdown-item" href="https://disneycruise.disney.go.com/" target="_blank">Disney</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Fly
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">SouthWest</a></li>
                                    <li><a className="dropdown-item" href="#">Delta</a></li>
                                    <li><a className="dropdown-item" href="#">Spirit</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link to="/about" className="dropdown-item">About Us</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar