import React from "react";
import {Link} from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {faFacebookSquare, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";
import HomeSearch from "./HomeSearch";
import HomeProperties from "./HomeProperties";

class Home extends React.Component {
    render() {
        return (

            <div>
                <header>

                    <div className="header-area ">

                        <Header/>

                        <NavBar/>

                    </div>

                </header>

                <HomeSearch/>

                <HomeProperties/>

                <Footer/>

            </div>


        )
    }
}

export default Home;