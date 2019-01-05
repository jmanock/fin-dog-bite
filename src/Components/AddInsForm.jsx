import React,{Component} from 'react';

class AddInsForm extends Component{
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }
  render(){
    return(
      <h1>Add Ins Form</h1>
    )
  }
}

export default AddInsForm;
