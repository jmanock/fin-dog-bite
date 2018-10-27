import React, {Component} from 'react';
import Select from '../FormComponents/Select';
import Input from '../FormComponents/Input';

class FormTest extends Component{
  state = {
    age:'',
    state:'',
    color:''
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.addDog(this.state);
  }
  render(){
    return(
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <Select title={'State'} name={'state'} options={['Iowa', 'Nebraska', 'Florida']} value={this.state.state} handleChange={this.handleChange} placeholder={'select a kname'}/>
          <Input type={'number'} title={'Age'} name={'age'} value={this.state.age} placeholder={'knew Num'} handleChange={this.handleChange} />
          <Select title={'Color'} name={'color'} options={['Tan', 'Brown', 'Black']} value={this.state.color} handleChange={this.handleChange} placeholder={'knew Color'} />
        </form>
      </div>
    )
  }
}

export default FormTest;
