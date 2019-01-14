import React,{Component} from 'react';
import Button from './FormComponents/Button';

class AddInsList extends Component{
  render(){
    console.log(this.props);
    const addItem = this.props.addIns.map((ins) =>{
      return <tr key={ins.id}>
        <td><Button action={this.props.handleEditIns(ins)} type={'btn btn-success'} className={'fa fa-pencil'} title={'Edit'}></Button></td>
        <td>{ins.interestName}</td>
        <td>{ins.relationship}</td>
        <td>{ins.state}</td>
        <td>{ins.contactName}</td>
      </tr>
    })
    return(
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Edit</th>
              <th scope='col'>Name</th>
              <th scope='col'>Relationship</th>
              <th scope='col'>ContactName</th>
            </tr>
          </thead>
          <tbody>
            {addItem}
          </tbody>
        </table>
      </div>
    );
  }
};

export default AddInsList;
