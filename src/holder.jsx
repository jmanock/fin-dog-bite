import React, {Component} from 'react';
import Form from './page1';

class Holder extends Component{
  state = {
    name:'',
    state:'fl'
  }
  handleChange = (e) =>{
    console.log(e.target);
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  render(){
    return(
      <div>
        <Form newUser={this.state} onChange={this.handleChange} />
      </div>

    );
  }
}

export default Holder;
