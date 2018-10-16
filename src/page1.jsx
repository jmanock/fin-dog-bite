import React from 'react';
import Input from './input';

const Form = (props) =>{
  return(
    <div className='row'>
      <h1>Form Page</h1>
      <Input type={'text'} handleChange={props.onChange} name='name' value={props.newUser.name} placeholder={'State'} />
      <input type='text' name='name' value={props.newUser.name} onChange={props.onChange} placeholder='RealName'/>
    </div>
  );
};

export default Form;
// <Link to={{pathname:'/Rater', state:{name:newUser.name, fromState:newUser.fromState}}}>
//   <button className='btn waves-effect waves-light'>
//     Next
//   </button>
// </Link>
