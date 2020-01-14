import React from 'react';
import { NavLink } from "react-router-dom";
function NavBar() {

  return (

    <nav className='navigation-bar transparent' >

      <ul className="top-bar">
        <div className="left">
          <li><NavLink to="">Home</NavLink></li>
          <li><NavLink to="">Works</NavLink></li>
          <li><NavLink to="">Resume</NavLink></li>
          <li><NavLink to="">Contact</NavLink></li>
        </div>



        <div className="right">

          {/* <UserButtons currentUser={currentUser} currentPath={currentPath} /> */}

        </div>
      </ul >


      <ul className="dropdown-content">
        {/* post a task is only available when you haved logged in */}

        <li><NavLink to="">Home</NavLink></li>
        <li><NavLink to="">Works</NavLink></li>
        <li><NavLink to="">Resume</NavLink></li>
        <li><NavLink to="">Contact</NavLink></li>
      </ul>


    </nav >
  );
}

export default NavBar;