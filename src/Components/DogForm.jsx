import React, {Component} from 'react';
import Select from './FormComponents/Select';
import Input from './FormComponents/Input';
import Button from './FormComponents/Button';

class DogForm extends Component{
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
          <Select title={'State'} name={'state'} options={['Iowa', 'South Carolina', 'West Virgina', 'Florida']} value={this.state.state} handleChange={this.handleChange} placeholder={'Statez'} />

          <Input type={'number'} title={'Age'} name={'age'} value={this.state.age} placeholder={'Ages'} handleChange={this.handleChange} />

          <Select title={'Color'} name={'color'} options={['brown','black', 'white', 'orange']} value={this.state.color} handleChange={this.handleChange} placeholder={'Colorz'}/>
          <Button type={'btn btn-primary'} className={'fa fa-paw'} title={'Continue'} action={this.props.toggle} value={'form'}></Button>
        </form>
      </div>
    )
  }
}

export default DogForm;