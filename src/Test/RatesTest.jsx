import React, {Component} from 'react';
import Select from '../FormComponents/Select';
import Button from '../FormComponents/Button';

class RatesTest extends Component{
  state = {
    additionalInsured: ''
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleSubmit = (e) =>{
    // This needs to only add outside of the object
    e.preventDefault();
    this.props.addDog(this.state);
  }
  render(){
    const dogList = this.props.dogs.length ? (
      this.props.dogs.map(dog => {
        return(
            <tr key={dog.id}>
              <td><Button action={() => {this.props.editDog(dog.id)}} type={'btn btn-primary'} className={'fa fa-pencil'} title={'Edit Dog'}></Button></td>
              <td>{dog.state}</td>
              <td>{dog.color}</td>
              <td>{dog.age}</td>
              <td><Button action={() => {this.props.deleteDog(dog.id)}} type={'btn btn-danger'} className={'fa fa-trash'} title={'Delete Dog'}></Button></td>
            </tr>
        )
      })
    ):(
      <p className='center'>You don't have any Dogs</p>
    )
    return(
      <div className='container'>
        <h1>Summary of Dog's</h1>
        <Button type={'btn btn-success'} title={'Add another dog'} className={'fa fa-plus-circle'} action={this.props.addDog}></Button>
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
            {dogList}
          </tbody>
        </table>
        <h3>Addition Insureds ($50 each)</h3>
        <small>Examples include: landlord, employer, and governmental entity</small>
        <Select title={'Select the total number of additional insureds:'} name={'additionalInsureds'} options={['0','1','2','3','4','5']} value={this.props.additionalInsureds} placeholder={'please choose'} handleChange={this.handleChange} />
        <Button type={'btn btn-success'} title={'Continue'} className={'fa fa-paw'} action={this.props.toggle} value={'rates'}></Button>
      </div>

    )
  }
}
export default RatesTest;
