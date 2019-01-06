import React,{Component} from 'react';
import Select from './FormComponents/Select';
import Input from './FormComponents/Input';
import States from './OptionsComponents/State';
import Button from './FormComponents/Button';

class AddInsForm extends Component{
  state = {
    additionalIns:{
      interestName:'',relationship:'',address:'',state:'',zip:'',contactPhone:'',contactEmail:'',contactName:''
    },
    options:{
      state:States
    }
  }
  componentDidMount(){
    if(this.props.state.selectedAddIns !== null){
      this.setState({
        additionalIns:this.props.selectAddIns
      });
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.selectedAddIns !== this.props.selectedAddIns){
      this.setState({
        additionalIns:nextProps.selectedIns || {
          interestName:'',relationship:'',address:'',state:'',zip:'',contactPhone:'',contactEmail:'',contactName:''
        }
      });
    }
  }

  onFormSubmit = e =>{
    e.preventDefault();
    const clone = this.state.additionalIns;

    if(this.state.additionalIns.id){
      this.props.updateIns(this.state.additionalIns);
    }else{
      this.props.createIns(clone);
      this.setState({
        additionalIns:{interestName:'',relationship:'',address:'',state:'',zip:'',contactPhone:'',contactEmail:'',contactName:''}
      });
    }
  }

  onInputChange = (e) =>{
    const newIns = this.state.additionalIns;
    newIns[e.target.name] = e.target.value;

    this.setState({
      additionalIns:newIns
    });
  }

  render(){
    console.log('state::',this.state);
    return(
      <div className='container'>
        <h1>Add Ins Form</h1>
          <form onSubmit={this.onFormSubmit}>

            <Input type={'text'} title={'Interest name:'} name={'interestName'} value={this.state.additionalIns.interestName} placeholder={'Enter interest name'} handleChange={this.onInputChange} />

            <Select title={'Relationship:'} name={'relationship'} options={['Landlord','Employer','Governmental entity','Other']} value={this.state.additionalIns.reltaionship} placeholder={'Please choose...'} handleChange={this.onInputChange} />

            <Input type={'text'} title={'Address:'} name={'address'} value={this.state.additionalIns.address} placeholder={'Enter address:'} handleChange={this.onInputChange} />

            <Select title={'State:'} name={'state'} options={this.state.options.state} value={this.state.additionalIns.state} placeholder={'Please choose...'} handleChange={this.onInputChange} />

            <Input type={'number'} title={'Zip:'} name={'zip'} value={this.state.additionalIns.zip} placeholder={'Enter zip'} handleChange={this.onInputChange} />

            <Input type={'text'} title={'Contact name:'} name={'contactName'} value={this.state.additionalIns.contactName} placeholder={'Enter name'} handleChange={this.onInputChange} />

            <Input type={'number'} title={'Contact phone:'} name={'contactPhone'} value={this.state.additionalIns.contactPhone} placeholder={'Enter phone number:'} handleChange={this.onInputChange} />

            <Input type={'email'} title={'Contact email'} name={'contactEmail'} value={this.state.additionalIns.contactEmail} placeholder={'Enter email:'} handleChange={this.onInputChange} />

            <Button type={'btn btn-success'} action={this.onFormSubmit} title={'Save'} className={'fa fa-paw'} />
          </form>
      </div>
    )
  }
}

export default AddInsForm;
