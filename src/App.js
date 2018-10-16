import React, {Component} from 'react';
import Form from './page1';
import Rater from './page2';
import Buy from './page3';

class App extends Component{
  state = {
    newUser:{
      name:''
    }
  }
  handleChange = (e) =>{
    this.setState({
      newUser:{
        [e.target.id]:e.target.value
      }
    })
  }
  render(){
    const {name} = this.state.newUser;
    return(
        <div className='container'>
          <Form name={name} onChange={this.handleChange}/>
          <Rater name={name}/>
          <Buy />
        </div>
    );
  }
};

export default App;
