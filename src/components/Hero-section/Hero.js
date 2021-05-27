import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
class Hero extends Component {
    render() {
        const settings = {

            autoplay: true,
            pauseOnHover: false,
            virtualList: true,
            duration: 20,
            autoplaySpeed: 3000,
        };
        const settings2 = {
            slidesToShow: 4,
            autoplay: true,
            pauseOnHover: false,
            virtualList: true,
            duration: 20,
            autoplaySpeed: 3000,
        };
        return (

            < div className="hero-section" >
                <Slider {...settings}>

                    <div className="hero-slide-item">
                        <img src="./images/black-banner.png" alt="" />
                        <div className="overlay" />

                        <div className="hero-slide-item-content">
                            <div className="item-content-wraper">
                                <div className="item-content-title top-down">
                                    Black Panther
                                    </div>
                                <div className="movie-infos top-down delay-2">
                                    <div className="movie-info">
                                        <i className="bx bxs-star" />
                                        <span>9.5</span>
                                    </div>
                                    <div className="movie-info">
                                        <i className="bx bxs-time" />
                                        <span>120 mins</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>HD</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>16+</span>
                                    </div>
                                </div>
                                <div className="item-content-description top-down delay-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt
                                    non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias
                                    ratione mollitia accusantium, facere ab suscipit.
                                    </div>
                                <div className="item-action top-down delay-6">
                                    <a href="#" className="btn btn-hover">
                                        <i className="bx bxs-right-arrow" />
                                        <span>Watch now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="hero-slide-item">
                            <img src="./images/supergirl-banner.jpg" alt="" />
                            <div className="overlay" />
                            <div className="hero-slide-item-content">
                                <div className="item-content-wraper">
                                    <div className="item-content-title top-down">
                                        Supergirl
                                    </div>
                                    <div className="movie-infos top-down delay-2">
                                        <div className="movie-info">
                                            <i className="bx bxs-star" />
                                            <span>9.5</span>
                                        </div>
                                        <div className="movie-info">
                                            <i className="bx bxs-time" />
                                            <span>120 mins</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>HD</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>16+</span>
                                        </div>
                                    </div>
                                    <div className="item-content-description top-down delay-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt
                                        non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias
                                        ratione mollitia accusantium, facere ab suscipit.
                                    </div>
                                    <div className="item-action top-down delay-6">
                                        <a href="#" className="btn btn-hover">
                                            <i className="bx bxs-right-arrow" />
                                            <span>Watch now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="hero-slide-item">
                            <img src="./images/wanda-banner.jpg" alt="" />
                            <div className="overlay" />
                            <div className="hero-slide-item-content">
                                <div className="item-content-wraper">
                                    <div className="item-content-title top-down">
                                        Wanda Vision
                                        </div>
                                    <div className="movie-infos top-down delay-2">
                                        <div className="movie-info">
                                            <i className="bx bxs-star" />
                                            <span>9.5</span>
                                        </div>
                                        <div className="movie-info">
                                            <i className="bx bxs-time" />
                                            <span>120 mins</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>HD</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>16+</span>
                                        </div>
                                    </div>
                                    <div className="item-content-description top-down delay-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt
                                        non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias
                                        ratione mollitia accusantium, facere ab suscipit.
                                    </div>
                                    <div className="item-action top-down delay-6">
                                        <a href="#" className="btn btn-hover">
                                            <i className="bx bxs-right-arrow" />
                                            <span>Watch now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                {/* movie 2 */}
                <div >
                    <Slider {...settings2}>
                        <div className="movie-item">
                            <img src="./images/series/supergirl.jpg" alt="" />
                            <div className="movie-item-content">
                                <div className="movie-item-title">
                                    Supergirl
                                </div>
                                <div className="movie-infos">
                                    <div className="movie-info">
                                        <i className="bx bxs-star" />
                                        <span>9.5</span>
                                    </div>
                                    <div className="movie-info">
                                        <i className="bx bxs-time" />
                                        <span>120 mins</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>HD</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>16+</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-item">
                            <img src="./images/movies/captain-marvel.png" alt="" />
                            <div className="movie-item-content">
                                <div className="movie-item-title">
                                    Captain Marvel
            </div>
                                <div className="movie-infos">
                                    <div className="movie-info">
                                        <i className="bx bxs-star" />
                                        <span>9.5</span>
                                    </div>
                                    <div className="movie-info">
                                        <i className="bx bxs-time" />
                                        <span>120 mins</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>HD</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>16+</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-item">
                            <img src="./images/cartoons/demon-slayer.jpg" alt="" />
                            <div className="movie-item-content">
                                <div className="movie-item-title">
                                    Infinity Train
            </div>
                                <div className="movie-infos">
                                    <div className="movie-info">
                                        <i className="bx bxs-star" />
                                        <span>9.5</span>
                                    </div>
                                    <div className="movie-info">
                                        <i className="bx bxs-time" />
                                        <span>120 mins</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>HD</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>16+</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-item">
                            <img src="./images/movies/blood-shot.jpg" alt="" />
                            <div className="movie-item-content">
                                <div className="movie-item-title">
                                    Bloodshot
            </div>
                                <div className="movie-infos">
                                    <div className="movie-info">
                                        <i className="bx bxs-star" />
                                        <span>9.5</span>
                                    </div>
                                    <div className="movie-info">
                                        <i className="bx bxs-time" />
                                        <span>120 mins</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>HD</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>16+</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-item">
                            <img src="./images/series/wanda.png" alt="" />
                            <div className="movie-item-content">
                                <div className="movie-item-title">
                                    Wanda Vision
            </div>
                                <div className="movie-infos">
                                    <div className="movie-info">
                                        <i className="bx bxs-star" />
                                        <span>9.5</span>
                                    </div>
                                    <div className="movie-info">
                                        <i className="bx bxs-time" />
                                        <span>120 mins</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>HD</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>16+</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-item">
                            <img src="./images/movies/bat-man.jpg" alt="" />
                            <div className="movie-item-content">
                                <div className="movie-item-title">
                                    The Dark Knight
            </div>
                                <div className="movie-infos">
                                    <div className="movie-info">
                                        <i className="bx bxs-star" />
                                        <span>9.5</span>
                                    </div>
                                    <div className="movie-info">
                                        <i className="bx bxs-time" />
                                        <span>120 mins</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>HD</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>16+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>


        );
    }
}

export default Hero;