import React from 'react';
import Tooltip from './Tooltip';

const FormTest = (props) =>{
  return(
    <div className='container'>
      <Tooltip handleMouseOut={props.handleMouseOut} handleMouseIn={props.handleMouseIn} message={'On a mother fucking hover'} tooltip={'hovered'} hover={props.hover}/>
    </div>
  );
};

export default FormTest;
