import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from 'react-redux'

import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    validateForm() {
        return this.props.email.length > 0;
    }

    handleEmailChange = event => {
        this.props.onEmailChange(event.target.value);
    }

    handleSubmit = event => {
        event.preventDefault();
        alert('Login successful');
        this.props.onSuccessLoginIncrementCounter();
    }

    render() {
        return (
            <div className="Login">
                <h1>Login count: {this.props.count}</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.props.email}
                            onChange={this.handleEmailChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSuccessLoginIncrementCounter: () => {
        dispatch({type:"LOGIN_COUNT"});
    },
    onEmailChange: (email) => {
        dispatch({type:"UPDATE_EMAIL", email});
    }
})

Login = connect(mapStateToProps, mapDispatchToProps)(Login)

export default Login;