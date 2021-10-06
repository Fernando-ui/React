import { heroes } from '../data/hero'

export const getHeroesById = ( id ) => {

    return heroes.find( hero => hero.id === id);

}

