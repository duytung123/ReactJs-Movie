import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'infinite-react-carousel';
class LatestMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            id: [],
            movieId: [],
        };

        this.getList = this.getList.bind(this);

    }

    // sau khi render xong thi call ham nay de goi ajax

    componentDidMount() {
        this.getList();
        // this.getIdMovie();
    }

    getList() {

        axios.get('http://127.0.0.1:8000/api/listMovie', {
        })
            .then((response) => {
                const movie = response.data
                this.setState({ movie });
            })
            .catch((error) => {
                console.log(error)
            });
    }
    render() {
        const settings = {
            slidesToShow: 3,
            autoplay: true,
            pauseOnHover: false,
            virtualList: true,
            duration: 20,
            autoplaySpeed: 3000,
        };
        return (

            < div className="section" >
                <div className="container">
                    <div className="section-header">
                        latest movies
                    </div>
                    <Slider {...settings}>
                        <div>
                            {this.state.movie.map((movie, index) => {
                                return (
                                    <a key={index} href={`detailsMovie/${movie.id}`} className="movie-item">
                                        <img src="./images/movies/taytromcn.jpg" alt="" />
                                        <div className="movie-item-content">
                                            <div className="movie-item-title">
                                                {movie.name}

                                            </div>
                                            <div className="movie-infos">
                                                <div className="movie-info">
                                                    <i className="bx bxs-star" />
                                                    <span>{movie.rate}</span>
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
                                    </a>
                                )
                            })}
                        </div>
                    </Slider>
                </div>
            </div >


        );
    }
}

export default LatestMovie;