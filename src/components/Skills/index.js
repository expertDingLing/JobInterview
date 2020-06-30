import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Skills extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="offer-area offer--area responsive-content skill-area theme-bg-gray">
                <div className="offer-fluid">
                    <div className="container-fluid">
                        <div className="row offer-content">
                            <div className="offer-list-box skill-list-box">
                                <div className="offer-list">
                                    <div className="avivon-heading skill-title mb-50px">
                                        <h2 className="avivon__title">
                                            professional skills</h2>
                                        <p className="avivon__desc mt-25px">
                                            tincidunt elit magnis nulla facilisis sagittis maecenas. <br/>
                                            sapien nunc amet ultrices dolores sit ipsum.</p>
                                    </div>
                                    <div className="offer-item">
                                        <div className="same-offer">
                                            <div className="skills">
                                                
                                                <div className="skill">
                                                    <skill-bar skill="consultancy" barSize="small" level="98" barColor="#ff7e00" />
                                                </div>
                                                
                                                <div className="skill">
                                                    <skill-bar skill="marketing" barSize="small" level="88" barColor="#ff7e00" />
                                                </div>
                                                
                                                <div className="skill">
                                                    <skill-bar skill="technology" barSize="small" level="78" barColor="#ff7e00" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-bg-area">
                                <div className="offer-quote"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills;