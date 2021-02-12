import React, { Component } from 'react';
import './App.css';
import Header from './Components/header/header';
import Body from './Components/body/body';
import SideBar from './Components/side-bar/side-bar';

class App extends Component {
  constructor() {
    super();
    this.state = { toggleHidden: true };
  }

  toggleHiddenHandler = () => {
    const { toggleHidden } = this.state;
    this.setState({ toggleHidden: !toggleHidden });
  };

  render() {
    const { toggleHidden } = this.state;
    return (
      <div>
        <div>
          <SideBar isHidden={toggleHidden} />
        </div>
        <div
          style={{
            marginLeft: toggleHidden ? '0' : '200px',
            transition: 'all 0.4s',
          }}
        >
          <Header toggleDrawer={this.toggleHiddenHandler} />
          <Body />
        </div>
      </div>
    );
  }
}

export default App;
