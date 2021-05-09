import React, { Component } from 'react';
import Navheader from '../Nav-header/nav';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import axios from 'axios';




class DetailsMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {

            moviesss: [],
        };

        this.getIdMovie = this.getIdMovie.bind(this);

    }

    // sau khi render xong thi call ham nay de goi ajax

    componentDidMount() {
        this.getIdMovie();
    }

    async getIdMovie() {
        // const id = this.props.location.search
        // console.log(id)
        await axios.get('http://127.0.0.1:8000/api/getMovieId/' + this.props.match.params.id, {

        })


            .then((response) => {
                const moviesss = response.data
                const id1 = response.data[0].id
                alert("ád")

                this.setState({ moviesss, id1 });
            })
            .catch((error) => {
                console.log(error)
            });
    }
    render() {
        return (
            <div>
                <Navheader />
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Library
                        </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
                <div className="content">
                    {this.state.moviesss.map((movies) => {
                        return (
                            <div className="video-play">
                                <video id="player" controls width="100%" height="300px">
                                    <source src={movies.id_film} type="video/mp4" />
                                </video>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }

}




export default (DetailsMovie)