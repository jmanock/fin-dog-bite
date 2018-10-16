import React from 'react';
import {Link} from 'react-router-dom';

const Rater = (props) =>{
  const {namez} = props.location.state;
  console.log(namez);
  
  const something = (namez === 'steve' ? (<h1>Hi Steve</h1>) : (<h1>Your not Steve</h1>));
  return(
    <div>
      {something}
      <Link to='/'>
        <button className='btn waves-effect waves-light' type='submit' name='action'>Back</button>
      </Link>
    </div>
  );
};

export default Rater;
