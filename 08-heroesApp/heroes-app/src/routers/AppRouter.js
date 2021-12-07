import {Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useContext } from "react";

import { AuthContext } from "../auth/AuthContext";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { SearchScreen} from '../components/search/SearchScreen';
export const AppRouter = ( ) =>{

    const { user:{logged} } = useContext(AuthContext);
    console.log(logged);
    


    return (
        <BrowserRouter>
            <h1>Welcome to the jungle</h1>
            <Routes>
                <Route path="/" element={<LoginScreen/>}/>
                <Route path="/marvel" element={<MarvelScreen/>}/>
                <Route path="/dc" element={<DcScreen/>}/>
                <Route path="/search" element={<SearchScreen/>}/>
                <Route path="/login" element={<LoginScreen/>}/>

            </Routes>
        </BrowserRouter>
    );
}