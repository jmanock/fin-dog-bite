import React,{Component} from 'react';
import Select from './FormComponents/Select';
import Button from './FormComponents/Button';
import Input from './FormComponents/Input';
import States from './OptionsComponents/State';
class DogForm extends Component{
  state = {
    dog:{
      name:'',
      color:'',
      state:'',
      age:'',
      email:'',
      weight:''
    },
    options:{
      state:States
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
          age:'',
          email:'',
          weight:''
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
        dog:{name:'',age:'',color:'',state:'',email:'',weight:''}
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
          <div className='row'>
            <div className='col-sm-2'></div>

            <div className='col-sm-10'>

              <Input type={'text'} title={'Your Email:'} name={'email'} value={this.state.dog.email} placeholder='Enter your email' handleChange={this.onInputChange} />

              <Input type={'text'} title={"Dog's name:"} name={'name'} value={this.state.dog.name} placeholder={"Enter your dog's name"} handleChange={this.onInputChange} />

              <Input type={'number'} title={'What age is this dog:'} name={'age'} value={this.state.dog.age} placeholder={"Enter your dog's age"} handleChange={this.onInputChange} />

              <Input type={'text'} title={'What color is this dog:'} name={'color'} value={this.state.dog.color} placeholder={"Enter the dog's color:"} handleChange={this.onInputChange} />

              <div className='form-group'>
                <label className='form-control-label'>What is the weight of this dog:</label>
                <div className='input-group'>
                  <input type='number' className='form-control' name='weight' value={this.state.dog.weight} placeholder="Enter dog's weight:" aria-label='dogs weight' aira-describeby='basic' onChange={this.onInputChange} />
                  <div className='input-group-append'>
                    <span className='input-group-text' id='basic'>LBs</span>
                  </div>
                </div>
              </div>

              <Select title={'State:'} name={'state'} options={this.state.options.state} value={this.state.dog.state} placeholder={'Please choose...'} handleChange={this.onSelectChange}/>
              
              <Button type={'btn btn-success'} action={this.onFormSubmit} title={'Next'} className={'fa fa-paw'} />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default DogForm;
