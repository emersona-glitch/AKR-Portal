import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Container, } from '@material-ui/core';

import 'date-fns';

// all the imports to display the users information.
import UserName from '../UserName/UserName'
import UserContact from '../UserContact/UserContact'
import UserAddress from '../UserAddress/UserAdress'
import UserPersonal from '../UserPersonal/UserPersonal'
import UserKyudo from '../UserKyudo/UserKyudo'
import UserPayment from '../UserPayment/UserPayment'
import UserDojoTransfer from '../UserDojoTransfer/UserDojoTransfer'

class UserPage extends Component {

// this component doesn't do much to start, just renders some user info to the DOM
  componentDidMount = () => {
    this.props.dispatch({
      type: "FETCH_USER_INFO",
      payload: this.props.match.params.id
    })
    this.props.dispatch({ type: 'GET_DOJOS' });

  }

  getMyDojo = () => {
    this.props.dispatch({
      type: "GET_MY_DOJO"
    })

  }

    render() {
      return (
        <div>
  
          <h1 align="center">{this.props.store.info.fname} {this.props.store.info.lname}'s Information </h1> 
          <Container>
          

          {/* Edit user name data component */}
          <UserName id={this.props.match.params.id}/>

          {/* Edit user Contact data component */}
          <UserContact id={this.props.match.params.id}/>

          {/* Edit user Address data component */}
          <UserAddress id={this.props.match.params.id}/>

          {/* Edit user Personal data component */}
          <UserPersonal id={this.props.match.params.id}/>

           {/* Transfer dojo */}
           <UserDojoTransfer id={this.props.match.params.id} />

          {/* Edit user Kyudo data component */}
          <UserKyudo id={this.props.match.params.id}/>

          {/* Edit user Payment data data component */}
          {/* Needs to have diff views depending on the admin level of the user */}


          <UserPayment />
        </Container>
      </div>
    )
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage)