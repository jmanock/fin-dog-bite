import React,{Component} from 'react';

class DogList extends Component{
  editDog(item){
    this.props.editDog(item);
  }

  render(){
    let dogs = this.props.dogs;
    return(
      <div className='container'>
        <h1>Dog List</h1>
        <ul>
          {dogs.map(item =>(
            <li key={item.id}>
              <span>{item.name} | {item.state} | {item.color} | {item.age}</span>
              <button onClick={this.editDog.bind(this,item)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default DogList;
