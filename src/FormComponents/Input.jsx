import React from 'react';

const Input = (props) =>{
  return(
    <div className='input-field col s6'>
      <input type={props.type} onChange={props.handleChange} name={props.name} value={props.value} placeholder={props.placeholder} />
    </div>
  )
};

export default Input;
