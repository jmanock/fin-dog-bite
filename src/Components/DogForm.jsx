import React,{Component} from 'react';
import Select from './FormComponents/Select';
import Button from './FormComponents/Button';
import Input from './FormComponents/Input';
import States from './OptionsComponents/State';
import Breeds from './OptionsComponents/Breeds';

class DogForm extends Component{
  state = {
    dog:{
      name:'',color:'',state:'',age:'',email:'',weight:'',bathroom:'',children:'',abuse:'',doesBreed:'',sleep:'',area:'',dogsInHome:'',veterinarian:'',gender:'',reproductive:'',training:'',work:'',dogParks:'',integral:'',humanInjury:'',animalInjury:'',deployed:'',adopted:''
    },
    options:{
      state:States,
      breed:Breeds,
      placeholder:'Please choose...',
      yn:['Yes', 'No']
    }
  };

  componentDidMount(){
    if(this.props.selectedDog !== null){
      this.setState({
        dog:this.props.selectedDog
      });
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.selectedDog !== this.props.selectedDog){
      this.setState({
        dog:nextProps.selectedDog || {
          name:'',color:'',state:'',age:'',email:'',weight:'',bathroom:'',children:'',abuse:'',doesBreed:'',sleep:'',area:'',dogsInHome:'',veterinarian:'',gender:'',reproductive:'',training:'',work:'',dogParks:'',integral:'',humanInjury:'',animalInjury:'',deployed:'',adopted:''
        }
      });
    }
  }

  onFormSubmit = e =>{
    e.preventDefault();
    const clone = this.state.dog;

    if(this.state.dog.id){
      this.props.updateDog(this.state.dog);
    }else{
      this.props.createDog(clone);
      this.setState({
        dog:{name:'',age:'',color:'',state:'',email:'',weight:''}
      });
    }
  }

  onInputChange = e =>{
    const newDog = this.state.dog;
    newDog[e.target.name] = e.target.value;

    this.setState({
      dog:newDog
    });
  }

  onSelectChange = e =>{
    const newDog = this.state.dog;
    newDog[e.target.name] = e.target.value;

    this.setState({
      dog:newDog
    });
  }

  render(){
    return(
      <div className='container'>
        <form onSubmit={this.onFormSubmit}>
          <div className='row'>
            <div className='col-sm-1'></div>

            <div className='col-sm-11'>

              <Input type={'text'} title={'Your Email:'} name={'email'} value={this.state.dog.email} placeholder='Enter your email' handleChange={this.onInputChange} />

              <Input type={'text'} title={"Dog's name:"} name={'name'} value={this.state.dog.name} placeholder={"Enter your dog's name"} handleChange={this.onInputChange} />

              <Input type={'number'} title={'What age is this dog:'} name={'age'} value={this.state.dog.age} placeholder={"Enter your dog's age"} handleChange={this.onInputChange} />

              <Input type={'text'} title={'What color is this dog:'} name={'color'} value={this.state.dog.color} placeholder={"Enter the dog's color:"} handleChange={this.onInputChange} />

              <div className='form-group'>
                <label className='form-control-label'>What is the weight of this dog:</label>
                <div className='input-group'>
                  <input type='number' className='form-control' name='weight' value={this.state.dog.weight} placeholder="Enter dog's weight:" aria-label='dogs weight' aira-describeby='basic' onChange={this.onInputChange} />
                  <div className='input-group-append'>
                    <span className='input-group-text' id='basic'>LBs</span>
                  </div>
                </div>
              </div>

              <Select title={'State:'} name={'state'} options={this.state.options.state} value={this.state.dog.state} placeholder={'Please choose...'} handleChange={this.onSelectChange}/>

              <Select title={'Breed:'} name={'breed'} options={this.state.options.breed} value={this.state.dog.breed} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange}/>

              <Select title={'Where does your dog go for relief/potty most of the time:'} name={'bathroom'} options={['Inside a completely fenced yard or kennel', 'Underground electric dog containment system', 'Outside loose in unfenced yard', 'Permanently tied/tethered outside', 'On tie line for 1 hour or less at a time', 'Leashed walked']} value={this.state.dog.bathroom} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange} />

