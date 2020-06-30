import React, { Component } from "react";
import { Link } from 'react-router-dom';

class BlogSingle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <section className="single-area area-padding">
            <div className="service-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="single-content">
                                <div className="single__img">
                                    <img src="/images/think-img7.jpg" alt="service image" className="img-single"/>
                                    <div className="shared__date-item">
                                        <span>20</span>
                                        <span>jul</span>
                                    </div>
                                </div>
                                <div className="avivon-heading">
                                    <h2 className="avivon__title theme-afr">
                                        what you do today can improve all your tomorrows.</h2>
                                    <ul className="post__meta mb-30px">
                                        <li>by <a href="#">admin</a></li>
                                        <li><a href="#">3 comments</a></li>
                                    </ul>
                                    <p className="avivon__desc mb-30px">
                                        need something changed or is there something not quite
                                        working the way you envisaged? Is your van a little old
                                        and tired and need refreshing? Lorem Ipsum is simply dummy
                                        text of the printing and typesetting industry. Lorem Ipsum
                                        has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type specimen book. It has survived
                                        not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged. It was popularised
                                        in the 1960s with the release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently with desktop publishing
                                        software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                    <p className="avivon__desc mb-50px pb-50px theme-btb">
                                        lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to
                                        make a type specimen book. It has survived not only
                                        five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged. It was
                                        popularised in the 1960s with the release of Letraset sheets
                                        containing Lorem  passages, and more recently
                                        with desktop publishing software like.
                                    </p>
                                    <div className="tags__list mb-50px">
                                        <ul className="post__meta tag__meta meta__tag">
                                            <li><span>tags:</span><a className="tag__active-item" href="#">consulting,</a></li>
                                            <li><a href="#">business,</a></li>
                                            <li><a href="#">market,</a></li>
                                        </ul>
                                        <ul className="post__meta link__meta links__links">
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single__comments">
                                    <div className="post__boxed-item mb-50px">
                                        <div className="post__boxed-img__img post__boxed-img__bg"></div>
                                        <h3 className="post__boxed-item__title">christine eve</h3>
                                        <p className="post__boxed-item__desc">
                                            Lorem Ipsum is simply dummy text of the rinting and typesetting
                                            been the industry standard dummy
                                            text ever sincer nullam condimentum purus.</p>
                                        <a href="#" className="post__boxed-item__btn">
                                            view all posts <span className="fontello icon-angle-double-right"></span>
                                        </a>
                                    </div>
                                    <div className="comment__boxed-item">
                                        <h3 className="post__boxed-item__title">2 comments</h3>
                                        <div className="comments theme-btb mb-55px pb-50px">
                                            <div className="post__boxed-img__img post__boxed-img__bg"></div>
                                            <a href="#" className="comment__boxed-item__btn pull-right">
                                                reply <span className="fontello icon-angle-double-right"></span>
                                            </a>
                                            <h4 className="comment__boxed-item__title">david martin</h4>
                                            <ul className="comment__boxed-item__list">
                                                <li className="item-active">20 oct,2018</li>
                                                <li>4:00 pm</li>
                                            </ul>
                                            <p className="post__boxed-item__desc">
                                                lorem Ipsum is simply dummy text of the rinting and typesetting
                                                been the industry standard dummy text ever sincer condimentum
                                                purus. In non ex at ligula fringilla lobortis et aliquet.</p>
                                        </div>
                                        <div className="comments theme-btb mb-50px pb-50px">
                                            <div className="post__boxed-img__img post__boxed-img__bg-2"></div>
                                            <a href="#" className="comment__boxed-item__btn pull-right">
                                                reply <span className="fontello icon-angle-double-right"></span>
                                            </a>
                                            <h4 className="comment__boxed-item__title">jessica brown</h4>
                                            <ul className="comment__boxed-item__list">
                                                <li className="item-active">20 oct,2018</li>
                                                <li>4:00 pm</li>
                                            </ul>
                                            <p className="post__boxed-item__desc">
                                                lorem Ipsum is simply dummy text of the rinting and typesetting
                                                been the industry standard dummy text ever sincer condimentum
                                                purus. In non ex at ligula fringilla lobortis et aliquet.</p>
                                        </div>
                                    </div>
                                    <div className="comment__form">
                                        <h3 className="post__boxed-item__title">leave a comment</h3>
                                        <form action="#">
                                            <div className="input__box-input">
                                                <input type="text" placeholder="your name"/>
                                            </div>
                                            <div className="input__box-input email-box">
                                                <input type="email" placeholder="email address"/>
                                            </div>
                                            <textarea name="message" placeholder="message"></textarea>
                                            <button className="submit__btn-btn">send message
                                                <span className="fontello icon-angle-double-right"></span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="side-bar">
                                <div className="side__search mb-30px">
                                    <form action="#">
                                        <div className="input-box">
                                            <input type="text" className="fc--rounded" placeholder="search here"/>
                                        </div>
                                    </form>
                                </div>
                                <div className="side__shared details__widget post__shared mb-30px">
                                    <h3 className="side__bar-title">latest posts</h3>
                                    <div className="post-list theme-btb pb-20px mb-20px">
                                        <div className="post__img post__one"></div>
                                        <div className="post__body">
                                            <p className="post__body-title">
                                                <a href="/single-blog">what you do today can improve all your</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="post-list theme-btb pb-20px mb-20px">
                                        <div className="post__img post__two"></div>
                                        <div className="post__body">
                                            <p className="post__body-title">
                                                <a href="/single-blog">money markets rates findings the best</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="post-list mb-10px">
                                        <div className="post__img post__three"></div>
                                        <div className="post__body">
                                            <p className="post__body-title">
                                                <a href="/single-blog">many important brands have given us their</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="side__shared post__shared mb-30px">
                                    <h3 className="side__bar-title">categories</h3>
                                    <ul className="side__bar-links">
                                        <li>
                                            <a href="#">consulting</a>
                                            <span className="fontello icon-angle-double-right"></span>
                                        </li>
                                        <li>
                                            <a href="#">marketing</a>
                                            <span className="fontello icon-angle-double-right"></span>
                                        </li>
                                        <li>
                                            <a href="#">technology</a>
                                            <span className="fontello icon-angle-double-right"></span>
                                        </li>
                                        <li>
                                            <a href="#">businesses</a>
                                            <span className="fontello icon-angle-double-right"></span>
                                        </li>
                                        <li>
                                            <a href="#">bankcryptcy</a>
                                            <span className="fontello icon-angle-double-right"></span>
                                        </li>
                                        <li>
                                            <a href="#">professionals</a>
                                            <span className="fontello icon-angle-double-right"></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="side__shared tags__shared post__shared">
                                    <h3 className="side__bar-title">tags</h3>
                                    <ul className="side__bar-links">
                                        <li><a href="#">consulting,</a></li>
                                        <li><a href="#">business,</a></li>
                                        <li><a href="#">market,</a></li>
                                        <li><a href="#">advicsor,</a></li>
                                        <li><a href="#">corporate,</a></li>
                                        <li><a href="#">technology,</a></li>
                                        <li><a href="#">experts,</a></li>
                                        <li><a href="#">professionals,</a></li>
                                    </ul>
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

export default BlogSingle;