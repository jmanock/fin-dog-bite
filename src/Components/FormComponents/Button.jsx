import React from 'react';

const Button = (props) =>{
  return(
    <button style={props.style} className={props.type} onClick={props.action} value={props.value}>
      <i className={props.className}></i>{props.title}
    </button>
  );
};

export default Button;
