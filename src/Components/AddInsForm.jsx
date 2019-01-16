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
    const clone = this.state.Ins;

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
          <Button type={'btn btn-success'} action={this.onFormSubmit} title={'Next'} className={'fa fa-paw'} />
        </form>
      </div>
    )
  }
}

export default AddInsForm;
