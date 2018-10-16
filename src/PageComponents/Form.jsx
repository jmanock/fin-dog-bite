import React, {Component} from 'react';
import Input from '../FormComponents/Input';
import {Link} from 'react-router-dom';

class Form extends Component{
  state = {
    newUser:{
      name:'',
      state:''
    }
  }

  handleChange = (e) =>{
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({newUser:{...prevState.newUser, [name]:value}}));
  }

  render(){
    const {name, state} = this.state.newUser
    return(
      <div className='container'>
        <h1 className='center'>Form Page</h1>
        <div className='row'>
          <Input type={'text'} handleChange={this.handleChange} value={this.state.newUser.name} name={'name'} placeholder={'Name'} autoComplete='new'/>
          <Input type={'text'} handleChange={this.handleChange} value={this.state.newUser.state} placeholder={'State'} name={'state'} />
        </div>
        <Link to={{pathname:'/Rates', state:{name:name, state:state}}}>
          Next
        </Link>
      </div>

    );
  }
};

export default Form;
