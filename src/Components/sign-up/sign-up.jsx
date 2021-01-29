import React, { Component } from 'react';
import './sign-up.css';

class SignUp extends Component {
  constructor() {
    super();
    this.state = { hidden: false };
  }

  render() {
    const { hidden } = this.state;
    return (
      <div>
        <div className="modal-container" id="modal">
          <div className="modal">
            <button
              className="close-btn"
              id="close"
              onClick={(event) => {
                event.preventDefault();
                this.setState({ hidden: !hidden });
              }}
            >
              <i className="fa fa-times">Suppp</i>
            </button>
            <div className="modal-header">
              <h3>Sign Up</h3>
            </div>
            <div className="modal-content">
              <p>Register with us to get offers, support and more</p>
              <form action="" className="modal-form">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Name"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="password2">Confirm password</label>
                  <input
                    type="password"
                    id="password2"
                    placeholder="Confirm password"
                    className="form-input"
                  />
                </div>
                <input type="submit" value="submit" className="submit-btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
