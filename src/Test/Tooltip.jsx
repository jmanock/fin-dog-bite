import React from 'react';

const Tooltip = (props) => {
  const tooltipStyle={
    display:props.hover ? 'block' : 'none'
  }
  return(
    <div>
      <div onMouseOver={props.handleMouseIn} onMouseOut={props.handleMouseOut}>{props.message}</div>
      <div style={tooltipStyle}>{props.tooltip}</div>
    </div>
  )
}
export default Tooltip;
