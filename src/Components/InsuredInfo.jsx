import React,{Component} from 'react';
import Button from './FormComponents/Button';
import Input from './FormComponents/Input';

class InsuredInfo extends Component{

  render(){
    const knew = this.props.state.addIns.map((x) =>{
      let nums = x.id +1;
      return <tr key={x.id}>
        <td>{nums} <Button action={this.props.edit(x)} type={'btn btn-success'} className={'fa fa-pencil'} title={'Edit'}></Button></td>
      </tr>
    })

    return(
      <div>
        <h1>InsuredInfo</h1>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Edit</th>
              <th scope='col'>Name</th>
              <th scope='col'>Relationship</th>
              <th scope='col'>Phone</th>
              <th scope='col'>Email</th>
            </tr>
          </thead>
          <tbody>
            {knew}
          </tbody>
        </table>
      </div>

    )
  }
}

export default InsuredInfo;
