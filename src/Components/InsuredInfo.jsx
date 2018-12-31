import React,{Component} from 'react';
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
      state:States
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
    let form;
    console.log(this.state);
    if(this.props.state.addIns === '0'){
      form = (
        <Button type={'btn btn-success'} action={this.something} title={'Add Ins'} className={'fa fa-paw'}></Button>
      );
    }else if(this.props.state.addIns === '1'){
      form = (
        <form>
          <Input type={'text'} title={'Interest Name:'} name={'interestName'} value={this.state.additionalIns.interestName} placeholder={'Enter interest name:'} handleChange={this.onInputChange} />

          <Select title={'Relationship:'} name={'relationship'} options={['Landlord','Employer','Governmental Entity','Other']} value={this.state.additionalIns.relationship} placeholder={'Please choose...'} handleChange={this.onInputChange} />

          <Input type={'text'} title={'Address:'} name={'address'} value={this.state.additionalIns.address} placeholder={'Enter address:'} handleChange={this.onInputChange} />

          <Input type={'text'} title={'City:'} name={'city'} value={this.state.additionalIns.city} placeholder={'Enter city:'} handleChange={this.onInputChange} />

          <Select title={'State:'} name={'state'} options={this.state.options.state} value={this.state.additionalIns.state} placeholder={'Please choose...'} handleChange={this.onInputChange} />

          <Input type={'number'} title={'Zip:'} name={'zip'} value={this.state.additionalIns.zip} placeholder={'Enter zip code:'} handleChange={this.onInputChange} />

          <Input type={'text'} title={'Contact First Name:'} name={'fName'} value={this.state.additionalIns.fName} placeholder={'Enter contact first name:'} handleChange={this.onInputChange} />

          <Input type={'text'} title={'Contact Last Name:'} name={'lName'} value={this.state.additionalIns.lName} placeholder={'Enter cotact last name:'} handleChange={this.onInputChange} />

          <Input type={'number'} title={'Contact Phone:'} name={'phone'} value={this.state.additionalIns.phone} placeholder={'Enter contact phone number:'} handleChange={this.onInputChange} />

          <Input type={'email'} title={'Contact Email:'} name={'email'} value={this.state.additionalIns.email} placeholder={'Enter contact email:'} handleChange={this.onInputChange} />

          <Button type={'btn btn-success'} action={this.something} title={'Add Ins'} className={'fa fa-paw'}></Button>
        </form>
      );
    }else{

    }
    return(
      <div>
        <h1>Insured Info</h1>
        {form}
      </div>
    );
  }
};

export default InsuredInfo;
