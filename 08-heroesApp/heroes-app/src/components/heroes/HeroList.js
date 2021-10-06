import React from 'react'
import { heroes } from '../../data/hero'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher( publisher );

    return (
        <ul>
            {
                heroes.map( ( hero ) => (

                    <li key={ hero.id }>
                        { hero.superhero}
                    </li>
                ))
            }
        </ul>
    );
};
