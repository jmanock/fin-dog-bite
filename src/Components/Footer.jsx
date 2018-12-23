import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () =>(
  <footer>
    <div className='container-fluid text-center'>
      <div className='row'>
        <div className='col-sm-6'>
          <h5 className='text-uppercase'>quick contact</h5>
          <h6 className='text-uppercase'>dean insurance agency</h6>
          <address>
            230 N. Westmonte Drive <br /> Suite 2100 <br /> Altamonte Springs, FL 32714 <br /> Phone: 800.721.3326 or <br /> 407.865.7477 ext: 101 <br /> Fax: 407.865.7557
          </address>
        </div>
        <div classNmae='col-sm-6'>
          <h5 className='text-uppercase'>quick links</h5>
          <ul className='list-unstyled'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Quote'>New Quote</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Questions'>F.A.Q.</Link></li>
            <li><Link to='/Privacy'>Privacy</Link></li>
            <li><Link to='/Terms'>Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>
      <span className='text-center'>&copy; 2018 Dean Insurance Agency</span>
    </div>
  </footer>
);

export default Footer;
