import React, { Component } from "react";
import { Link } from 'react-router-dom';

class OfferThree extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="offer-area responsive-content offer--area theme-bg-gray">
                <div className="offer-fluid">
                    <div className="container-fluid">
                        <div className="row offer-content">
                            <div className="col-md-6 col-sm-6 col-xs-12 no-padding-lr">
                                <div className="offer-quote"></div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 offer-list-box">
                                <div className="offer-list">
                                    <div className="avivon-heading offer-title mb-80px">
                                        <h2 className="avivon__title">
                                            a focused team with a <br/>
                                            specialized skills</h2>
                                    </div>
                                    <div className="offer-item">
                                        <div className="same-offer">
                                            <div className="offer__title">
                                                <span className="fontello icon-human-resources offer-icon"></span>
                                                <h3>about avivon consultancy</h3>
                                                <p className="offer__desc mt-30px mb-40px">
                                                    tincidunt elit magnis nulla facilisis sagittis m aecenas. sapien nunc amet
                                                    ultrices,
                                                    doloresi ipsum velit purus aliquet, massa fringilla leo orci.
                                                    lorem ipsum dolors sit amet elit magni amet ultrices purus aliquet.
                                                </p>
                                                <h3 className="quote__sign">Jessica Brown</h3>
                                                <span className="quote__span">founder of MockRabbit</span>
                                            </div>
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

export default OfferThree;