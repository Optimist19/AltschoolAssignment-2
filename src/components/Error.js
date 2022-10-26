import React from 'react';
import {Link} from "react-router-dom";
import "./Link.css"

function Error(props) {
  return (
	<div>
    <h1>{props.push()}</h1>
    <div className="link">
      <Link to="/">Link to Home Page</Link>
      <Link to="/AboutUs">Link to AboutUs Page</Link>
      <Link to="/Users">Go to USERS</Link>
    </div>
  </div>
  )
}

export default Error