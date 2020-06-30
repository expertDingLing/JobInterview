import React, { Component } from "react";
import { Link } from 'react-router-dom';

class OfferTwo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section v-observe-visibility="onVisibilityChange" className="offer-area responsive-content inspire-area area-padding">
                <div className="offer-fluid">
                    <div className="container">
                        <div className="row offer-content">
                            <div className="inspire-list-box">
                                <div className="inspire-img mb-30px"></div>
                                <div className="story-content">
                                    <div className="top-story">
                                        <span className="fontello icon-achievement success__icon"></span>
                                        <span className="story__numbr counter">
                                            <countTo :startVal='0' :endVal='startCounter ? 98903 : 0' :duration='3000'></countTo>
                                        </span>
                                        <span className="story__numbr">+</span>
                                    </div>
                                    <p className="success__desc">client success stories by the help of avivon</p>
                                </div>
                            </div>
                            <div className="offer-list-box">
                                <div className="offer-list">
                                    <div className="avivon-heading">
                                        <h2 className="avivon__title inspire-title">
                                            we inspire and help <br/>
                                            our customers</h2>
                                        <p className="avivon__desc mt-45px mb-40px">
                                            we inspire and help our customers expand their markets there are many
                                            variations of passages of lorem ipsum is simply free text available but
                                            majority have suffered alteration in some area that is not form by injected humour or
                                            randomised words don’t know which don't look even slightly believable.
                                        </p>
                                        <a href="#" className="get__btn">get started
                                            <span className="fontello icon-angle-double-right"></span>
                                        </a>
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

export default OfferTwo;