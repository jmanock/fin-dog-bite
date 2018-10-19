import React, {Component} from 'react';
import FormTest from './FormTest';

class HolderTest extends Component{
  state = {
    hover:false,
    newUser:[
      {state:'', name:''}
    ],
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

  handleChange = (e) =>{
    let value = e.target.value;
    let name = e.target.name;
    const obj = {[name]:value };
    this.setState({
      newUser:[...this.state.newUser,obj]
    });
    // this.setState(prevState => ({newUser:[...prevState.newUser, [name]:value]}));
  }

  render(){
    console.log(this.state);
    return(
      <FormTest handleMouseOut={this.handleMouseOut} handleMouseIn={this.handleMouseIn} handleChange={this.handleChange} user={this.state}/>
    );
  }
};

export default HolderTest;
