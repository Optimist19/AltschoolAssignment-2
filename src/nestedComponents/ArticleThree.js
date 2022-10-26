import React from "react";
import {Link} from "react-router-dom";

const ArticleThree = () =>{
	return(
	  <div>
		 <p>Article 3 Section 1</p>
		 <p>Article 3 Section 2</p>
		 <p>Article 3 Section 3</p>
		 <Link to="/:any">Link to Article-1</Link>
		 <br></br>
		 <Link to="/Article_2">Link to Article-2 Page</Link>
	   </div>
   )
}

export default ArticleThree;