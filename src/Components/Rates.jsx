import React from 'react';

const Rates = props =>{
  console.log(props.dogs.length);
  const dogList = props.dogs.map((dog) =>
  <tr key={dog.id}>
    <td>{dog.state}</td>
    <td>{dog.color}</td>
    <td>{dog.age}</td>
  </tr>
);
  return(
    <table className='container'>
      <thead>
        <tr>
          <th>Dogs State</th>
          <th>Dogs Color</th>
          <th>Dogs Age</th>
        </tr>
      </thead>
      <tbody>
        {dogList}
      </tbody>
    </table>
  );
};

export default Rates;
