import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { marvelScreen } from '../components/marvel/marvelScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container mt-2'>
                <Switch>
                    <Route exact path="/marvel" component={ marvelScreen } />
                    <Route exact path="/heroe/:heroeId" component={ HeroScreen } />
                    <Route exact path="/dc/" component={ DcScreen } />

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
} 
