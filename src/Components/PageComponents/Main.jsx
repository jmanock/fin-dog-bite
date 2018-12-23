import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../FormComponents/Button';

const Main = () =>(
  <div className='container'>
    <p>
      Every year in the United States more than 4.7 million people are bitten by dogs. Now you can protect yourself and your best friend with a <span className='title-name'>Canine Liability Insurance</span> policy.
    </p>
    <Link to='/Quote'>
      <Button title={"Let's get started"} type={'btn btn-success'}></Button>
    </Link>
  </div>
);

export default Main;
