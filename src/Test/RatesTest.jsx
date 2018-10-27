import React from 'react';

const RatesTest = (props) =>{
  const dogList = props.dogs.length ? (
    props.dogs.map(dog => {
      return(
        <div className='collection-item' key={dog.id}>
          <span onClick={() =>{props.deleteDog(dog.id)}}>{dog.state} | {dog.age} | {dog.color}</span>
        </div>
      )
    })
  ) : (
    <p className='center'>
      You don't have anything
    </p>
  );
  return(
    <div className='container'>
      {dogList}
    </div>
  )
}
export default RatesTest;
