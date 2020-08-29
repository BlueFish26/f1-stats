import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [navClassName, setClassName] = useState('topnav');
  const loadMenu = () => {
    if (navClassName === 'topnav') {
      setClassName('topnav responsive');
    } else {
      setClassName('topnav');
    }
  };

  return (
    <div>
      <div className={navClassName}>
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/teams">Teams</Link>
        <Link to="/races">Races</Link>
        <Link to="/drivers">Drivers</Link>
        <Link to="/about">About</Link>
        <button className="icon" onClick={loadMenu}>
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
