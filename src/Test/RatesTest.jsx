import React, {Component} from 'react';
import Select from '../FormComponents/Select';

class RatesTest extends Component{
  state = {
    additionalInsured: ''
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleSubmit = (e) =>{
    // This needs to only add outside of the object
    e.preventDefault();
    this.props.addDog(this.state);
  }
  render(){
    const dogList = this.props.dogs.length ? (
      this.props.dogs.map(dog => {
        return(
          <div className='collection' key={dog.id}>

            
            <span>{dog.state} <button onClick={()=>{this.props.deleteDog(dog.id)}}>Delete Dog</button></span>
          </div>
        )
      })
    ):(
      <p className='center'>You don't have anything</p>
    )
    return(
      <div>
        <small>{dogList}</small>
        <Select  title={'Additional Insured'} name={'additionalInsured'} options={['1','2','3','4','5']} placeholder={'Must pick one'} handleChange={this.handleChange} />
        <button type='submit' onClick={this.handleSubmit}>Click</button>
      </div>
    )
  }
}
export default RatesTest;
