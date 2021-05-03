import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import App from './App';
import HomePage from './HomePage';
import ErrorPage from './Error';


const Routes = () =>{
    <Router>
        <Switch>
            <Route path='/'>
                <App />
            </Route>
            <Route path='/home'>
                <HomePage />
            </Route>
            <Route path="*">
                <ErrorPage />
            </Route>
        </Switch>
    </Router>
}