import React,{Component} from 'react';
import Input from './FormComponents/Input';
import Select from './FormComponents/Select';
import States from './OptionsComponents/State';
import Button from './FormComponents/Button';

class PersonalInfo extends Component{
  state = {
    personalInfo:{
      fName:'',lName:'',date:'',fNameSpouse:'',lNameSpouse:'',address:'',city:'',state:'',zip:'',dogMailingAddress:'',phoneNumber:'',faxNumber:''
    },
    stateOptions:States
  }
  onInputChange = (e) =>{
    const newPerson = this.state.personalInfo;
    newPerson[e.target.name]=e.target.value;
    this.setState({
      personalInfo:newPerson
    })
  }
  render(){
    console.log(this.state);
    return(
      <form>
        <Input type={'text'} title={'First Name'} name={'fName'} value={this.state.personalInfo.fName} placeholder={"Enter first name:"} handleChange={this.onInputChange}/>

        <Input type={'text'} title={'Last Name'} name={'lName'} value={this.state.personalInfo.lName} placeholder={"Enter last name:"} handleChange={this.onInputChange} />

        <Input type={'text'} title={'Fist Name of your spouse, signifigant other or roommate:'} name={'fNameSpouse'} value={this.state.personalInfo.fNameSpouse} placeholder={'Enter first name:'} handleChange={this.onInputChange} />

        <Input type={'text'} title={'Last Name of your spouse, signifigant other or roommate:'} name={'lNameSpouse'} value={this.state.personalInfo.lNameSpouse} placeholder={'Enter last name:'} handleChange={this.onInputChange} />

        <Input type={'text'} title={"Applicant's mailing address:"} name={'address'} value={this.state.personalInfo.address} placeholder={"Enter applicant's mailing address:"} handleChange={this.onInputChange} />

        <Input type={'number'} title={'Zip:'} name={'zip'} value={this.state.personalInfo.zip} placeholder={'Enter zip:'} handleChange={this.onInputChange} />

        <Input type={'text'} title={'City:'} name={'city'} value={this.state.personalInfo.city} placeholder={'Enter city'} handleChange={this.onInputChange} />

        <Select title={'State:'} name={'state'} options={this.state.stateOptions} value={this.state.personalInfo.state} placeholder={'Please choose...'} handleChange={this.onInputChange} />

        <Select title={'Do your dog(s) live at the mailing address:'} name={'dogMailingAddress'} value={this.state.personalInfo.dogMailingAddress} options={['Yes','No']} placeholder={'Please choose...'} handleChange={this.onInputChange} />

        <Input type={'number'} title={'Phone Number:'} value={this.state.personalInfo.phoneNumber} placeholder={'Enter phone number'} handleChange={this.onInputChange} />

        <Input type={'number'} title={'Fax Number:'} value={this.state.personalInfo.faxNumber} placeholder={'Enter fax number'} handleChange={this.onInputChange} />

        <Button type={'btn btn-success'} title={'Next'} className={'fa fa-paw'} />
      </form>
    );
  }
};

export default PersonalInfo;
