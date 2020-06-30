import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Team extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="team-area responsive-content area-padding text-center">
                <div className="team-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 primary-padding-3">
                                <div className="avivon-heading">
                                    <h2 className="avivon__title five__title">team members</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row team-content">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="team-same">
                                    <div className="team__img mb-30px">
                                        <img src="/images/team1.jpg" alt="team image"/>
                                        <div className="team__img-links">
                                            <ul>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team__title">
                                        <h3 className="team__title-title">kevin martin</h3>
                                        <span className="team__title-span">developer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="team-same">
                                    <div className="team__img mb-30px">
                                        <img src="/images/team2.jpg" alt="team image"/>
                                        <div className="team__img-links">
                                            <ul>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team__title">
                                        <h3 className="team__title-title">jessica brown</h3>
                                        <span className="team__title-span">designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="team-same">
                                    <div className="team__img mb-30px">
                                        <img src="/images/team3.jpg" alt="team image"/>
                                        <div className="team__img-links">
                                            <ul>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team__title">
                                        <h3 className="team__title-title">mike hardson</h3>
                                        <span className="team__title-span">photographer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="team-same rpl-content">
                                    <div className="team__img mb-30px">
                                        <img src="/images/team4.jpg" alt="team image"/>
                                        <div className="team__img-links">
                                            <ul>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team__title">
                                        <h3 className="team__title-title">camila rose</h3>
                                        <span className="team__title-span">manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Team;