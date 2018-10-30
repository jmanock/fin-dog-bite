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
    additionalIns:''
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
  addIns = (x) =>{
    this.setState({
      additionalIns:x
    });
  }
  render(){
    return(
      <div className='container'>
        <FormTest addDog={this.addDog} />
        <RatesTest dogs={this.state.dogs} deleteDog={this.deleteDog} addDog={this.addDog} editDog={this.editDog} addIns={this.addIns}/>
        <BuyTest dogs={this.state.dogs} />
      </div>
    )
  }
}

export default HolderTest;
