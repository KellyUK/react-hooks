import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <div className='item'>
        <Link to='/search'>Search</Link>
      </div>
      <div className='item'>
        <Link to='/dropdown'>Dropdown</Link>
      </div>
      <div className='item'>
        <Link to='/translate'>Translate</Link>
      </div>
      <div className='item'>
        <Link to='/accordion'>Accordion</Link>
      </div>
    </div>
  );
};

export default Header;
