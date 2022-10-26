import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Users from "./components/Users";
import ArticleOne from "./nestedComponents/ArticleOne";
import ArticleTwo from "./nestedComponents/ArticleTwo";
import ArticleThree from "./nestedComponents/ArticleThree";
import Error from "./components/Error"
import ErrorSample from "./components/ErrorBoundary";
import {ErrorBoundary} from "react-error-boundary";



function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorSample}>
        <Routes>
          <Route path="/" element = {<Home />} > 
            <Route path=":any" element = {<ArticleOne />} />
            <Route path="Article_2" element = {<ArticleTwo />} />
            <Route path="Article_3" element = {<ArticleThree />} />
          </Route>
          <Route path="/AboutUs" element = {<AboutUs />} />
          <Route path="/Users" element = {<Users />} />
          {/* <Route path="/User" element = {<User />} /> */}
          {/* <Route path="/Users" element = {<Users />} /> */}
          {/* Noticed that ErrorBoundary can not work in a routes, so i took it outside of routes*/}
          <Route path="*" element = {<div><h1>404 PAGE</h1></div>} />
          <Route path="/Error" element = {<Error avatar = "This is good"/>} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;




