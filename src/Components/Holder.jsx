import React,{Component} from 'react';
import DogForm from './DogForm';
import DogList from './DogList';
import AddInsForm from './AddInsForm';
import AddInsList from './AddInsList';
import Rates from './Rates';

const dogs = [

  {id:'1',name:'Brian',color:'Orange',state:'West Virginia',age:'10',email:'brian@test.com',weight:'2'},
  {id:'2',name:'Peez',color:'White',state:'Florida',age:'11',email:'peez@test.com',weight:'10'},
  {id:'3',name:'Hank',color:'Black',state:'Iowa',age:'2',email:'hank@test.com',weight:'20'}
];

const ins = [
  // {id:'1', interestName:'Ross', relationship:'Other',address:'123 fake st'},
  // {id:'2', interestName:'manock', relationship:'Other', address:'123 main st'},
  // {id:'3', interestName:'Knapp', relationship:'Other', address:'123 1st'}
]
class Holder extends Component{
  state = {
    dogs:dogs,
    ins:ins,
    isOpen:true,
    idCount:3,
    idInsCount:0,
    selectedDog:null,
    selectedIns:null,
    rates:{
      id:'', total:'', coverage:'', insAmount:'', down:''
    }
  };

  handleEditOpenDog = updatedDog =>{
    console.log('updateDog');
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

  handleEditOpenIns = updatedIns =>{
    console.log('updatedIns');
    this.setState({
      ins:this.state.ins.map(inss => {
        if(inss.id === updatedIns.id){
          return Object.assign({},updatedIns);
        }else{
          return inss;
        }
      }),
      selectedIns:null
    });
  }

  handleEditDog = dogToUpdate => () =>{
    console.log('Edit DOG button pushed');
    this.setState({
      selectedDog:dogToUpdate,
      isOpend:true
    });
  }

  handleEditIns = insToUpdate => () =>{
    console.log('EditIns button pushed', insToUpdate);
    this.setState({
      selectedIns:insToUpdate,
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

  handleCreateIns = newIns =>{
    let curId = this.state.idInsCount;
    newIns.id = curId + 1;

    let updatedIns = [...this.state.ins];
    updatedIns.push(newIns);

    this.setState({
      ins:updatedIns,
      idInsCount:curId+1
    });
  }

  handleDeleteDog = dogId => () =>{
    let updatedDogs = this.state.dogs.filter(e => e.id !== dogId);

    this.setState({
      dogs:updatedDogs
    });
    console.log('dogGone');
  }

  handleDeleteIns = insId => () =>{
    let updatedIns = this.state.ins.filter(e => e.id !== insId);

    this.setState({
      ins:updatedIns
    });
    console.log('insGone');
  }

  addIns = (addInsured) =>{
    var rows = [];
    for(var i = 0; i < addInsured; i++){
      rows.push({id:i+1, interestName:'', relationship:'', address:'', city:'', state:'', zip:'', contactName:'', contactPhone:'', contactEmail:''});
      this.setState({
        ins:rows
      })
    }
  }

  addRates = rates =>{
    console.log(rates,'rates');
    this.setState({
      rates:{
        id:rates.id,
        total:rates.total,
        coverage:rates.coverage,
        insAmount:rates.insAmout,
        down:rates.down
      }
    })
  }

  render(){
    return(
      <div className='container'>
        <DogForm updateDog={this.handleEditOpenDog} selectedDog={this.state.selectedDog} createDog={this.handleCreateDog} />

        <DogList deleteDog={this.handleDeleteDog} handleEditDog={this.handleEditDog} dog={this.state.dogs} addIns={this.addIns}/>

        <AddInsList deleteIns={this.handleDeleteIns} handleEditIns={this.handleEditIns} ins={this.state.ins} />

        <AddInsForm updateIns={this.handleEditOpenIns} selectedIns={this.state.selectedIns} createIns={this.handleCreateIns}/>

        <Rates state={this.state} addRates={this.addRates}/>
      </div>
    )
  }
}

export default Holder;
