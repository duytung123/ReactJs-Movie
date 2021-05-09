import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";



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
                ///const id = response.data[0].id
                console.log(movie)

                this.setState({ movie });

            })
            .catch((error) => {
                console.log(error)
            });
    }

    // getIdMovie() {

    //     axios.get('http://127.0.0.1:8000/api/getMovieId/' + this.state.id, {

    //     })

    //         .then((response) => {
    //             const movieId = response.data

    //             this.setState({ movieId });
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         });
    // }

    render() {
        return (

            < div className="section" >
                <div className="container">
                    <div className="section-header">
                        latest movies
                    </div>
                    <div className="movies-slide carousel-nav-center owl-carousel">
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
                </div>
            </div >


        );
    }
}

export default LatestMovie;