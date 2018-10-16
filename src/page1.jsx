import React from 'react';
import {Link} from 'react-router-dom';

const Form = (props) =>{
  return(
    <div className='row'>
      <h1>Form Page</h1>
      <div className='input-field col s6'>
        <input type='text' id='name' className='validate' value={props.name} onChange={props.onChange} placeholder='Name:' />
      </div>

      <Link to={{pathname:'/Rater', state:{namez:props.name}}}>
        <button className='btn waves-effect waves-light'>
          Next
        </button>
      </Link>
    </div>
  );
};

export default Form;
