import React,{Component} from 'react';

class Rates extends Component{
  render(){
    console.log(this.props.state.dogs, this.props.state.addIns);
    return(
      <h1>Rates Section</h1>
    )
  }
}

export default Rates
