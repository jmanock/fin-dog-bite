import React,{Component} from 'react';
import DogForm from './DogForm';
import DogList from './DogList';
import Rates from './Rates';
import PersonalInfo from './PersonalInfo';
import InsuredInfo from './InsuredInfo';

const dogs = [
  // {id:'1',name:'Brian',color:'Orange',state:'West Virginia',age:'10',email:'brian@test.com',weight:'2'},
  // {id:'2',name:'Peez',color:'White',state:'Florida',age:'11',email:'peez@test.com',weight:'10'},
  // {id:'3',name:'Hank',color:'Black',state:'Iowa',age:'2',email:'hank@test.com',weight:'20'}
];
const addIns = []
class Holder extends Component{
  state = {
    dogs:dogs,
    isOpen:true,
    idCount:3,
    selectedDog:null,
    addIns:addIns,
    rates:{
      id:'',total:'',coverage:'',insAmount:'',down:''
    }
  };

  handleEditOpenDog = updatedDog =>{
    this.setState({
      dogs:this.state.dogs.map(dog => {
        if(dog.id === updatedDog.id){
          return Object.assign({},updatedDog);
        }else{
          return dog;
        }
      }),
      selectedDog:null
    });
  }

  handleEditDog = dogToUpdate => () =>{
    console.log(dogToUpdate);
    this.setState({
      selectedDog:dogToUpdate,
      isOpend:true
    });
  }

  handleCreateDog = newDog =>{
    let curId = this.state.idCount;
    newDog.id = curId + 1;

    let updatedDogs = [...this.state.dogs];
    updatedDogs.push(newDog);

    this.setState({
      dogs:updatedDogs,
      idCount:curId + 1
    });
  }

  handleDeleteDog = dogId => () =>{
    let updatedDogs = this.state.dogs.filter(e => e.id !== dogId);

    this.setState({
      dogs:updatedDogs
    });
    console.log('dog gone');
  }

  openForm = () =>{
    this.setState({
      selectedDog:null,
      isOpen:true
    });
  }

  addIns = (addInsured) =>{
    var rows=[];
    for(var i = 0; i<addInsured; i++){
      rows.push({id:i,interestName:'',relationship:'',address:'',city:'',state:'',zip:'',contactName:'',contactPhone:'',contactEmail:''})
      this.setState({
        addIns:rows
      })
    }
  }

  addRates = (rates)=>{
    this.setState({
      rates:{id:rates.id,total:rates.total,coverage:rates.coverage, insAmount:rates.insAmount,down:rates.down}
    })
  }
  handleEditIns = addIns => () =>{
    console.log(addIns);
  }

  render(){
    return(
      <div className='container'>
        <DogForm updateDog={this.handleEditOpenDog} openForm={this.openForm} selectedDog={this.state.selectedDog} createDog={this.handleCreateDog} />
        <DogList deleteDog={this.handleDeleteDog} handleEditDog={this.handleEditDog} dogs={this.state.dogs} state={this.state} addIns={this.addIns}/>

        <InsuredInfo  state={this.state} Edit={this.handleEditIns} />

        <Rates state={this.state} addRates={this.addRates}/>

        <PersonalInfo personalInfo={this.personalInfo} state={this.state} />

      </div>
    );
  }
};

export default Holder;
