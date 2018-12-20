import React,{Component} from 'react';
import DogForm from './DogForm';
import DogList from './Edit';
import Holding from './TestHold';
class Holder extends Component{
  state = {
    dogs:[
      {id:1,state:'Iowa',color:'Orange',age:'10',Name:'Peez'},
      {id:2,state:'West Virgina',color:'Black',age:'7',Name:'Hank'},
      {id:3,state:'Florida',color:'White',age:'6',Name:'Brian'}
    ],
    isEdit:0,
    state:'',
    Name:'',
    color:'',
    age:''
  };

  handleEditDog = (item) =>{
    this.setState({
      Name:item.Name,
      state:item.state,
      color:item.color,
      age:item.age,
      isEdit:item.id
    });
  }

  handleChangeTextEdit = (x,text) =>{
    this.setState({
      Name:text
    });
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
      Name:'',
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
      Name:'',
      state:'',
      age:'',
      color:'',
      isEdit:0
    });
  }

  render(){
    return(
      <div>
        <Holding />
        
      </div>
    );
  }
}
export default Holder;
