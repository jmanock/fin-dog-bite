import React, {Component} from 'react';
import FormTest from './FormTest';
import RatesTest from './RatesTest';
import BuyTest from './BuyTest';

class HolderTest extends Component{
  state = {
    dogs:[
      {id:1, state:'Nebraska', age:'10', color:'Brown'},
      {id:2, state:'Iowa', age:'5', color:'Tan'},
      {id:3, state:'Florida', age:'10', color:'Black'}
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
    console.log(e.target.value);
    if(e.target.value === 'form'){
      this.setState({
        showForm:false,
        showRates:true,
        showBuy:false
      });
    }
    if(e.target.value === 'rates'){
      this.setState({
        showForm:false,
        showRates:false,
        showBuy:true
      });
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
          <RatesTest toggle={this.toggle} dogs={this.state.dogs} deleteDog={this.deleteDog} addDog={this.addDog} editDog={this.editDog} addIns={this.addIns}/>
        </div>
        <div style={Buy}>
          <BuyTest style={Buy} dogs={this.state.dogs} />
        </div>

      </div>
    )
  }
}

export default HolderTest;
