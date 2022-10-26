import React from "react";
import {Link} from "react-router-dom";

const ArticleOne = () =>{
	return(
	  <div>
		 <p>Article 1 Section 1</p>
		 <p>Article 1 Section 2</p>
		 <p>Article 1 Section 3</p>
		 <Link to="/Article_2">Link to Article-2 Page</Link>
		 <br></br>
		 <Link to="/Article_3">Link to Article-3 Page</Link>
	   </div>
   )
}
export default ArticleOne;