import React, { Component } from 'react';
import './sign-up.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { signUpHidden: false };
  }

  render() {
    const { signUpHidden } = this.state;
    const { onHide } = this.props;
    return (
      <div>
        {signUpHidden ? null : (
          <div className="modal-container" id="modal">
            <div className="modal">
              <button
                className="close-btn"
                id="close"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({ signUpHidden: true });
                  onHide(event);
                }}
              >
                <i className="fa fa-times"></i>
              </button>
              <div className="modal-header">
                <h3>Sign Up</h3>
              </div>
              <div className="modal-content">
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
                  <button
                    className="submit"
                    onClick={(event) => {
                      event.preventDefault();
                      alert('Submited');
                      this.setState({ signUpHidden: true });
                    }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SignUp;
