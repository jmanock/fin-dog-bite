import React from 'react';
import Button from './FormComponents/Button';

const Rates = props =>{
  console.log(props);
  const dogList = props.dogs.map((dog) =>
  <tr key={dog.id}>
    <td><Button action={() => {props.editDog(dog)}} type={'btn btn-primary'} className={'fa fa-pencil'} title={'Edit Dog'}></Button></td>
    <td>{dog.state}</td>
    <td>{dog.color}</td>
    <td>{dog.age}</td>
    <td><Button action={() => {props.deleteDog(dog.id)}} type={'btn btn-danger'} className={'fa fa-trash'} title={'Delete Dog'}></Button></td>
  </tr>
);
  return(
    <div className='container'>
      <Button type={'btn btn-success'} title={'Add Dog'} className={'fa fa-plus-circle'} action={props.addDog}></Button>
      <table className='container'>
        <thead>
          <tr>
            <th>Edit Dog</th>
            <th>Dogs State</th>
            <th>Dogs Color</th>
            <th>Dogs Age</th>
            <th>Delete Dog</th>
          </tr>
        </thead>
        <tbody>
          {dogList}
        </tbody>
      </table>
    </div>

  );
};

export default Rates;
