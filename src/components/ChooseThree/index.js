import React, { Component } from "react";
import { Link } from 'react-router-dom';

class ChooseThree extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="choose-area responsive-content choose--area area-padding">
                <div className="choose-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-60px choose-box">
                                <div className="choose-popup">
                                    <img src="images/service22.jpg" alt="choose image"/>
                                </div>
                            </div>
                        </div>
                        <div className="row choose-content">
                            <div className="col-md-4 col-sm-12 col-xs-12">
                                <div className="avivon-heading mission-heading">
                                    <h2 className="avivon__title">
                                        we are trusted by
                                        more than 8,700
                                        clients</h2>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="choose-same mission-same">
                                    <div className="choose__desc">
                                        <p>tincidunt elit magnis nulla facilisis sagittis maecenas.
                                            Sapien nunced amet ultrices,
                                            dolores sit ipsum velit purus aliquet,
                                            massa fringilla leo orci. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 ">
                                <div className="choose-same rpl-content mission-same">
                                    <div className="choose__desc">
                                        <p>tincidunt elit magnis nulla facilisis sagittis maecenas.
                                            Sapien nunced amet ultrices,
                                            dolores sit ipsum velit purus aliquet,
                                            massa fringilla leo orci. </p>
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

export default ChooseThree;