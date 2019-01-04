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

  componentWillReceiveProps(nextProps){
    this.setState({
      additionalIns:nextProps.state.addIns
    });
  }

  onInputChange = (e) =>{
    const newPerson = this.state.additionalIns;
    newPerson[e.target.name]=e.target.value;
    this.setState({
      additionalIns:newPerson
    })
  }

  addInsuredForm = () =>{
    console.log(this.state);
  }
  edit = (x) =>{
    console.log(x);
    this.props.handleEdit(x.id)
  }
  render(){
    let knew;
    if(this.state.additionalIns.length > 0){
      knew = this.state.additionalIns.map((x) => {
        return(
          <div key={x.id}>
            <Button action={this.edit(x.id)} type={'btn btn-success'} title={'Edit'}></Button>
          </div>

        )
      })
    }

    return(
      <div>
        <h1>Insured Info</h1>
        {knew}

      </div>
    )
  }
};

export default InsuredInfo;
