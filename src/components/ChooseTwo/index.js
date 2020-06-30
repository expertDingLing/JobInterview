import React, { Component } from "react";
import { Link } from 'react-router-dom';

class ChooseTwo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="choose-area responsive-content choose--area area-padding text-center">
                <div className="choose-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 primary-padding">
                                <div className="avivon-heading">
                                    <h2 className="avivon__title fourth__title">making differences</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row choose-content">
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="choose-same">
                                    <div className="choose__icon">
                                        <span className="fontello icon-chart"></span>
                                    </div>
                                    <div className="choose__title">
                                        <h3>business growth</h3>
                                    </div>
                                    <div className="choose__desc">
                                        <p>sed quia magni dolores eos qui
                                            ratione voluptatem sequi
                                            nesciunt eque porro.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="choose-same">
                                    <div className="choose__icon">
                                        <span className="fontello icon-exploration"></span>
                                    </div>
                                    <div className="choose__title">
                                        <h3>finance advice</h3>
                                    </div>
                                    <div className="choose__desc">
                                        <p>sed quia magni dolores eos qui
                                            ratione voluptatem sequi
                                            nesciunt eque porro.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 col-lg-offset-0 col-md-offset-0 col-sm-offset-3 col-xs-offset-0">
                                <div className="choose-same rpl-content">
                                    <div className="choose__icon">
                                        <span className="fontello  icon-options"></span>
                                    </div>
                                    <div className="choose__title">
                                        <h3>global solution</h3>
                                    </div>
                                    <div className="choose__desc">
                                        <p>sed quia magni dolores eos qui
                                            ratione voluptatem sequi
                                            nesciunt eque porro.</p>
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

export default ChooseTwo;