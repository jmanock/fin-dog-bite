import React, {Component} from 'react';
import FormTest from './FormTest';
import RatesTest from './RatesTest';
import BuyTest from './BuyTest';

class HolderTest extends Component{
  state = {
    dogs:[
      {id:1, state:'Nebraska', age:'10', color:'Brown'},
      {id:2, state:'Iowa', age:'5', color:'Tan'}
    ],
    additionalIns:'',
    showForm:true,
    showRates:false,
    showBuy:false
  }
  deleteDog = (id) =>{
    const dogs = this.state.dogs.filter(dog => {
      return dog.id !== id;
    });
    this.setState({
      dogs:dogs
    })
  }
  editDog = (id) =>{
    console.log(id,'Hi');
  }
  addDog = (dog) =>{
    dog.id = Math.random();
    let dogs = [...this.state.dogs,dog];
    this.setState({
      dogs
    })
  }
  toggle = (e) =>{
    if(e.target.value === 'comtinue'){
      this.setState({
        showForm:false,
        showBuy:true
      })
    }
  }
  addIns = (x) =>{
    this.setState({
      additionalIns:x
    });
  }
  render(){
    const Form = {
      display:this.state.showForm ? 'block' : 'none'
    }
    const Rates = {
      display:this.state.showRates ? 'block' : 'none'
    }
    const Buy = {
      display:this.state.showBuy ? 'block' : 'none'
    }

    return(
      <div className='container'>
        <div style={Form}>
          <FormTest addDog={this.addDog} toggle={this.toggle} />
        </div>
        <div style={Rates}>
          <RatesTest dogs={this.state.dogs} deleteDog={this.deleteDog} addDog={this.addDog} editDog={this.editDog} addIns={this.addIns}/>
        </div>
        <div style={Buy}>
          <BuyTest style={Buy} dogs={this.state.dogs} />
        </div>

      </div>
    )
  }
}

export default HolderTest;
