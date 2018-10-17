import React from 'react';

const Input = (props) =>{
  return(
    <div className='form-group'>
      <label className='form-label'>{props.title}</label>
      <input className='form-control form-control-sm' autoComplete='new' id={props.name} name={props.name} type={props.type} onChange={props.handleChange} value={props.value} placeholder={props.placeholder} />
    </div>
  )
};

export default Input;
