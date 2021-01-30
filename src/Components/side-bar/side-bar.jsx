import React from 'react';
import './side-bar.css';

const SideBar = () => {
  return (
    <div className="nav">
      <nav>
        <div>
          <img
            src="https://randomuser.me/api/portraits/men/12.jpg"
            alt="user"
          />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
