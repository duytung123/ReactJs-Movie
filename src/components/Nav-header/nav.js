
import React, { Component } from 'react';
import { logout, getClients } from '../Login/Login';
import axios from 'axios';
class Navheader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: []
        };
        this.getClients = this.getClients.bind(this);
    }
    componentDidMount() {
        this.getClients();
    }
    getClients() {

        axios.get('http://127.0.0.1:8000/api/getUser', {

            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
            .then((response) => {
                const clients = response.data;
                console.log(clients)
                this.setState({ clients: clients });

                console.log("ok")

            })
            .catch((error) => {
                console.log("lỗi");

            });
    }

    render() {
        const gettoken = localStorage.getItem("token");
        return (

            < div className="nav-wrapper" >
                <div className="container">
                    <div className="nav">
                        <a href="#" className="logo">
                            <i className="bx bx-movie-play bx-tada main-color" />Fl<span className="main-color">i</span> <span>x</span>
                        </a>
                        <ul className="nav-menu" id="nav-menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Genre</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">Series</a></li>
                            <li><a href="#">About</a></li>
                            <li>
                                {this.state.clients.map((client, item) => {
                                    return (
                                        <div key={item} >
                                            {
                                                gettoken
                                                    ?
                                                    <div>
                                                        <a onClick={logout} style={{ margin: '0 10px', cursor: 'pointer', color: 'red' }}>Logout</a> <span>{client.name}</span>
                                                    </div>
                                                    : null
                                            }
                                        </div>
                                    )
                                })}
                                {/* bug nhỏ ngay đoạn này :))) */}
                                {
                                    gettoken
                                        ?
                                        null
                                        : <a href="login" className="btn btn-hover"><span>Sign in</span></a>
                                }
                            </li>
                        </ul>

                        {/* MOBILE MENU TOGGLE */}
                        <div className="hamburger-menu" id="hamburger-menu">
                            <div className="hamburger" />
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

export default Navheader;


