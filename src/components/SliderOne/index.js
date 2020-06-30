import React, { Component } from "react";
import { Link } from 'react-router-dom';

class SliderOne extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="slider-one">
                <div className="slider-one__carousel">
                <swiper :options="swiperOptions">
                <swiper-slide>
                <div className="item slider-one__slider-1" style="background-image: url(/images/slider_bg1.jpg);">
                    <div className="container slider__content">
                    <p className="slider-one__text">we make difference</p>
                    <div className="slider-one__title tp-caption tp-resizeme">consulting<br/> agency for<br/> every<br/> business</div>
                    <a href="#" className="get-btn" style=""><span>get started</span></a>
                    
                    </div>
                    
                </div>
                
                </swiper-slide>

                <swiper-slide>
                    <div className="item slider-one__slider-1" style="background-image: url(/images/slider_bg2.jpg);">
                    <div className="container slider__content">
                        <p className="slider-one__text">we make difference</p>
                        <div className="slider-one__title tp-caption tp-resizeme">consulting<br/> agency for<br/> every<br/> business</div>
                        <a href="#" className="get-btn" style=""><span>get started</span></a>
                        
                    </div>
                    
                    </div>
                
                </swiper-slide>
                    <div className="swiper-button-prev" style="color: #ff7e00" slot="button-prev"></div>
                    <div className="swiper-button-next" style="color: #ff7e00" slot="button-next"></div>
                </swiper>
                </div>
            </section>
        )
    }
}

export default SliderOne;