import React, { Component } from "react";
import { Link } from 'react-router-dom';

import scene1Macbook from '../../../image/slides/scene1/macbook.png';
import scene2Left from '../../../image/slides/scene2/left.png';
import scene2Middle from '../../../image/slides/scene2/middle.png';
import scene2Right from '../../../image/slides/scene2/right.png';

class Slider extends Component {
  render() {
    return (
        <section id="feature_slider" className="">
            <article
                className="slide active"
                id="showcasing"
                style={{
                    background: "url('images/backgrounds/landscape.png') center top repeat-x",
                    display: "block"
                }}
            >
                <img
                    className="asset left-30 sp600 t120 z1"
                    src={scene1Macbook}
                    style={{
                        left: 513.5,
                        top: 120,
                        zIndex: 1,
                        display: "inline"
                    }}
                />
                <div
                    className="info"
                    style={{
                        display: "block"
                    }}
                >
                    <h2>Beautiful theme for showcasing your works.</h2>
                </div>
            </article>
            <article
                className="slide"
                id="ideas"
                style={{
                    background: "url('images/backgrounds/aqua.jpg') center top repeat-x",
                    display: "none"
                }}
            >
                <div
                    className="info"
                    style={{
                        display: "none"
                    }}
                >
                    <h2>We love to turn ideas into beautiful things.</h2>
                </div>
                <img
                    className="asset left-480 sp600 t260 z1"
                    src={scene2Left}
                    style={{
                        left: -841,
                        top: 260,
                        zIndex: 1,
                        display: "inline"
                    }}
                />
                <img
                    className="asset left-210 sp600 t213 z2"
                    src={scene2Middle}
                    style={{
                        left: -854,
                        top: 213,
                        zIndex: 2,
                        display: "inline"
                    }}
                />
                <img
                    className="asset left60 sp600 t260 z1"
                    src={scene2Right}
                    style={{
                        left: -849,
                        top: 260,
                        zIndex: 1,
                        display: "inline"
                    }}
                />
            </article>
            <article
                className="slide"
                id="tour"
                style={{
                    background: "background: url('images/backgrounds/color-splash.jpg') center top repeat-x",
                    display: "none"
                }}
            >
                <img
                    className="asset left-472 sp650 t210 z3"
                    src="images/slides/scene3/ipad.png"
                    style="left: -558px; top: 210px; z-index: 3; display: inline;"
                    style={{
                        left: -558,
                        top: 210,
                        zIndex: 3,
                        display: "inline"
                    }}
                />
                <img
                    className="asset left-365 sp600 t270 z4"
                    src="images/slides/scene3/iphone.png"
                    style={{
                        left: -485,
                        top: 270,
                        zIndex: 4,
                        display: "inline"
                    }}
                />
                <img
                    className="asset left-350 sp450 t135 z2"
                    src="images/slides/scene3/desktop.png"
                    style={{
                        left: -742,
                        top: 135,
                        zIndex: 2,
                        display: "inline"
                    }}
                />
                <img
                    className="asset left-185 sp550 t220 z1"
                    src="images/slides/scene3/macbook.png"
                    style={{
                        left: -746,
                        top: 220,
                        zIndex: 1,
                        display: "inline"
                    }}
                />
                <div
                    className="info"
                    style={{
                        display: "none"
                    }}
                >
                    <h2>Fully Responsive theme</h2>
                    <a href="features.html">TOUR THE PRODUCT</a>
                </div>
            </article>
            <article
                className="slide"
                id="responsive"
                style={{
                    background: "background: url('images/backgrounds/indigo.jpg') center top repeat-x",
                    display: "none"
                }}
            >
                <img
                    className="asset left-472 sp600 t120 z3"
                    src="images/slides/scene4/html5.png"
                    style={{
                        left: -732,
                        top: 120,
                        zIndex: 3,
                        display: "inline"
                    }}
                />
                <img
                    className="asset left-190 sp500 t120 z2"
                    src="images/slides/scene4/css3.png"
                    style={{
                        left: -732,
                        top: 120,
                        zIndex: 2,
                        display: "inline"
                    }}
                />
                <div
                    className="info"
                    style="display: none;"
                    style={{
                        display: "none"
                    }}
                >
                    <h2>
                        Responsive <strong>HTML5 &amp; CSS3</strong>
                        Theme
                    </h2>                
                </div>
            </article>
        </section>    
    )
  }
}

export default Slider;
