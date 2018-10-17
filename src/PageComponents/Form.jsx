import React from 'react';
import Input from '../FormComponents/Input';
import {Link} from 'react-router-dom';

  const Form = (props) =>{
    return(
      <div className='container'>
        <h1 className='center'>Form Page</h1>
        <div className='row'>
          <Input type={'text'} handleChange={props.handleChange} value={props.newUser.name} name={'name'} placeholder={'Name'} autoComplete='new' />
          <Input type={'text'} handleChange={props.handleChange} value={props.newUser.state} name={'state'} placeholder={'State'} />
        </div>
        <Link to={{pathname:'/Rates', state:{newUser:props.newUser}}}>
          Next
        </Link>
      </div>
    )
  }

export default Form;
