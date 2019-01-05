import React,{Component} from 'react';
import Button from './FormComponents/Button';

class InsuredInfo extends Component{
  edit(e){
    console.log(e)
  }
  render(){
    const knew = this.props.state.addIns.map((x) =>{
      let nums = x.id +1;
      return <div key={x.id}>
        <Button action={this.props.Edit(x)} type={'btn btn-success'} className={'fa fa-pencil'} title={nums+' Edit'} />
      </div>
    })

    return(
      <div>
        <h1>InsuredInfo</h1>
        {knew}
      </div>

    )
  }
}

export default InsuredInfo;