              <Select title={'Are there children, under the age of 16 living with you the majority of the time:'} name={'children'} options={['Yes', 'No', 'Daycare or babysitting service in the home', 'Foster children in the home']} value={this.state.dog.children} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange}/>

              <Select title={'Have any residents of your household been convicted of animal or domestic abuse in the last 5 years:'} name={'abuse'} options={this.state.options.yn} value={this.state.dog.abuse} handleChange={this.onSelectChange} placeholder={this.state.options.placeholder} />

              <Select title={'Do you breed this dog:'} name={'doesBreed'} options={['No', 'Stud only', '1 litter annually', '2 litters annually']} value={this.state.dog.doesBreed} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange} />

              <Select title={'Where does this dog sleep:'} name={'sleep'} options={['Inside home', 'Garage', 'Outside loose in fenced yard', 'Outside without any restraints', 'Permanent outside kennel', 'Tied out']} value={this.state.dog.sleep} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange} />

              <Select title={'What type of area do you live in:'} name={'area'} options={['Country and/or your dog travels with you', 'City, Town, Suburb, Campus']} value={this.state.dog.area} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange} />

              <Select title={'Total number of dogs in your home:'} name={'dogsInHome'} options={['1','2 to 4','5 or more']} value={this.state.dog.dogsInHome} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange} />

              <Select title={'How often do you tkae this dog to a veterinarian:'} name={'veterinarian'} options={['Annually and would treat for illness or injury', 'Only as required by law', 'Never']} value={this.state.dog.veterinarian} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange} />

              <Select title={'Is this dog current on licenses, vaccinations and other such requirements in your area:'} name={'vaccinations'} options={this.state.options.yn} placeholder={this.state.options.placeholder} value={this.state.dog.vaccinations} handleChange={this.onSelectChange} />

              <Select title={'Gender:'} name={'gender'} options={['Male','Female']} value={this.state.dog.gender} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange} />

              <Select title={'Reproductive status:'} name={'reproductive'} value={this.state.dog.reproductive} options={['Intact', 'Neutered - male', 'Spayed - female']} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange} />

              <Select title={'What type of training or work does this dog have:'} name={'training'} options={['None or basic', 'Intermediate', 'Advanced', 'Therapy dog','Hunting, gun, sporting off leash, farm, hearder', 'Sled dog racing', 'Musing for hire', 'Freighting', 'War or police dog', 'Professionally trained personal protection or professionally trained guard dog']} value={this.state.dog.training} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange} />

              <Select title={'Do you take this dog to work regularly:'} name={'work'} options={this.state.options.yn} value={this.state.dog.work} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange} />

              <Select title={'Is this dog involved or integral in your work as a therapist, teacher, counselor, or other similary:'} name={'integral'} options={this.state.options.yn} value={this.state.dog.integral} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange} />

              <Select title={'Do you take this dog to off leash dog parks:'} name={'dogParks'} options={this.state.options.yn} value={this.state.dog.dogParks} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange} />

              <Select title={'Human injury:'} name={'humanInjury'} options={['None', 'Injured a child - leaving minor bruising, scratch but no broken skin - one time', 'Injured an adult - leaving minor bruising, scratch but no broken skin - one time', 'Injured a child - breaking skin, no permanent scarring', 'Injured an adult - breaking skin, no permanent scarring', 'Injured a child - requiring medical attention and/or stitches', 'Injured and adult - requiring medical attention and/or stitches', 'Injured a child more than once', 'Injured an adult more than once']} value={this.state.dog.humanInjury} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange} />

              <Select title={'Has this dog every injured another animal:'} name={'animalInjury'} options={['None', 'Injured another animal', 'Killed another animal', 'Injured more than one animal', 'Killed more than one animal']} value={this.state.dog.animalInjury} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange} />

              <Select title={'Has this dog ever been involved with animal services:'} name={'animalServices'} options={['Never', 'Once for breaking the law - no injuries', 'Confiscated and/or fines were issued', 'Been labled dangerous or vicious']} value={this.state.dog.animalServices} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange} />

              <Select title={'Is this dog in a foster arrangement where the owner has been deployed:'} name={'deployed'} options={this.state.options.yn} value={this.state.dog.deployed} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange} />

              <Select title={'Is this dog in your home with the intent that he/she will be adopted:'} name={'adopted'} options={this.state.options.yn} value={this.state.dog.adopted} placeholder={this.state.options.placeholder} handleChange={this.onSelectChange} />

              <Button type={'btn btn-success'} action={this.onFormSubmit} title={'Next'} className={'fa fa-paw'} />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default DogForm;
