import React, { Component } from 'react';
import SideBar from '../side-bar/side-bar';
import SignUp from '../sign-up/sign-up';
import './body.css';

class Body extends Component {
  constructor() {
    super();
    this.state = {
      signUpHidden: true,
      toggleHidden: true,
    };
  }

  render() {
    const { signUpHidden, toggleHidden } = this.state;
    return (
      <div className="container">
        <button
          className="toggle"
          onClick={(event) => {
            event.preventDefault();
            this.setState({ toggleHidden: !toggleHidden });
          }}
        >
          <i className="fa fa-bars fa-2x"></i>
        </button>
        <button
          className="signUpBtn"
          onClick={(event) => {
            event.preventDefault();
            this.setState({ signUpHidden: !signUpHidden });
          }}
        >
          Sign Up
        </button>
        <h2>What is this landing page about?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vero
          asperiores, aut iure architecto mollitia illo minima distinctio id
          provident ipsam eos aperiam quisquam ratione cupiditate pariatur
          quibusdam expedita sequi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas
          veritatis deserunt aliquam quia in soluta laudantium temporibus
          accusantium sed.
        </p>

        <h2>Tell me more</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque
          repudiandae consequuntur, nam, porro cupiditate impedit eaque possimus
          ad suscipit vel debitis provident omnis! Voluptas dolorum tempora
          adipisci soluta distinctio neque impedit ratione consectetur expedita
          accusamus corrupti eveniet, rem sit.
        </p>

        <h2>Benefits</h2>
        <ul>
          <li>Lifetime access</li>
          <li>30 Days Money Back</li>
          <li>Tailored Customer Support</li>
        </ul>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio illum
          quae, totam at vitae nemo molestias possimus libero. Expedita quidem
          officia sapiente ullam ea voluptates iure necessitatibus modi,
          asperiores libero totam animi doloribus unde quibusdam eius magni
          possimus sed minima minus nisi quas. Inventore reiciendis maxime ut
          et, totam perferendis sequi, quisquam laboriosam laudantium explicabo
          adipisci commodi minima fugit possimus ipsa sunt accusamus esse soluta
          nulla assumenda quos exercitationem dolorum?
        </p>
        {signUpHidden ? null : <SignUp />}
        {toggleHidden ? null : <SideBar />}
      </div>
    );
  }
}

export default Body;
