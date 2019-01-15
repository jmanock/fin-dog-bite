import React,{Component} from 'react';
import Select from './FormComponents/Select';
import Button from './FormComponents/Button';
import Input from './FormComponents/Input';
import States from './OptionsComponents/State';

class AddInsForm extends Component{
  state = {
    Ins:{
      interestName:'', relationship:'', address:'', city:'', state:'', zip:'', contactName:'', contactPhone:'', contactEmail:''
    },
    options:{
      state:States
    }
  };

  componentDidMount(){
    console.log('I done mounted');
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }

  onFormSubmit = e =>{
    e.preventDefault();
    const clone = this.state.Ins;

    if(this.state.Ins.id){
      console.log('has id');
    }else{
      console.log('no id');
    }
  }

  onInputChange = e =>{
    const newIns = this.state.Ins;
    newIns[e.target.name] = e.target.value;

    this.setState({
      Ins:newIns
    });
  }

  render(){
    return(
      <h1>Ins Form</h1>
    )
  }
}

export default AddInsForm;
