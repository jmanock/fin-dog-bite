import React from 'react';
import Input from '../FormComponents/Input';
import {Link} from 'react-router-dom';
import Select from '../FormComponents/Select';

const Form = (props) => {
  return(
    <div className='container'>
      <Link to={{pathname:'/Rates', state:{newUser:props.newUser}}}>
      </Link>
      <h1>Form Page</h1>
      <form>
        <div className='row'>
          <div className='col-sm-9'>
            <Input type={'email'} title={'Your email:'} name={'email'} value={props.newUser.email} placeholder={'Enter your email address'} handleChange={props.handleChange} />

            <Input type={'text'} title={"Dog's name:"} name={'dogsName'} value={props.newUser.dogsName} placeholder={"Enter your dog's name"} />

            <Input type={'number'} title={"What age is this dog:"} name={'age'} value={props.newUser.age} placeholder={"Enter your dog's age"} handleChange={props.handleChange} />

            <div className='form-group'>
              <label className='form-control-label'>What is the weight of this dog:</label>
              <div className='input-group'>
                <input type='number' className='form-control' name='weight' value={props.newUser.weight} placeholder="Enter dog's weight" aria-label='Dogs Weight' aira-describeby='basic' onChange={props.handleChange} />
                <div className='input-group-append'>
                  <span className='input-group-text' id='basic'>LBs</span>
                </div>
              </div>
            </div>

            <Input type={'text'} title={'What color is this dog:'} name={'color'} value={props.newUser.color} placeholder={"Enter the dog's color"} handleChange={props.handleChange} />

            <Select title={'Choose a state:'} name={'state'} options={props.newUser.stateOptions} placeholder={'Select a state'} value={props.newUser.state} handleChange={props.handleChange} />
          </div>
        </div>
      </form>
    </div>
  )
}
export default Form;
