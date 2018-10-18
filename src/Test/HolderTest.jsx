import React, {Component} from 'react';
import FormTest from './FormTest';

class HolderTest extends Component{
  state = {
    hover:false
  }
  handleMouseIn = () =>{
    this.setState({
      hover:true
    })
  }

  handleMouseOut = () =>{
    this.setState({
      hover:false
    })
  }
  render(){
    return(
      <FormTest handleMouseOut={this.handleMouseOut} handleMouseIn={this.handleMouseIn} hover={this.state.hover}/>
    );
  }
};

export default HolderTest;
