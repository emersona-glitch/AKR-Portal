import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import {
  Button,
  TextField,
} from '@material-ui/core';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <form className="formPanel" onSubmit={this.login}>
        <h2>Login</h2>
        {this.props.store.errors.loginMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.loginMessage}
          </h3>
        )}
        <div>
          <TextField
            label="Username"
            type="text"
            name="username"
            variant="outlined"
            margin="dense"
            value={this.state.username}
            required
            onChange={this.handleInputChangeFor('username')}
          />
        </div>
        <div>
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            margin="dense"
            value={this.state.password}
            required
            onChange={this.handleInputChangeFor('password')}
          />
        </div>
        <div>
          <Button
            style={{ marginTop: 10}}
            variant="contained"
            color="primary"
            className="btn"
            value="submit"
            type="submit"
          >
            Log In
          </Button>
          {/* <input className="btn" type="submit" name="submit" value="Log In" /> */}
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(LoginForm);
