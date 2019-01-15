import React,{Component} from 'react';
import Button from './FormComponents/Button';

class AddInsList extends Component{
  render(){
    const InsItem = this.props.ins.map((addIns) => {
      return <tr key={addIns.id}>
        <td><Button action={this.props.handleEditIns(addIns)} type={'btn btn-success'} className={'fa fa-pencil'} title={'Edit'}></Button></td>
        <td>{addIns.interestName}</td>
        <td>{addIns.relationship}</td>
        <td>{addIns.state}</td>
        <td>{addIns.address}</td>
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
              <th scope='col'>State</th>
              <th scope='col'>Address</th>
            </tr>
          </thead>
          <tbody>
            {InsItem}
          </tbody>
        </table>
      </div>
    )
  }
}

export default AddInsList;
