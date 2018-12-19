import React, {Component} from 'react';
import Select from './FormComponents/Select';
import Input from './FormComponents/Input';
import Button from './FormComponents/Button';

class DogForm extends Component{
  onSubmit = (e) =>{
    e.preventDefault();
    var text = this.refs.name.value.trim();
    var state = this.props.state;
    var age = this.refs.age.value.trim();
    var color = this.props.color;

    if(!text){
      alert('Please enter...');
      return;
    }

    if(this.props.isEdit){
      var updateDog = {
        id:this.props.isEdit,
        name:text,
        state:state,
        color:color,
        age:age
      };
      this.props.onDogUpdate(updateDog);
    }else{
      this.props.onDogAdd(text,state);
    }
  }

  onChangeEdit = (e) =>{
    let target = e.target.name;
    if(target === 'name'){
      this.props.changeTextEdit(target,e.target.value);
    }else{
      console.log('no');
    }
    this.props.changeTextEdit(e.target.value);
  }

  onChangeSelect = (e) =>{
    this.props.changeSelectEdit(e.target.value);
  }

  render(){
    return(
      <div className='container'>
        <form onSubmit={this.onSubmit}>
          <Select title={'State'} name={'state'} options={['West Virgina', 'Iowa', 'Florida']} value={this.props.state} placeholder={'State'} handleChange={this.onChangeSelect} />

          <Input type={'number'} title={'Age'} name={'age'} placeholder={'Age'} value={this.props.age} handleChange={this.onChangeEdit} />

          <Input type={'text'} title={'Name'} name={'name'} value={this.props.name} handleChange={this.onChangeEdit} placeholder={'Name'} />

          <Select title={'Color'} value={this.props.color} name={'color'} options={['White','Black', 'Brown','Orange']} placeholder={'Color'} handleChange={this.onChangeSelect}/>

          <Button type={'btn btn-primary'} className={'fa fa-paw'} title={'Next'}></Button>
        </form>
      </div>
    );
  }
}

export default DogForm;
