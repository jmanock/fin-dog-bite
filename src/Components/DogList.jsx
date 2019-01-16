import React,{Component} from 'react';
import AddIns from './AddIns';
import Button from './FormComponents/Button';

class DogList extends Component{
  render(){
    const dogItem = this.props.dog.map((dog) =>{
      return <tr key={dog.id}>
        <td><Button action={this.props.handleEditDog(dog)} type={'btn btn-success'} className={'fa fa-pencil'} title={'Edit'}/></td>
        <td>{dog.name}</td>
        <td>{dog.age}</td>
        <td>{dog.state}</td>
        <td>{dog.color}</td>
      </tr>
    })
    return(
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Edit</th>
              <th scope='col'>Name</th>
              <th scope='col'>Color</th>
              <th scope='col'>State</th>
              <th scope='col'>Age</th>
              <th scope='col'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {dogItem}
          </tbody>
        </table>
        <AddIns state={this.props.state} addIns={this.props.addIns}/>
      </div>
    );
  }
};

export default DogList;
