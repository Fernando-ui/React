import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    
    } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { firebaseApp } from '../firebase/firebase-config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { loadNotes } from "../helpers/loadNotes";
import { setNotes } from "../actions/notes";


export const AppRouter = () => {
    const auth = getAuth(firebaseApp);
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) =>{
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn( true );
                const notes = await loadNotes(user.uid);
                dispatch( setNotes( notes) )
            }else {
                setIsLoggedIn( false );
            }
            setChecking(false)
        });
    }, [auth,dispatch, setChecking,setIsLoggedIn]);
        
    if(checking){
        return(
            <h1>Wait...</h1>
        )
    }

    return (
      <Router>
        <div>
          <Switch>
            {/* Ruta publica */}
            <Route path="/auth" component={AuthRouter} />
            {/* Ruta privada */}
            <PrivateRoute 
            exact
            path="/"
            component={JournalScreen}
            isAuthenticated={ isLoggedIn }
            />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    );
}