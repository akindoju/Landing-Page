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
            <p href="#">Home</p>
          </li>
          <li>
            <p href="#">Portfolio</p>
          </li>
          <li>
            <p href="#">Blog</p>
          </li>
          <li>
            <p href="#">Contact</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
