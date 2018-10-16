import React from 'react';

const Input = (props) =>{
  return(
    <div className='input-field col s6'>
      <input type={props.type} onChange={props.handleChange} value={props.value} placeholder={props.placeholder} autoComplete='new'/>
    </div>
  )
}
export default Input;
