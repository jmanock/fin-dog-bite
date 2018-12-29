import React,{Component} from 'react';
import Input from './FormComponents/Input';

class PersonalInfo extends Component{
  state = {
    personalInfo:{
      fName:'',lName:'',date:'',fNameSpouse:'',lNameSpouse:'',address:'',city:'',state:'',zip:'',dogMailingAddress:'',phone:'',fax:''
    }
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
        <Input type={'text'} title={'First Name'} name={'fName'} value={this.state.personalInfo.fName} placeholder={"Applicant's First Name:"} handleChange={this.onInputChange}/>

        <Input type={'text'} title={'Last Name'} name={'lName'} value={this.state.personalInfo.lName} placeholder={"Applicant's Last Name:"} handleChange={this.onInputChange} />

        <Input type={'text'} title={'Fist Name of your spouse, signifigant other or roommate:'} name={'fNameSpouse'} value={this.state.personalInfo.fNameSpouse} placeholder={'First Name of your spouse, signifigant other or roommate:'} handleChange={this.onInputChange} />

        <Input type={'text'} title={'Last Name of your spouse, signifigant other or roommate:'} name={'lNameSpouse'} value={this.state.personalInfo.lNameSpouse} placeholder={'Last Name of your spouse, sigifigant other or roommate:'} handleChange={this.onInputChange} />

        <Input type={'text'} title={"Applicant's mailing address:"} name={'address'} value={this.state.personalInfo.address} placeholder={"Applicant's mailing address:"} handleChange={this.onInputChange} />

        <Input type={'number'} title={'Zip:'} name={'zip'} value={this.state.personalInfo.zip} placeholder={'Zip:'} handleChange={this.onInputChange} />

        
      </form>
    );
  }
};

export default PersonalInfo;
