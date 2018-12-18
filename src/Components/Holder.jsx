import React, {Component,Fragment} from 'react';
import DogForm from './DogForm';
import Rates from './Rates';
import FormClient from './TestEdit';

class Holder extends Component{
  state = {
    dogs:[
      {id:1, state:'Iowa', color:'orange',age:'10'},
      {id:2, state:'West Virgina',color:'white',age:'5'},
      {id:3, state:'South Carolina',color:'black',age:'7'},
      {id:4, state:'Florida', color:'brown',age:'1'}
    ]
  };

  addDog = (dog) =>{
    dog.id = Math.random();
    let dogs = [...this.state.dogs,dog];
    this.setState({
      dogs
    });
  }

  deleteDog = id =>{
    const dogs = this.state.dogs.filter(dog =>{
      return dog.id !== id;
    });
    this.setState({
      dogs:dogs
    });
  }

  editDog = dog =>{
    console.log(dog);
    //Need to push this info into edit page
  }

  render(){
    return(
      <Fragment>
        <DogForm dogs={this.state.dogs} addDog={this.addDog} />
        <Rates  dogs={this.state.dogs} deleteDog={this.deleteDog} editDog={this.editDog} addDog={this.addDog}/>
        <FormClient />
      </Fragment>
    );
  }
}

export default Holder
