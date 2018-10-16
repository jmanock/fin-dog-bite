import React from 'react';
import {Link} from 'react-router-dom';

const Buy = (props) =>{
  console.log(props.location.state);
  return(
    <div>
      <h1>Buy Page</h1>
      <Link to='/Rates'>
        Back
      </Link>
    </div>
  );
};

export default Buy;
