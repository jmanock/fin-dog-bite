import React,{Component} from 'react';
import Select from '../FormComponents/Select';
import Input from '../FormComponents/Input';
import {Link} from 'react-router-dom';
import Button from '../FormComponents/Button';

class FormTest extends Component{
  state={
    age:'',
    color:'',
    state:''
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  render(){
    console.log(this.state);
    return(
      <div className='container'>
         <Select title={'States'} name={'state'} options={['Nebraska', 'Florida', 'Iowa']}  placeholder={this.props.user.placeholder} handleChange={this.handleChange} value={this.state.state} handleMouseOut={this.props.handleMouseOut} tooltip={'something, something darkside'} handleMouseIn={this.props.handleMouseIn} hover={this.props.user.hover}/>

          <Input type={'number'} title={'Ages:'} name={'age'} value={this.state.age} placeholder={this.props.user.placeholder} handleChange={this.handleChange}/>

          <Select title={'Color:'} name={'color'} options={['Brown', 'Black', 'Tan']} placeholder={this.props.user.placeholder} handleChange={this.handleChange} value={this.state.color} />

          <Link to={{pathname:'/RatesTes', state:{dog:this.state}}}>
            <Button></Button>
          </Link>
      </div>
    )
  }
}




export default FormTest;

/*
  ~ Add to the object array
  ~ Work on the different pages to store info to add to the object array
  ~ Work on Edit button/page
  ~ Work on the add button/page
*/
