import React from 'react';
import {Link} from 'react-router-dom';

const Buy = (props) =>{
  return(
    <div>
      <h1>Buy Page {props.name}</h1>
      <Link to='/'>
        <button className="btn waves-effect waves-light" type="submit" name="action">Back
    </button>
      </Link>
    </div>
  );
};

export default Buy;
