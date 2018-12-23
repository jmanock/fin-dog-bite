import React,{Component} from 'react';

class DogItem extends Component{
  render(){
    return(
      <table>
        <tbody>
          <tr>
            <td><button onClick={this.props.handleEditDog(this.props.dog)} className='btn btn-success'>Edit</button></td>
            <td>{this.props.dog.name}</td>
            <td>{this.props.dog.color}</td>
            <td>{this.props.dog.state}</td>
            <td>{this.props.dog.age}</td>
            <td><button onClick={this.props.deleteDog(this.props.dog.id)} className='btn btn-danger'>Delete</button></td>
          </tr>
        </tbody>
      </table>
    );
  }
};

export default DogItem;
