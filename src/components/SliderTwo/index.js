import React, { Component } from "react";
import { Link } from 'react-router-dom';

class SliderTwo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="slider-one">
                <div className="slider-one__carousel">
                <swiper :options="swiperOptions">
                <swiper-slide>
                <div className="item slider-one__slider-1" style="background-image: url(/images/home2-slidebg-2.jpg);">
                    <div className="container slider__content" style="text-align: center">
                    <a className="mediabox video-play-btn" href="https://www.youtube.com/watch?v=dFBKl1pYn0w" title="Play Video" style="transition: none 0s ease 0s; text-align: inherit; line-height: 134px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 30px;">
                        <span className="fontello icon-play" style="color: #ff7e00; text-align: inherit; line-height: 134px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 30px;"></span>
                    </a>
                    <div className="slider-one__title tp-caption tp-resizeme">we provide solution to<br> grow businesses</div>
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

export default SliderTwo;