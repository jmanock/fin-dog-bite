import React,{Component} from 'react';
import AddIns from './AddIns';
import Button from './FormComponents/Button';

class DogList extends Component{
  render(){
    const dogItem = this.props.dogs.map((dog) =>{
      return <tr key={dog.id}>
        <td><Button action={this.props.handleEditDog(dog)} type={'btn btn-success'} className={'fa fa-pencil'} title={'Edit'}/></td>
        <td>{dog.name}</td>
        <td>{dog.age}</td>
        <td>{dog.state}</td>
        <td>{dog.color}</td>
        <td><Button action={this.props.deleteDog(dog.id)} type={'btn btn-danger'} className={'fa fa-trash'} title={'Delete'} /></td>
      </tr>
    })
    return(
      <div className='container'>
        <table>
          <thead>
            <tr>
              <th>Edit</th>
              <th>Name</th>
              <th>Color</th>
              <th>State</th>
              <th>Age</th>
              <th>Delete</th>
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
