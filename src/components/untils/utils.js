import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
// import './public/bla.css';
class utils extends Component {
    render() {
        const settings = {
            slidesToShow: 4
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>


                </Slider>
            </div>
        );
    }
}

export default utils;