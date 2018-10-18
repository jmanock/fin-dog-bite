import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../FormComponents/Button';
import Select from '../FormComponents/Select';

const Rates = (props) =>{
  const {name, breed} = props.location.state.newUser;

  return(
    <div className='container'>
      <h1>Summary of Dogs</h1>
      <Button type={'btn btn-success'} title={'Add Another Dog'} className={'fa fa-plus-circle'}>
      </Button>
      <table className='table'>
        <thead>
          <tr>
            <th>Edit</th>
            <th>Dog's Name</th>
            <th>Breed</th>
            <th>Eligible</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Button type={'btn btn-primary'} className={'fa fa-pencil'} title={'Edit'}></Button>
            </td>
            <td>{name}</td>
            <td>{breed}</td>
            <td>Please calculate to determine eligibility</td>
            <td>
              <Button type={'btn btn-danger'} className={'fa fa-trash'} title={'Remove'}></Button>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Addition Insureds ($50 each)</h3>
      <small>Examples include: landlord, employer, and governmental entity</small>
      <div className='form-group'>
        <Select title={'Select the total number of additional insureds:'} name={'additionalInsureds'} options={['0', '1', '2', '3', '4', '5']} value={props.location.state.newUser.additionalInsureds} placeholder={props.location.state.newUser.placeholder} handleChange={props.location.state.handleChange} />
      </div>
      <Link to={{pathname:'/Buy', state:{newUser:props.location.state.newUser}}}>
        <Button type={'btn btn-success'} className={'fa fa-paw'} title={'Calculate'} />
      </Link>
    </div>
  );
};

export default Rates;


// <Link to='/'>
//   Back
// </Link>
// <Link to={{pathname:'/Buy', state:{newUser:props.location.state.newUser}}}>
//   Next
// </Link>
