import React,{Component} from 'react';
import Select from './FormComponents/Select';

class AddIns extends Component{
  state = {
    addIns:'0'
  }

  onSelectChange = e =>{
    this.setState({
      addIns:e.target.value
    });
	}

  addInsured = () =>{
    this.props.addIns(this.state.addIns);
  }
  render(){

    return(
      <div>
        <Select title={'AddIns'} name={'addIns'} options={['0','1','2','3','4','5']} handleChange={this.onSelectChange} placeholder={'Additional Ins'} value={this.state.addIns} />
        <button type='submit' onClick={this.addInsured}>Next</button>
      </div>

    );
  }
};

export default AddIns;
