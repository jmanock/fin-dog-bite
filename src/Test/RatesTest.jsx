import React from 'react';
import Button from '../FormComponents/Button';
import Select from '../FormComponents/Select';

const RatesTest = (props) =>{
  console.log(props.location);
  const {age, state} = props.location.state.dog;
  return(
    <div className='container'>
      <h1>Summary of Dogs</h1>
      <Button type={'btn btn-succsss'} title={'Add Another Dog'} className={'fa fa-plus-circle'}></Button>
      <table className='table'>
        <thead>
          <tr>
            <th>Edit</th>
            <th>Dog's Name</th>
            <th>Eligible</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Button type={'btn btn-primary'} className={'fa fa-pencil'} title={'Edit'}></Button>
            </td>
            <td>
              {state}
            </td>
            <td>{age}</td>
            <td><Button type={'btn btn-danger'} className={'fa fa-trash'} title={'Remove'}></Button></td>
          </tr>
        </tbody>
      </table>
      <h3>Addition Insureds ($50 each)</h3>
      <small>Examples include: landlord, employer, and governmental entity</small>
      <div className='form-group'>
        <Select title={'Select the total number of additional insureds:'} name={'additionalInsureds'} options={['0', '1', '2', '3', '4', '5']} value={props.location.state.dog.additionalInsureds} placeholder={props.location.state.placeholder} handleChange={props.location.state.handleChange} />
      </div>
      <Button type={'btn btn-success'} className={'fa fa-paw'} title={'Calculate'}></Button>
    </div>
  )
}

export default RatesTest;
