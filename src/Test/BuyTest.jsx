import React, {Component} from 'react';

class BuyTest extends Component{
  state = {
    shownForm:true,
    showBuy:false,
    showRates:false
  }
  toggle = (x) =>{
    console.log(x.target.value)
    if(x.target.value === 'form'){
      this.setState({
        shownForm:false,
        showBuy:true,
        showRates:false
      });
    }
    if(x.target.value === 'buy'){
      this.setState({
        shownForm:false,
        showRates:true,
        showBuy:false
      })
    }
  }
  render(){
    const Form = {
      display:this.state.shownForm ? 'block' : 'none'
    }
    const Rates = {
      display:this.state.showRates ? 'block' : 'none'
    }
    const Buy = {
      display:this.state.showBuy ? 'block' : 'none'
    }
    return(
      <div>
        <h1 style={Form}>Form</h1>
        <h1 style={Rates}>Rates</h1>
        <h1 style={Buy}>Buy</h1>
        <button onClick={this.toggle} value='buy'>Buy</button>
        <button onClick={this.toggle} value='form'>Form</button>
      </div>
    )
  }
}
export default BuyTest;
