import React,{Component} from 'react';
import Select from './FormComponents/Select';
import Button from './FormComponents/Button';

class AddIns extends Component{
  state = {addIns:''}
  onSelectChange = e =>{
    this.setState({
      addIns:e.target.value
    })
	}

  addInsured = () =>{
    this.props.addIns(this.state.addIns);
  }
  render(){
    return(
      <div>
        <Select title={'AddIns'} name={'addIns'} options={[0,1,2,3,4,5]} handleChange={this.onSelectChange} placeholder={'Please choose...'} value={this.state.addIns} />
        <Button type={'btn btn-success'} action={this.addInsured} title={'Next'} className={'fa fa-paw'} />
      </div>

    );
  }
};

export default AddIns;
