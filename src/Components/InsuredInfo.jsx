import React,{Component,Fragment} from 'react';
import Button from './FormComponents/Button';
import Input from './FormComponents/Input';
import Select from './FormComponents/Select';
import States from './OptionsComponents/State';

class InsuredInfo extends Component{
  state = {
    additionalIns:{
      id:'',interestName:'',relationship:'',address:'',city:'',state:'',zip:'',contactName:'',contactPhone:'',contactEmail:''
    },
    options:{
      state:States,
      num:8
    }
  }

  onInputChange = (e) =>{
    const newInsured = this.state.additionalIns;
    newInsured[e.target.name]=e.target.value;
    this.setState({
      additionalIns:newInsured
    });
  }

  render(){
    console.log(this.state);
    let rows = [];
    let text;
    for( let i = 0; i < this.props.state.addIns; i++){
      rows.push(text = (
        <div key={i}>{i + 1}
          <Input type={'text'} title={'Interes Name:'} name={'interestName'} value={this.state.additionalIns.interestName} placeholder={'Enter interest name:'} handleChange={this.onInputChange} />

          <Select title={'Relationship:'} name={'relationship'} options={['Landlord','Employer','Governmental Entity', 'Other']} value={this.state.additionalIns.relationship} placeholder={'Please choose...'} handleChange={this.onInputChange} />

          <Input type={'text'} title={'Address:'} name={'address'} value={this.state.additionalIns.address} placeholder={'Enter address:'} handleChange={this.onInputChange} />

          <Input type={'text'} title={'City:'} name={'city'} value={this.state.additionalIns.city} placeholder={'Enter city:'} handleChange={this.onInputChange} />

          <Select title={'State:'} name={'state'} options={this.state.options.state} value={this.state.additionalIns.state} placeholder={'Please choose...'} handleChange={this.onInputChange} />

          <Input type={'number'} title={'Zip:'} value={this.state.additionalIns.zip} placeholder={'Enter zip:'} handleChange={this.onInputChange} />

          <Input type={'text'} title={'Contact First Name:'} name={'fName'} value={this.state.additionalIns.fName} placeholder={'Enter contact first name:'} handleChange={this.onInputChange} />

          <Input type={'text'} title={'Contact Last Name:'} name={'lName'} value={this.state.additionalIns.lName} placeholder={'Enter contact last name:'} handleChange={this.onInputChange} />

          <Input type={'number'} title={'Contact Phone Number:'} name={'phone'} value={this.state.additionalIns.phone} placeholder={'Enter contact phone number:'} handleChange={this.onInputChange} />

          <Input type={'email'} title={'Contact Email:'} name={'email'} value={this.state.additionalIns.email} placeholder={'Enter contact email:'} handleChange={this.onInputChange} />
        </div>
      ));
    }
    return(
      <div>
        <h1>Insured Info</h1>
        {rows}
      </div>
    );
  }
};

export default InsuredInfo;
