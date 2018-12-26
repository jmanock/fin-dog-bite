import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () =>(
  <nav className='navbar navbar-expand-lg navbar-light'>
    <Link to='/' className='navbar-brand'>Dog Bite Quote</Link>
    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'><Link to='/Quote' className='nav-link'><i className='fa fa-plus-circle'></i> New Quote</Link></li>
        <li className='nav-item'><Link to='/About' className='nav-link'><i className='fa fa-paw'></i> About</Link></li>
        <li className='nav-item'><Link to='/Questions' className='nav-link'> <i className='fa fa-question-circle'></i> F.A.Q.</Link></li>
        <li className='nav-item'><a href='tel:8555436449' className='nav-link'><i className='fa fa-phone-square'></i> 855.543.6449</a></li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
