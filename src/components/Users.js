import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import {Link} from "react-router-dom";
import "./Users.css"



function Users() {
	const [users, setUsers] = useState([]);

	if(users.length === 0){
		fetch('https://randomuser.me/api/?results=500')
			.then((response) => response.json())
			.then((result) => {
				console.log(result)
				setUsers(result.results.slice(0, 50))
			})
	}

	const [pageNumber, setPageNumber] = useState(0);

	const usersPerPage = 10;
	const pagesVisited = pageNumber * usersPerPage;
	const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) =>{
		return(
			<li>
				<h3>Name: {user.name.title} {user.name.first} {user.name.last}</h3>
				<h3>Gender: {user.gender}</h3>
				<h3>Phone No: {user.cell}</h3>
				<img src ={user.picture.large} alt=""/>
				<h3>Date Of Birth: {user.dob.age}</h3>
				<h3>Nationality: {user.nat}</h3>
				
			</li>
		)
	})

	const pageCount = Math.ceil(users.length / usersPerPage);

	const changePage = ({selected}) =>{
		setPageNumber(selected)
	}

	
  return (
	<div>
		<div className="link">
			<Link to="/">Link to Home Page</Link>
			<Link to="/Error">Click me</Link>
			<Link to="/AboutUs">Link to AboutUs Page</Link>
		</div>
		{displayUsers}
		<ReactPaginate
			previousLabel = {"Previous"}
			nextLabel = {"Next"}
			pageCount = {pageCount}
			onPageChange = {changePage}
			containerClassName = {"pagination"}
			previousLinkClassName = {"page-num"}
			nextLinkClassName = {"page-num"}
			disabledClassName = {"paginationDisabled"}
			activeClassName = {"paginationActive"}
		/>
	</div>
  )
}

export default Users