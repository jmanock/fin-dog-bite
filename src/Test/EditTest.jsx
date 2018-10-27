import React from 'react';
import Select from '../FormComponents/Select';
import Input from '../FormComponents/Input';

const EditTest = (props) =>{
  return(
    <div className='container'>
      <Select tite={'States'} name={'state'} options={['Nebraska', 'Florida', 'Iowa']} value={props.location.state.state} />

      <Input type={'number'} title={'Ages:'} name={'age'} value={props.location.state.age} />
         <Select title={'Color:'} name={'color'} options={['Brown', 'Black', 'tan']} value={props.location.state.color} />
    </div>
  )

}

export default EditTest;
