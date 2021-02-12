import React from 'react';
import './side-bar.css';

const SideBar = () => {
  return (
    <div className="nav">
      <nav>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1NgKC6dzRP3Pfw7g9K1ow7Z1ZIWwUzSrSQ&usqp=CAU"
            alt="user"
          />
        </div>
        <ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Portfolio</p>
          </li>
          <li>
            <p>Blog</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
