import React from 'react';
import './button.css';

const Button = (props) => {
  return <div className='container-fluid'>
  <button className='a3 float-right card btn'  >{props.name}</button>
  <br />
  <hr style={{ marginTop:30}}/>
         </div>
}
export default Button;
