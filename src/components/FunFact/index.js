import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {countTo} from 'vue-count-to';

class FunFact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section v-observe-visibility="onVisibilityChange" className="funfact-area responsive-content parallax-area area-padding text-center">
                <div className="funfact-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 primary-padding-2">
                                <div className="avivon-heading">
                                    <h2 className="avivon__title seven__title">numbers speak</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6 col-xs-12  fact-border fun-countdown">
                                <div className="funfact-shared ">
                                    <div className="fun__icon">
                                        <span className="fontello icon-wallet"></span>
                                    </div>
                                    <div className="fun__fact">
                                        <span className="counter">
                                            {/* <countTo :startVal='0' :endVal='startCounter ? 870 : 0' :duration='3000'></countTo> */}
                                        </span>
                                    </div>
                                    <div className="fun__desc">
                                        <span className="team__title-span">businesses chooses</span><br/>
                                        <span className="team__title-span">avivon agency</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12  fact-border fun-countdown">
                                <div className="funfact-shared">
                                    <div className="fun__icon">
                                        <span className="fontello icon-jigsaw"></span>
                                    </div>
                                    <div className="fun__fact">
                                        <span className="counter">
                                            {/* <countTo :startVal='0' :endVal='startCounter ? 970 : 0' :duration='3000'></countTo> */}
                                        </span>
                                    </div>
                                    <div className="fun__desc">
                                        <span className="team__title-span">projects are</span><br/>
                                        <span className="team__title-span">completed by avivon</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 col-lg-offset-0 col-md-offset-0 col-sm-offset-3 col-xs-offset-0 fun-countdown">
                                <div className="funfact-shared rpl-content">
                                    <div className="fun__icon">
                                        <span className="fontello icon-moneyhand"></span>
                                    </div>
                                    <div className="fun__fact">
                                        <span className="counter">
                                            {/* <countTo :startVal='0' :endVal='startCounter ? 420 : 0' :duration='3000'></countTo> */}
                                        </span>
                                    </div>
                                    <div className="fun__desc">
                                        <span className="team__title-span">customers are satisfied</span><br/>
                                        <span className="team__title-span">with our services</span>
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

export default FunFact;