import React, { Component } from "react";
import { Link } from 'react-router-dom';

class OfferFour extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="offer-area offer--area responsive-content skill-area our-mission-area theme-bg-gray">
                <div className="offer-fluid">
                    <div className="container-fluid">
                        <div className="row offer-content">
                            <div className="col-md-6 col-sm-6 col-xs-12 no-padding-lr">
                                <div className="offer-quote mission-bg"></div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 offer-list-box mission-list-box">
                                <div className="offer-list">
                                    <div className="avivon-heading">
                                        <h2 className="avivon__title">
                                            our services place a <br/>
                                            strong impact</h2>
                                        <ul className="avivon__list mission__list mt-50px mb-40px">
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                tincidunt elit magni nulla facilisis sagittis maecenas
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                sapien nunc amet ultrices, dolores sit ipsum
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                velit purus aliquet, massa fringilla leo orci
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                lorem ipsum dolors sit amet elit magnis
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                amet ultrices purus aliquet
                                            </li>
                                        </ul>
                                        <a href="#" className="avivon__btn">
                                            get started <span className="fontello icon-angle-double-right"></span>
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

export default OfferFour;