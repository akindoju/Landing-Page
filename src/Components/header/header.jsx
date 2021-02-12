import React, { Component } from 'react';
import SignUp from '../sign-up/sign-up';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpHidden: true,
    };
  }

  signUpHiddenHandler = (event) => {
    const { signUpHidden } = this.state;
    event.preventDefault();
    this.setState({
      signUpHidden: !signUpHidden,
    });
  };

  render() {
    const { toggleDrawer } = this.props;
    const { signUpHidden } = this.state;
    return (
      <div className="header">
        <h1>Simple React Landing Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className="toggle" onClick={toggleDrawer}>
          <i className="fa fa-bars fa-2x"></i>
        </button>
        <button className="signUpBtn" onClick={this.signUpHiddenHandler}>
          Sign Up
        </button>
        {signUpHidden ? null : <SignUp onHide={this.signUpHiddenHandler} />}
      </div>
    );
  }
}

export default Header;
