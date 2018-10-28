import React, {Component} from 'react';
import FormTest from './FormTest';
import RatesTest from './RatesTest';
import BuyTest from './BuyTest';

class HolderTest extends Component{
  state = {
    dogs:[
      {id:1, state:'Nebraska', age:'10', color:'Brown', additionalIns:'3'},
      {id:2, state:'Iowa', age:'5', color:'Tan', additionalIns:'1'}
    ]
  }
  deleteDog = (id) =>{
    const dogs = this.state.dogs.filter(dog => {
      return dog.id !== id;
    });
    this.setState({
      dogs:dogs
    })
  }
  addDog = (dog) =>{
    dog.id = Math.random();
    let dogs = [...this.state.dogs,dog];
    this.setState({
      dogs
    })
  }
  render(){
    return(
      <div className='container'>
        <FormTest addDog={this.addDog} />
        <RatesTest dogs={this.state.dogs} deleteDog={this.deleteDog} addDog={this.addDog} />
        <BuyTest dogs={this.state.dogs} />
      </div>
    )
  }
}

export default HolderTest;
