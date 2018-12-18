import React,{Component} from 'react';
import Button from './FormComponents/Button';
import Select from './FormComponents/Select';

class Rates extends Component{
  state = {
    additionalInsured:''
  }

  handleChange = e =>{
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.addDog(this.state);
  }

  render(){
    const dogList = this.props.dogs.map((dog) =>
    <tr key={dog.id}>
      <td><Button action={() => {this.props.editDog(dog)}} type={'btn btn-primary'} className={'fa fa-pencile'} title={'Edit Dog'}></Button></td>
      <td>{dog.state}</td>
      <td>{dog.color}</td>
      <td>{dog.age}</td>
      <td><Button action={() => {this.props.deleteDog(dog.id)}} type={'btn btn-danger'} className={'fa fa-trash'} title={'Delete Dog'}></Button></td>
    </tr>);

    return(
      <div className='container'>
        <Button type={'btn btn-success'} title={'Add Dog'} className={'fa fa-plus-circle'} action={this.props.addDog}></Button>
        <table className='container'>
          <thead>
            <tr>
              <th>Edit Dog</th>
              <th>Dogs State</th>
              <th>Dogs Color</th>
              <th>Delete Dog</th>
            </tr>
          </thead>
          <tbody>
            {dogList}
          </tbody>
        </table>
        <h3>Addition Insureds ($50 each)</h3>
        <small>Examples include: landlord, employer, and governmental entity</small>
        <Select title={'Select the total number of Additional insureds:'} name={'additionalIns'} options={['0','1','2','3','4','5']} value={this.props.additionalIns} placeholder={'Please Choose'} handleChange={this.handleChange}></Select>
        <Button type={'btn btn-success'} title={'Continue'} className={'fa fa-paw'}></Button>
      </div>
    );
  }
}

export default Rates;
