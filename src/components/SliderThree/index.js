import React, { Component } from "react";
import { Link } from 'react-router-dom';

class SliderThree extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="slider-one">
                <div className="slider-one__carousel">
                <swiper :options="swiperOptions">
                <swiper-slide>
                <div className="item slider-one__slider-1" style="background-image: url(/images/home3-slidebg-1.jpg);">
                    <div className="container slider__content mt-110px" style="text-align: center">
                    <div className="slider-one__title tp-caption tp-resizeme">finance &<br/> consulting business</div>
                    <p className="slider-one__text">sed quia lipsum dolor sit atur adipiscing elit is nunc <br/> quis tellus sed ligula porta ultricies.</p>
                    <a href="#" className="get-btn" style=""><span>get started</span></a>
                    
                    </div>
                    
                </div>
                
                </swiper-slide>
                </swiper>
                </div>
            </section>
        )
    }
}

export default SliderThree;