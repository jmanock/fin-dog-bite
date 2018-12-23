import React,{Component} from 'react';
import Select from './FormComponents/Select';

class DogForm extends Component{
  state = {
    dog:{
      name:'',
      color:'',
      state:'',
      age:''
    }
  };

  componentDidMount(){
    if(this.props.selectedDog !== null){
      this.setState({
        dog:this.props.selectedDog
      });
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.selectedDog !== this.props.selectedDog){
      this.setState({
        dog:nextProps.selectedDog || {
          name:'',
          color:'',
          state:'',
          age:''
        }
      });
    }
  }

  onFormSubmit = e =>{
    e.preventDefault();
    const clone = this.state.dog;

    if(this.state.dog.id){
      this.props.updateDog(this.state.dog);
    }else{
      this.props.createDog(clone);
      this.setState({
        dog:{name:'',age:'',color:'',state:''}
      });
    }
  }

  onInputChange = e =>{
    const newDog = this.state.dog;
    newDog[e.target.name] = e.target.value;

    this.setState({
      dog:newDog
    });
  }

  onSelectChange = e =>{
    const newDog = this.state.dog;
    newDog[e.target.name] = e.target.value;

    this.setState({
      dog:newDog
    });
  }

  render(){
    return(
      <div className='container'>
        <form onSubmit={this.onFormSubmit}>
          <input name='name' onChange={this.onInputChange} value={this.state.dog.name} type='text' placeholder='NAME' />
          <Select title={'Color'} name={'color'} options={['Black','White','Orange','Brown']} value={this.state.dog.color} placeholder={'Please Choose...'} handleChange={this.onInputChange}/>
          <Select title={'State'} name={'state'} options={['West Virgina', 'Florida', 'Nebraska', 'Iowa']} placeholder={'PleaseChoose...'}  handleChange={this.onSelectChange} value={this.state.dog.state}/>
          <input name='age' onChange={this.onSelectChange} value={this.state.dog.age} type='number' placeholder='AGE' />
          <button type='submit' className='btn btn-success'>Add Dog</button>
        </form>
      </div>
    )
  }
}

export default DogForm;
