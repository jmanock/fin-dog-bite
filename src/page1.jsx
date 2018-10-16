import React from 'react';


const Form = (props) => {
  return(
    <div className='row'>
      <div className='input-field col s6'>
        <input type='text' id='name' className='validate' value={props.name} onChange={props.onChange} placeholder='Name:'/>
      </div>
    </div>
  );
};

export default Form;
