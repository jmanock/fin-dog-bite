import React from 'react';
import {Link} from 'react-router-dom';

// const Rater = (props) =>{
//   const {name,fromState} = props.location.state;
//   console.log(name, fromState);
//
//   const something = (name === 'steve' ? (<h1>Hi Steve</h1>) : (<h1>Your not Steve</h1>));
//   return(
//     <div>
//       {something}
//       <Link to='/'>
//         <button className='btn waves-effect waves-light' type='submit' name='action'>Back</button>
//       </Link>
//     </div>
//   );
// };


const Rater = (props) =>{
  console.log(props.location.state);
  return(
    <div>
      <h1>Rater Page</h1>
      <Link to='/'>
        Back
      </Link>
    </div>
  )
}
export default Rater;
