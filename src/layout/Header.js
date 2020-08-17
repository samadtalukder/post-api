import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
import NavBar from "./NavBar";

class Header extends Component {
    render() {
        return (
            <div>

                <div className="header-top_area d-none d-lg-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-md-12">
                                <div className="header_right d-flex">
                                    <div className="short_contact_list">
                                        <ul>
                                            <li><a href="#"> <FontAwesomeIcon
                                                icon={faEnvelope}/> info@docmed.com</a>
                                            </li>
                                            <li><a href="#"> <FontAwesomeIcon icon={faPhoneAlt}/> 1601-609 6780</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="social_media_links">
                                        <a href="#">
                                            <FontAwesomeIcon icon={faLinkedin}/>
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faFacebookSquare}/>
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faTwitter}/>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;