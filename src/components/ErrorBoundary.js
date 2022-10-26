import React from "react";
// import {ErrorBoundary} from "react-error-boundary";

// class ErrorBoundary extends React.Component {
// 	constructor(props) {
// 	  super(props);
// 	  this.state = { hasError: false };
// 	}
  
// 	static getDerivedStateFromError(error) {
// 	  // Update state so the next render will show the fallback UI.
// 	  return { hasError: true };
// 	}
  
// 	componentDidCatch(error, errorInfo) {
// 	  // You can also log the error to an error reporting service
// 	//   logErrorToMyService(error, errorInfo);
// 	}
  
// 	render() {
// 	  if (this.state.hasError) {
// 		// You can render any custom fallback UI
// 		return <h1>Something went wrong.</h1>;
// 	  }
  
// 	  return this.props.children; 
// 	}
// }

// export default ErrorBoundary;

/*The above error boundary component is the one that comes with react while the one below is another package installed to be able to apply in our app.
Note, the line two isn't supposed to be called here because we are not wrapping our app here.*/



function ErrorSample({error}){
	return(
		<div role = "alert">
			<h1>Sorry dear, there is an issue here.</h1>
			<h3>This will be fixed soon!!!</h3>
			<pre>{error.message}</pre>
		</div>
	)
}

export default ErrorSample;
  