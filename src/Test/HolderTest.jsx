import React, {Component} from 'react';
import FormTest from './FormTest';

class HolderTest extends Component{
  state = {
    hover:false,
    currentDog:{age:'', state:'', color:''},
    placeholder:'Please Choose.....'
  }
  handleMouseIn = () =>{
    this.setState({
      hover:true
    });
  }

  handleMouseOut = () =>{
    this.setState({
      hover:false
    });
  }


  render(){
    return(
      <FormTest handleMouseOut={this.handleMouseOut} handleMouseIn={this.handleMouseIn}  user={this.state}/>
    );
  }
};

export default HolderTest;
