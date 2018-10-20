import React from 'react';
import Tooltip from '../Test/Tooltip';

const Select = (props) =>{
  console.log(props);
  return(
    <div className='form-group'>
      <label className='form-label'>{props.title} <Tooltip hover={props.hover} handleMouseOut={props.handleMouseOut} handleMouseIn={props.handleMouseIn} tooltip={props.tooltip}></Tooltip></label>
      <select id={props.name} name={props.name} value={props.value} onChange={props.handleChange} className='form-control form-control-sm'>
        <option>{props.placeholder}</option>
        {props.options.map(option =>{
          return(
            <option key={option} value={option} label={option}>{option}</option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
