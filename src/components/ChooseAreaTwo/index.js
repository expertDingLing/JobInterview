import React, { Component } from "react";
import { Link } from 'react-router-dom';

class ChooseAreaTwo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="choose-area responsive-content choose--area avivon-pt section-pb text-center">
                <div className="choose-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 choose-box">
                                <div className="choose-popup">
                                    <img src="/images/service14.jpg" alt="choose image"/>
                                    <p className="offer__desc mt-50px mb-50px">
                                        tincidunt elit magnis nulla facilisis sagittis
                                        maecenas.
                                        sapien nunc amet ultrices, dolores sit ipsum velit
                                        purus aliquet, massa fringilla leo orci. lorem ipsum
                                        dolors sit amet elit magnis amet ultrices purus aliquet.
                                    </p>
                                    <h3 className="quote__sign">Jessica Brown</h3>
                                    <span className="quote__span">founder of MockRabbit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ChooseAreaTwo;