import React,{Component} from 'react';
import Button from './FormComponents/Button';

class InsuredInfo extends Component{
  render(){
    if(this.props.state.addIns === '0'){
      return(<Button type={'btn btn-success'} action={this.something} title={'Add Ins'} className={'fa fa-paw'}></Button>)
    }else if(this.props.state.addIns === '1'){

    }else{

    }
    return(
      <h1>Insured Info</h1>
    );
  }
};

export default InsuredInfo;
