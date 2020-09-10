import React, {Component} from 'react';
import axios from "axios";

class HomeProperties extends Component {

    constructor(props) {
        super(props);

        this.state = {
            all_tolet: []
        };
    }

    componentDidMount() {

        const header = {
            'Content-Type': 'application/json',
            'x-api-key': '2020'

        };

        axios.post('http://13.251.96.111:5000/api/all_posts', {}, {headers: header})
            .then(res => {

                if (res.status === 200) {

                    console.log("Response: ", res);

                    console.log("Response_Data: ", res.data.all_tolet);

                    this.setState({
                        all_tolet: res.data
                    });

                    return res;
                }
            })
            .catch(error => {
                if (error.response && error.response.status >= 400 && error.response.status < 500) {
                    console.log(error.response.data.response.message);

                }
            })

    }

    render() {

        const {all_tolet} = this.state

        return (
            <div>
                <div className="popular_property">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section_title mb-40 text-center">
                                    <h3>Popular Properties</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {all_tolet && all_tolet.map(tolet => (
                                <div className="col-xl-4 col-md-6 col-lg-4">

                                    <div className="single_property">

                                        <div className="property_thumb">

                                            <div className="property_tag">
                                                For Sale
                                            </div>

                                            <img src={tolet.length > 0 ? tolet.IMGURL[0] : null} width="300px" height="300px" alt=""/>


                                        </div>

                                        <div className="property_content">
                                            <div className="main_pro">
                                                <h3><a href="#">{tolet.Location}</a></h3>
                                                <div className="mark_pro">
                                                    <img src={require('../assets/img/svg_icon/location.svg')} alt=""/>
                                                    <span>{tolet.ContactNo}</span>
                                                </div>
                                                <span className="amount">From ৳ {tolet.Rent}</span>
                                            </div>
                                        </div>
                                        <div className="footer_pro">
                                            <ul>
                                                <li>
                                                    <div className="single_info_doc">
                                                        <img src={require('../assets/img/svg_icon/square.svg')} alt=""/>
                                                        <span>1200 Sqft</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="single_info_doc">
                                                        <img src={require('../assets/img/svg_icon/bed.svg')} alt=""/>
                                                        <span>2 Bed</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="single_info_doc">
                                                        <img src={require('../assets/img/svg_icon/bath.svg')} alt=""/>
                                                        <span>2 Bath</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }

                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="more_property_btn text-center">
                                    <a href="#" className="boxed-btn3-line">More Properties</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default HomeProperties;