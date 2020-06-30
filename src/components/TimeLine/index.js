import React, { Component } from "react";
import { Link } from 'react-router-dom';

class TimeLine extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="timeline-area responsive-content area-padding theme-bg-gray">
                <div className="timeline-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 primary-padding-3">
                                <div className="avivon-heading">
                                    <h2 className="avivon__title">how we started avivon</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-list">
                                    <div className="happening row">
                                        <div className="happening__period col-md-3 col-sm-6 col-xs-12">
                                            <div className="time__item-bg time__bg"></div>
                                            <h4 className="year__item-title">1996</h4>
                                        </div>
                                        <div className="happening__desc col-md-8 col-sm-6 col-sm-offset-0 col-xs-offset-0 col-md-offset-1">
                                            <h3 className="time__item-title">company was founded</h3>
                                            <p className="time__item-desc">
                                                there are many variations of passages of lorem Ipsum available
                                                but the majority have suffered alteration in some form
                                                injected which don't look of available but the
                                                majority have suffered even slightly believable.</p>
                                        </div>
                                    </div>
                                    <div className="happening row">
                                        <div className="happening__period col-md-3 col-sm-6 col-xs-12">
                                            <div className="time__item-bg time__bg-2"></div>
                                            <h4 className="year__item-title">2000</h4>
                                        </div>
                                        <div className="happening__desc col-md-8 col-sm-6 col-sm-offset-0 col-xs-offset-0 col-md-offset-1">
                                            <h3 className="time__item-title">company is growing</h3>
                                            <p className="time__item-desc">
                                                there are many variations of passages of lorem Ipsum available
                                                but the majority have suffered alteration in some form
                                                injected which don't look of available but the
                                                majority have suffered even slightly believable.</p>
                                        </div>
                                    </div>
                                    <div className="happening row">
                                        <div className="happening__period col-md-3 col-sm-6 col-xs-12">
                                            <div className="time__item-bg time__bg-3"></div>
                                            <h4 className="year__item-title">2007</h4>
                                        </div>
                                        <div className="happening__desc col-md-8 col-sm-6 col-sm-offset-0 col-xs-offset-0 col-md-offset-1">
                                            <h3 className="time__item-title">we become the leading company</h3>
                                            <p className="time__item-desc">
                                                there are many variations of passages of lorem Ipsum available
                                                but the majority have suffered alteration in some form
                                                injected which don't look of available but the
                                                majority have suffered even slightly believable.</p>
                                        </div>
                                    </div>
                                    <div className="happening row">
                                        <div className="happening__period happening__periodlast theme-afr col-md-3 col-sm-6 col-xs-12">
                                            <div className="time__item-bg time__bg-4"></div>
                                            <h4 className="year__item-title">2018</h4>
                                        </div>
                                        <div className="happening__desc happening__desc2 col-md-8 col-md-offset-1 col-sm-6 col-xs-12 col-sm-offset-0 col-xs-offset-0">
                                            <h3 className="time__item-title">among top 100 in future 500</h3>
                                            <p className="time__item-desc">
                                                there are many variations of passages of lorem Ipsum available
                                                but the majority have suffered alteration in some form
                                                injected which don't look of available but the
                                                majority have suffered even slightly believable.</p>
                                        </div>
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

export default TimeLine;