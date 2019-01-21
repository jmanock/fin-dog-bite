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
    if(this.props.selectedIns !== null){
      this.setState({
        Ins:this.props.selectedIns
      });
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.selectedIns !== this.props.selectedIns){
      this.setState({
        Ins:nextProps.selectedIns || {
          interestName:'', relationship:'', address:'', city:'', state:'', zip:'', contactName:'', contactPhone:'', contactEmail:''
        }
      });
    }
  }

  onFormSubmit = e =>{
    console.log(this.state.Ins);
    e.preventDefault();

    if(this.state.Ins.id){
      this.props.updateIns(this.state.Ins);
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
      <div className='container'>
        <form onSubmit={this.onFormSubmit}>

          <Input type={'text'} title={'Interest name:'} name={'interestName'} value={this.state.Ins.interestName} placeholder={'Enter interest name'} handleChange={this.onInputChange} />

          <Select title={'Relationship:'} name={'relationship'} options={['Landlord', 'Employer', 'Governmental entity','Other']} value={this.state.Ins.relationship} placeholder={'Please choose...'} handleChange={this.onInputChange} />

          <Input type={'text'} title={'Address:'} name={'address'} value={this.state.Ins.address} placeholder={'Enter address:'} handleChange={this.onInputChange} />

          <Select title={'State:'} name={'state'} options={this.state.options.state} handleChange={this.onInputChange} value={this.state.Ins.state} placeholder={'Please choose...'} />

          <Input type={'number'} title={'Zip'} name={'zip'} value={this.state.Ins.zip} placeholder={'Enter zip'} handleChange={this.onInputChange} />

          <Input type={'text'} title={'Contact name:'} name={'contactName'} value={this.state.Ins.contactName} handleChange={this.onInputChange} placeholder={'Enter contact name'} />

          <Input type={'number'} title={'Contact phone:'} name={'contactPhone'} value={this.state.Ins.contactPhone} handleChange={this.onInputChange} placeholder={'Enter contact phone'} />

          <Input type={'email'} title={'Contact email:'} name={'contactEmail'} value={this.state.Ins.contactEmail} handleChange={this.onInputChange} placeholder={'Enter contact email'} />

          <Button type={'btn btn-success'} action={this.onFormSubmit} title={'Next'} className={'fa fa-paw'} />
        </form>
      </div>
    )
  }
}

export default AddInsForm;
