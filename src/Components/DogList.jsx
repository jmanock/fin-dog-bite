import React,{Component} from 'react';
import DogItem from './DogItem';
import AddIns from './AddIns';

class DogList extends Component{
  render(){
    return(
      <div className='dogList'>
        <h1>title</h1>
        {this.props.dogs.map((dog) =>{
          return <DogItem deleteDog={this.props.deleteDog} key={dog.id} handleEditDog={this.props.handleEditDog} dog={dog} />
        })}
        <AddIns state={this.props.state} addIns={this.props.addIns}/>
      </div>
    );
  }
};

export default DogList;
