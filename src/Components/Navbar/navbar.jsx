import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
      <nav className="navbar top-0 py-3 position-absolute">
        <div className="container">
          <a className="navbar-brand Logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix-Logo" width="130"/>
          </a>
          <button className='btn btn-danger'>Sign In</button>
        </div>
      </nav>
  )
}

export default Navbar;
