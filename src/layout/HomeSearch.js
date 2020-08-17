import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faSearchLocation} from '@fortawesome/free-solid-svg-icons'

class HomeSearch extends Component {
    render() {
        return (
            <div>

                <div className="slider_area">

                    <div className="single_slider  d-flex align-items-center slider_bg_1">

                        <div className="container">

                            <div className="row align-items-center">

                                <div className="col-xl-10 offset-xl-1">

                                    <div className="slider_text text-center justify-content-center">

                                        <h3>Find your best Property</h3>

                                        <p>Esteem spirit temper too say adieus who direct esteem.</p>

                                    </div>

                                    <div className="property_form">

                                        <form action="#">

                                            <div className="row">

                                                <div className="col-xl-12">

                                                    <div className="form_wrap d-flex">

                                                        <div className="single-field max_width ">

                                                            <label htmlFor="#">Location</label>

                                                            <select className="wide">

                                                                <option data-display="NewYork">NewYork</option>
                                                                <option value="1">Bangladesh</option>
                                                                <option value="2">India</option>

                                                            </select>

                                                        </div>

                                                        <div className="single-field max_width ">

                                                            <label htmlFor="#">Property type</label>

                                                            <select className="wide">

                                                                <option data-display="Apartment">Apartment</option>
                                                                <option value="1">Apartment</option>
                                                                <option value="2">Apartment</option>

                                                            </select>

                                                        </div>


                                                        <div className="single-field min_width ">
                                                            <label htmlFor="#">Bed Room</label>
                                                            <select className="wide">
                                                                <option data-display="01">01</option>
                                                                <option value="1">02</option>
                                                                <option value="2">03</option>
                                                            </select>
                                                        </div>
                                                        <div className="single-field min_width ">
                                                            <label htmlFor="#">Bath Room</label>
                                                            <select className="wide">
                                                                <option data-display="01">01</option>
                                                                <option value="1">02</option>
                                                                <option value="2">03</option>
                                                            </select>
                                                        </div>
                                                        <div className="serach_icon">
                                                            <a href="#">
                                                                <FontAwesomeIcon icon={faSearchLocation}/>

                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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

export default HomeSearch;