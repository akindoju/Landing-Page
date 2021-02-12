import React, { Component } from 'react';
import SideBar from '../side-bar/side-bar';
import SignUp from '../sign-up/sign-up';
import './header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggleHidden: true,
      signUpHidden: true,
    };
  }

  render() {
    const { toggleHidden, signUpHidden } = this.state;
    return (
      <div className="header">
        <h1>Simple React Landing Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button
          className="toggle"
          onClick={(event) => {
            event.preventDefault();
            this.setState({
              toggleHidden: !toggleHidden,
            });
          }}
        >
          <i className="fa fa-bars fa-2x"></i>
        </button>
        <button
          className="signUpBtn"
          onClick={(event) => {
            event.preventDefault();
            this.setState(
              {
                signUpHidden: !signUpHidden,
              },
              console.log('Clicked')
            );
          }}
        >
          Sign Up
        </button>
        {signUpHidden ? null : <SignUp />}
        {toggleHidden ? null : <SideBar />}
      </div>
    );
  }
}

export default Header;
