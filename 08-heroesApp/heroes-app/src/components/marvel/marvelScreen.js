import React from 'react'
// import { heroes } from '../../data/hero';
import { HeroList } from '../heroes/HeroList';


export const MarvelScreen = () => {
    return (
        <>
          <h1>Marvel Screen</h1>  
          <hr/>
          <HeroList publisher='Marvel Comics' />

        </>
    )
}
