import React from 'react';
import {Link} from 'react-router-dom';
import Input from '../FormComponents/Input';

const Rates = (props) =>{
  const {name, state}=props.location.state;
  return(
    <div>
      <h1>Rates Page</h1>
      <h3>{name} is from {state}</h3>
      <Input placeholder={'Something to add'} handleChange={props.handleChange}/>
      <Link to='/'>
        Back
      </Link>
      <Link to={{pathname:'/Buy', state:{name:name, state:state}}}>
        Next
      </Link>
    </div>
  );
};

export default Rates;
