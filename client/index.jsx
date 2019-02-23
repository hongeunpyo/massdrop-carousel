import React from "react";
import ReactDOM from "react-dom";
import App from "./app"
import {BrowserRouter, Route} from 'react-router-dom';

// function renderToElements(toRender, elements) {
//   for (var i = 0; i < elements.length; i++) {
//     ReactDOM.render(toRender, elements[i]);
//   }
// }

// var app = (<BrowserRouter>
//   <Route path="/:id" component={App}></Route>
// </BrowserRouter>)

ReactDOM.render(
  <BrowserRouter>
    <Route path="/products/:id" component={App}></Route>
  </BrowserRouter>, document.getElementById("carousel"));

// renderToElements(app, document.getElementById("carousel"));