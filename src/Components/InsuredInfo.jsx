import React,{Component} from 'react';
import Button from './FormComponents/Button';
import Input from './FormComponents/Input';
import Select from './FormComponents/Select';
import States from './OptionsComponents/State';

class InsuredInfo extends Component{
  state = {
    additionalIns:null,
    options:{
      state:States
    }
  }

  componentDidMount(){
    console.log('didMount:', this.props.state.addIns);
    if(this.props.state.addIns !== null){
      console.log('working')
      this.setState({
        additionalIns:this.props.state.addIns
      })
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      additionalIns:nextProps.state.addIns
    });
  }

  onInputChange = (e) =>{
    const newPerson = this.state.additionalIns;
    newPerson[e.target.name]=e.target.value;
    this.setState({
      additionalIns:newPerson
    })
  }

  addInsuredForm = () =>{
    console.log(this.props.state);
  }
  edit = (x) =>{
    console.log(x.id);
  }

  render(){
    let knew;
    
    return(
      <div>
        <h1>Ins form</h1>
        {knew}
      </div>
    )
  }

};

export default InsuredInfo;
