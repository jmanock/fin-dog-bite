import React,{Component} from 'react';
import DogForm from './DogForm';
import DogList from './Edit';

class Holder extends Component{
  state = {
    dogs:[
      {id:1,state:'Iowa',color:'Orange',age:'10',name:'Peez'},
      {id:2,state:'West Virgina',color:'Black',age:'7',name:'Hank'},
      {id:3,state:'Florida',color:'White',age:'6',name:'Brian'}
    ],
    isEdit:0,
    state:'',
    name:'',
    color:'',
    age:''
  };

  handleEditDog = (item) =>{
    this.setState({
      name:item.name,
      state:item.state,
      color:item.color,
      age:item.age,
      isEdit:item.id
    });
  }

  handleChangeTextEdit = (text) =>{
    this.setState({name:text});
  }

  handleChangeSelectEdit = (text) =>{
    this.setState({state:text});
  }

  handleDogAdd = (text,state,color,age) =>{
    var newText = {
      id:this.state.dogs.length + 1,
      name:text,
      state:state,
      color:color,
      age:age
    };
    this.setState({
      dogs:this.state.dogs.concat(newText),
      name:'',
      state:'',
      color:'',
      age:''
    });
  }

  handleDogUpdate = (dog) =>{
    var dogs = this.state.dogs;
    for(var i = 0; i < dogs.length; i++){
      if(dogs[i].id === dog.id){
        dogs.splice(i,1);
      }
    }
    dogs.push(dog);
    this.setState({
      dogs:dogs,
      name:'',
      state:'',
      age:'',
      color:'',
      isEdit:0
    });
  }

  render(){
    return(
      <div>
        <DogForm onDogAdd={this.handleDogAdd} text={this.state.name} {...this.state} changeTextEdit={this.handleChangeTextEdit} onDogUpdate={this.hanleDogUpdate} changeSelectEdit={this.handleChangeSelectEdit} />
        <DogList dogs={this.state.dogs} editDog={this.handleEditDog}/>
      </div>
    );
  }
}
export default Holder;
