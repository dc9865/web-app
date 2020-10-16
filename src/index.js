import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch  } from "react-router-dom";
import App from './App';
import RegisterForm from './Register.js';
import FormReview from './FormReview.js';

const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Register" component={RegisterForm} />
        <Route path="/FormReview" component={FormReview} />
      </Switch>
      </BrowserRouter>,
      rootElement
    );