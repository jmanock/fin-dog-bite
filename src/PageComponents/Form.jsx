import React from 'react';
import Input from '../FormComponents/Input';
import {Link} from 'react-router-dom';
import Select from '../FormComponents/Select';
import Button from '../FormComponents/Button';

const Form = (props) => {
  return(
    <div className='container'>
      <h1>Form Page</h1>
      <form>
        <div className='row'>
          <div className='col-sm-10'>
            <Input type={'email'} title={'Your email:'} name={'email'} value={props.newUser.email} placeholder={'Enter your email address'} handleChange={props.handleChange} />

            <Input type={'text'} title={"Dog's name:"} name={'dogsName'} value={props.newUser.dogsName} placeholder={"Enter your dog's name"} />

            <Input type={'number'} title={"What age is this dog:"} name={'age'} value={props.newUser.age} placeholder={"Enter your dog's age"} handleChange={props.handleChange} />

            <div className='form-group'>
              <label className='form-control-label'>What is the weight of this dog:</label>
              <div className='input-group'>
                <input type='number' className='form-control' name='weight' value={props.newUser.weight} placeholder="Enter dog's weight" aria-label='Dogs Weight' aira-describeby='basic' onChange={props.handleChange} />
                <div className='input-group-append'>
                  <span className='input-group-text' id='basic'>LBs</span>
                </div>
              </div>
            </div>

            <Input type={'text'} title={'What color is this dog:'} name={'color'} value={props.newUser.color} placeholder={"Enter the dog's color"} handleChange={props.handleChange} />

            <Select title={'Choose a state:'} name={'state'} options={props.newUser.stateOptions} placeholder={'Select a state'} value={props.newUser.state} handleChange={props.handleChange} />

            <Select title={'Choose a breed:'} name={'breed'} options={props.newUser.breedOptions} placeholder={'Select a breed'} value={props.newUser.breed} handleChange={props.handleChange} />

            <Select title={'Where does your dog go for relief/potty most of the time:'} name={'bathroom'} options={['Inside a completely fenced yard or kennel', 'Underground electric dog containment system', 'Outside loose in unfenced yard', 'Permanently tied/tetherd outside', 'On tie line for 1 hour or less at a time', 'Leash walked']} value={props.newUser.bathroom} placeholder={props.newUser.placeholder} handleChange={props.handleChange} />

            <Select title={'Are there children, under the age of 16 living with you the majority of the time:'} name={'children'} options={['Yes', 'No', 'Daycare or babysitting service in the home', 'Foster children in the home']} value={props.newUser.children} placeholder={props.newUser.placeholder} handleChange={props.handleChange} />

            <Select title={'Have any residents of your household been convicted of animal or domestic abuse in the last 5 years:'} name={'abuse'} options={props.newUser.ynOptions} value={props.newUser.abuse} placeholder={props.newUser.placeholder} handleChange={props.handleChange} />

            <Select title={'Do you breed this dog:'} name={'doesBreed'} options={['No', 'Stud only', '1 litter annually', '2 litters annually']} value={props.newUser.doesBreed} placeholder={props.newUser.placeholder} handleChange={props.handleChange} />

            <Select title={'Where does this dog sleep:'} name={'sleep'} options={['Inside home', 'Garage', 'Outside loose in fenced yard', 'Outside without any restraints', 'Permanent outside kennel', 'Tied out']} value={props.newUser.sleep} placeholder={props.newUser.placeholder} handleChange={props.handleChange} />

            <Select title={'What type of area do you live in:'} name={'area'} options={['Country and/or your dog travels with you', 'City, Town, Suburb, Campus']} value={props.newUser.area} placeholder={props.newUser.placeholder} handleChange={props.handleChange} />

            <Select title={'Total number of dogs in your home:'} name={'dogsInHome'} options={['1','2 to 4', '5 or more']} value={props.newUser.dogsInHome} placeholder={props.newUser.placeholder} handleChange={props.handleChange} />

            <Select title={'How often do you take this dog to a veterinarian:'} name={'veterinarian'} options={['Annually and would treat for illness or injury', 'Only as required by law', 'Never']} value={props.newUser.veterinarian} placeholder={props.newUser.placeholder} handleChange={props.handleChange} />

            <Select title={'Is this dog current on licenses, vaccinations and other such requirements in your area:'} name={'vaccinations'} options={props.newUser.ynOptions} placeholder={props.newUser.placeholder} value={props.newUser.vaccinations} handleChange={props.handleChange} />

            <Select title={'Gender'} name={'gender'} options={['Male', 'Female']} value={props.newUser.gender} placeholder={props.newUser.placeholder} handleChange={props.handleChange} />

            <Select title={'Reproductive status:'} name={'reproductive'} options={['Intact', 'Neutered - Male', 'Spayed - Female']} value={props.newUser.reproductive} placeholder={props.newUser.placeholder} handleChange={props.handleChange} />

            <Select title={'What type of training or work does this dog have:'} name={'training'} options={['None or basic', 'Intermediate', 'Advanced', 'Therapy dog', 'Hunting, Gun, Sporting off leash, Farm, Hearding','sled dog racing, Musing for hire, freighting', 'War or Police service dog, professionally trained personal protection or professionally trained guard dog']} value={props.newUser.training} placeholder={props.newUser.placeholder} handleChange={props.handleChange} />

            <Select title={'Do you take this dog to work regularly:'} name={'work'} options={props.newUser.ynOptions} value={props.newUser.work} placeholder={props.newUser.placeholder} handleChange={props.handleChange} />

            <Select title={'Is this dog involved or integral in your work as a therapist, teacher, counselor, or other similary:'} name={'integral'} options={props.newUser.ynOptions} value={props.newUser.integral} placeholder={props.newUser.placeholder} handleChange={props.handleChange} />

            <Select title={'Do you take this dog to off leash dog parks:'} name={'dogParks'} options={props.newUser.ynOptions} value={props.newUser.dogParks} placeholder={props.newUser.placeholder} handleChange={props.handleChange} />

            <Select title={'Human injury:'} name={'humanInjury'} options={['None', 'Injured a child - leaving minor bruising, scratch but no broken skin - one time', 'Injured an adult - leaving minor bruising, scratch but no broken skin - one time', 'Injured a child - breaking skin, no permanent scarring', 'Injured an adult - breaking skin, no permanent scarring', 'Injured a child - requiring medical attention and/or stitches', 'Injured an adult - requiring medical attention and/or stitches', 'Injured a child more than once', 'Injured an adult more than once']} value={props.newUser.humanInjury} placeholder={props.newUser.placeholder} handleChange={props.handleChange} />

            <Select title={'Has this dog ever injured another animal:'} name={'animalInjury'} options={['None', 'Injured another animal', 'Killed another animal', 'Injured more than one animal', 'Killed more than one animal']} value={props.newUser.animalInjury} placeholder={props.newUser.placeholder} handleChang={props.handleChange} />

            <Select title={'Has this dog ever been involved with animal services'} name={'animalServices'} options={['Never', 'Once for breaking the law - no injuries', 'Confiscated and/or fines were issued', 'Been labled dangerous or vicious']} value={props.newUser.animalServices} placeholder={props.newUser.placeholder} handleChange={props.handleChange} />

            <Select title={'Is this dog in a foster arrangement where the owner has been deployed:'} name={'deployed'} options={props.newUser.ynOptions} value={props.newUser.deployed} placeholder={props.newUser.placeholder} handleChange={props.handelChange} />

            <Select title={'Is this dog in your home with the intent that he/she will be adopted:'} name={'adopted'} options={props.newUser.ynOptions} value={props.newUser.adopted} placeholder={props.newUser.placeholder} handleChange={props.handleChange} />
          </div>
        </div>
      </form>
      <Link to={{pathname:'/Rates', state:{newUser:props.newUser}}}>
        <Button type={'primary'} title={'Continue'}></Button>
      </Link>
    </div>
  )
}
export default Form;
