import React from "react";

const USAState = (props) => {
  return (
    <path stroke="white" strokeWidth={2} d={props.dimensions} fill={props.fill} data-name={props.state} className={`${props.state} state`} onClick={props.onClickState}>
      <title>{props.stateName}</title>
    </path>
  );
}
export default USAState;
