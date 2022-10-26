import React from "react";
import {Link} from "react-router-dom";
import "./Link.css"

function AboutUs(){
	return(
	   <div>
	   		<div className="link">
		  		<Link to="/">Link to Home Page</Link>
		  		<Link to="/Error">Click me</Link>
		  		<Link to="/Users">Go to USERS</Link>
			</div>
		  <h1>Welcome to our About Us page</h1>
		  <p>Tel: 07034990206</p>
		  <p>Email: altschoolAfrica@gmail.com</p>
		  <p>Website: www.altschoolAfrica.com</p>
		</div>
	)
}
export default AboutUs;