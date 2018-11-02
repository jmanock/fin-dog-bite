import React, {Component} from 'react';

class BuyTest extends Component{
  state = {
    shown:true
  }
  toggle = () =>{
    this.setState({
      shown:!this.state.shown
    });
  }
  render(){
    var shown = {
      display:this.state.shown ? 'block' : 'none'
    };
    var hidden = {
      display:this.state.shown ? 'none' : 'block'
    };
    return(
      <div>
        <h2 style={shown}>this.state.shown = true</h2>
        <h2 style={hidden}>this.state.shown = false</h2>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    )
  }
}
export default BuyTest;
