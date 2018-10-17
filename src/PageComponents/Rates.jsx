import React from 'react';
import {Link} from 'react-router-dom';
import Input from '../FormComponents/Input';

const Rates = (props) =>{
  console.log(props.location.state.newUser);
  const {name, state}=props.location.state.newUser;
  return(
    <div>
      <h1>Rates Page</h1>
      <h3>{name} is from {state}</h3>
      <Input placeholder={'Something to add'} handleChange={props.handleChange}/>
      <Link to='/'>
        Back
      </Link>
      <Link to={{pathname:'/Buy', state:{newUser:props.location.state.newUser}}}>
        Next
      </Link>
    </div>
  );
};

export default Rates;
