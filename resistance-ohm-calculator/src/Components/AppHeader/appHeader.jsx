import React from 'react'
import './appHeader.css';


var AppHeader = (props)=>{
  return (
  <div>
  <div className="AppHeaderCSS">
    OHM Calculator
    </div>
      <div className={props.error ? "MessageHeader error" : "MessageHeader"}>{props.message}</div>
  </div>
  );
}
export default AppHeader;
