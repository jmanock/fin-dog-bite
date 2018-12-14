import React,{Fragment} from 'react';

const Tooltip = props =>{
  const tooltipStyle = {
    display:props.hover ? 'block' : 'none'
  }

  return(
    <Fragment>
      <div onMouseOver={props.handleMouseIn} onMouseOut={props.handleMouseOut} className='fa fa-question'></div>
      <div style={tooltipStyle}>{props.tooltip}</div>
    </Fragment>
  );
};

export default Tooltip;
