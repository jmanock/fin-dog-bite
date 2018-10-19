import React from 'react';
import Select from '../FormComponents/Select';

const FormTest = (props) =>{
  //const something = props.user.newUser;
  return(
    <div className='container'>
      <Select title={'State:'} name={'state'} options={['one', 'two', 'three']} placeholder={props.user.placeholder} handleChange={props.handleChange} value={props.user.newUser.state} handleMouseIn={props.handleMouseIn} handleMouseOut={props.handleMouseOut} hover={props.user.hover}/>
    </div>
  );
};

export default FormTest;

/*
  ~ Add to the object array
  ~ Work on the different pages to store info to add to the object array
  ~ Work on Edit button/page
  ~ Work on the add button/page
*/
