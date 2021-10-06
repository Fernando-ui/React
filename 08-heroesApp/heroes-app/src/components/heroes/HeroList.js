import React, { useMemo } from 'react'
// import { heroes } from '../../data/hero'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher]);

    // const heroes = getHeroesByPublisher( publisher );

    return (
        <div className="card-columns">
            {
                heroes.map( ( hero ) => (

                    <div key={hero.id}>
                    <HeroCard key={ hero.id }
                        { ...hero }
                        />
                    </div>
                ))
            }
        </div>
    );
};
