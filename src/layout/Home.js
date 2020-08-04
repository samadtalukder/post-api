import React from "react";
import {Link} from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                <div className="container">
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                            data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link to={'/'} className="nav-link active">Home</Link>
                            </li>

                            <li className="nav-item dropdown ">
                                <Link to={'/login'} className="nav-link">Login</Link>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}

export default Home;