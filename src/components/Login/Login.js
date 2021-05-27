import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
class LoginForm extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isAuthenticated: false,
            message:"sadaswwqsd",
            token: null,
            clients: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.authenticate = this.authenticate.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });

    }
   
    authenticate(token) {
        this.setState({
            isAuthenticated: true,
            token: token
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/login', {
            email: this.state.email,
            password: this.state.password
        })

            .then((response) => {
                const token = response.data.token;
                const mes = response.data.message;
                localStorage.setItem("token", token);
                localStorage.setItem("isAuthenticated", true);
                this.setState({ token: token, isAuthenticated: true });
                alert(mes)
            })
            .catch((error) => {
                const status = error.response.status
                if (status === 401) {
                    const mes = error.response.data.message;
                    alert("Login Lỗi")
                }
            });
    }

    render() {
        console.log(this.state.isAuthenticated);
        if (this.state.isAuthenticated==true) {
            return (
                < Redirect to="/" />
            )   
        }

        return (
       
            <div className="img js-fullheight background">
                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center mb-5">
                                <h2 className="heading-section">Login #10</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-4">
                                <div className="login-wrap p-0">
                                    <h3 className="mb-4 text-center">Have an account?</h3>
                                    < form method="post" action="" className="signin-form" onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <input name="email" type="text" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Username" required />
                                        </div>
                                        <div className="form-group">
                                            <input name="password" value={this.state.password} onChange={this.handleChange} id="password-field" type="password" className="form-control" placeholder="Password" required />
                                            <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="form-control btn btn-primary submit px-3">Sign In</button>
                                        </div>
                                        <div className="form-group d-md-flex">
                                            <div className="w-50">
                                                <label className="checkbox-wrap checkbox-primary">Remember Me
                  <input type="checkbox" defaultChecked />
                                                    <span className="checkmark" />
                                                </label>
                                            </div>
                                            <div className="w-50 text-md-right">
                                                <a href="#" style={{ color: '#fff' }}>Forgot Password</a>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="w-100 text-center">— Or Sign In With —</p>
                                    <div className="social d-flex text-center">
                                        <a href="#" className="px-2 py-2 mr-md-1 rounded"><span className="ion-logo-facebook mr-2" /> Facebook</a>
                                        <a href="#" className="px-2 py-2 ml-md-1 rounded"><span className="ion-logo-twitter mr-2" /> Twitter</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        );
    }

}

export const logout = () => {
    localStorage.clear();
    window.location.href = '/';
}
export default LoginForm;
