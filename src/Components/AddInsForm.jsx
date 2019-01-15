import React,{Component} from 'react';
import Select from './FormComponents/Select';
import Button from './FormComponents/Button';
import Input from './FormComponents/Input';
import States from './OptionsComponents/State';

class AddInsForm extends Component{
  state = {
    addIns:{
      interestName:'', relationship:'',address:'',state:'',zip:'',contactPhone:'',contactEmail:'',contactName:''
    },
    options:{
      state:States
    }
  }

  componentDidMount(){
    if(this.props.selectedIns !== null){
      this.setState({
        addIns:this.props.selectedIns
      });
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.selectedIns !== this.props.selectedIns){
      this.setState({
        addIns:nextProps.selectedIns || {
          interestName:'', relationship:'', address:'', zip:'', contactPhone:'', contactEmail:'', contactName:''
        }
      });
    }
  }

  onFormSubmit = e =>{
    e.preventDefault();
    const clone = this.state.addIns;

    if(this.state.addIns.id){
      this.props.updateIns(this.state.addIns);
    }else{
      this.props.createIns(clone);
      this.setState({
        addIns:{interestName:'', relationship:'', address:'', zip:'', contactPhone:'', contactEmail:'', contactName:''}
      });
    }
  }

  onInputChange = e =>{
    const newIns = this.state.addIns;
    newIns[e.target.name] = e.target.value;

    this.setState({
      addIns:newIns
    });
  }

  render(){
    return(
      <div className='container'>
        <h1>Add Ins Form</h1>
          <form onSubmit={this.onFormSubmit}>

            <Input type={'text'} title={'Interest name:'} name={'interestName'} value={this.state.addIns.interestName} placeholder={'Enter interest name'} handleChange={this.onInputChange} />

            <Select title={'Relationship:'} name={'relationship'} options={['Landlord','Employer','Governmental entity','Other']} value={this.state.addIns.reltaionship} placeholder={'Please choose...'} handleChange={this.onInputChange} />

            <Input type={'text'} title={'Address:'} name={'address'} value={this.state.addIns.address} placeholder={'Enter address:'} handleChange={this.onInputChange} />

            <Select title={'State:'} name={'state'} options={this.state.options.state} value={this.state.addIns.state} placeholder={'Please choose...'} handleChange={this.onInputChange} />

            <Input type={'number'} title={'Zip:'} name={'zip'} value={this.state.addIns.zip} placeholder={'Enter zip'} handleChange={this.onInputChange} />

            <Input type={'text'} title={'Contact name:'} name={'contactName'} value={this.state.addIns.contactName} placeholder={'Enter name'} handleChange={this.onInputChange} />

            <Input type={'number'} title={'Contact phone:'} name={'contactPhone'} value={this.state.addIns.contactPhone} placeholder={'Enter phone number:'} handleChange={this.onInputChange} />

            <Input type={'email'} title={'Contact email'} name={'contactEmail'} value={this.state.addIns.contactEmail} placeholder={'Enter email:'} handleChange={this.onInputChange} />

            <Button type={'btn btn-success'} action={this.onFormSubmit} title={'Save'} className={'fa fa-paw'} />
          </form>
      </div>
    );
  }
}

export default AddInsForm;
