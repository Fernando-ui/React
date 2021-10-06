import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { marvelScreen } from "../components/marvel/marvelScreen";
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = ( ) =>{

    return (
        <Router>
        <div>   
            <Navbar/>
            
            <Switch>
                <Route exact path='/login' component = { LoginScreen } />
                <Route exact path='/' component = { marvelScreen } />
            </Switch>
        </div>
        </Router>
    );
}