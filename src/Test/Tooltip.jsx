import React from 'react';

const Tooltip = (props) => {
  const tooltipStyle={
    display:props.hover ? 'block' : 'none'
  }
  return(
    <React.Fragment>
      <div onMouseOver={props.handleMouseIn} onMouseOut={props.handleMouseOut} className='fa fa-question'></div>
      <div style={tooltipStyle}>{props.tooltip}</div>
    </React.Fragment>
  )
}
export default Tooltip;
