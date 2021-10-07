import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
   
    
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { PrivateRoute } from "./PrivateRoute";
import { DashboardRoutes } from "./DashboardRoutes";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = ( ) =>{

    const { user:{logged} } = useContext(AuthContext);
    console.log(logged);
    


    return (
        <Router>
        <div>   
            
            <Switch>
                <PublicRoute 
                exact
                path='/login'
                component = { LoginScreen } 
                isAuthenticated = { logged }
                
                />

                <PrivateRoute
                path='/'
                component = { DashboardRoutes } 
                isAuthenticated = { logged }
                />
            </Switch>
        </div>
        </Router>
    );
}