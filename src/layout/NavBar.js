import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>

                <div id="sticky-header" className="main-header-area">
                    <div className="container">
                        <div className="header_bottom_border">
                            <div className="row align-items-center">

                                <div className="col-xl-3 col-lg-2">

                                    <div className="logo">

                                        <a href="#">
                                            <img src={require('../assets/img/logo.png')} alt=""/>
                                        </a>

                                    </div>

                                </div>



                                <div className="col-xl-9 col-lg-7 d-none d-lg-block">
                                    <div className="Appointment">
                                        <div className="search_btn">
                                            <a href="#">
                                                <i className="ti-search"/>
                                            </a>
                                        </div>
                                        <div className="book_btn d-none d-lg-block">
                                            <a href="#">Add Property</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default NavBar;