import React from "react";
import { Outlet, Link }from "react-router-dom";
import "./Link.css"
// import {Link} from "react-router-dom";

function Home() {
	return (
		<div>
			<div className="link">
				<Link to="/AboutUs">Link to AboutUs Page</Link>
				<Link to="/Error">Click me</Link>
				<Link to="/Users">Go to USERS</Link>
			</div>
			<h1>Welcome to our Home Page</h1>
			<p>Article 1</p>
			<p>Article 2</p>
			<p>Article 3</p>
			<Outlet />
		</div>
	);
}

export default Home;