import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';

import {
  Link,
} from '@material-ui/core';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <LoginForm />

        <center>
          <Link
            component="button"
            style={{ fontSize: 20, fontWeight: "bold"}}
            color="textPrimary"
            variant="body1"
            size="large"
            className="btn btn_asLink"
            onClick={() => {
              this.props.history.push('/registration')
            }}
          >
            Register
          </Link>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
