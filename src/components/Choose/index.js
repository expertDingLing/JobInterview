import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Choose extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="choose-area area-padding text-center video-section">
                <div className="choose-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 primary-padding-2">
                                <div className="avivon-heading">
                                    <h2 className="avivon__title second__title">Why choosing SCREENLE?</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12 choose-box choose-popup-box mb-60px">
                                <div className="choose-popup">
                                    {/* <img src="url('../../public/static/images/breadcrumb-img.jpg')"/> */}
                                    <video className="col-md-12 col-sm-12 col-xs-12 choose-box choose-popup-box mb-60px" controls>
                                        <source src="static/images/mov_bbb.mp4" type="video/mp4"/>
                                        <source src="static/images/movie.ogg" type="video/ogg"/>
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Choose;