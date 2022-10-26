import React from 'react';
import {Link} from "react-router-dom";

const ArticleTwo = () =>{
	return(
	  <div>
		 <p>Article 2 Ssection 1</p>
		 <p>Article 2 Ssection 2</p>
		 <p>Article 2 Ssection 3</p>
		 <Link to="/Article_1">Link to Article-1 Page</Link>
		 <br></br>
		 <Link to="/Article_3">Link to Article-3 Page</Link>
	   </div>
   )
}

export default ArticleTwo;