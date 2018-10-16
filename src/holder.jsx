import React, {Component} from 'react';
import Form from './page1';

class Holder extends Component{
  state = {
    newUser:{
      name:''
    }
  }
  handleChange = (e) =>{
    this.setState(
      {newUser:{
        [e.target.id]:e.target.value
      }}
    );
  }
  render(){
    const {name} = this.state.newUser;
    return(
      <div>
        <Form name={name} onChange={this.handleChange}/>
      </div>

    );
  }
}

export default Holder;
