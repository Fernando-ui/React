import React from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ({history}) =>{

    const {heroeId} = useParams();
    const hero = getHeroesById( heroeId );

    if( !hero ){

        return <Redirect to="/" />
    }
    

    const {

        alter_ego,
        characters,
        first_appearance,
        id,
        publisher,
        superhero,
    } = hero;


    const handleReturn = () => {
        
        if( history.length <= 2){

            history.push('./');
        }else{

            history.goBack('./');
        }

    
    }
    
    

    return(
        <div className="row mt-5">
            <div className="col-4"> 
            <img src={`../assets/heroes/${heroeId}.jpg`}
                className="img-thumnail"
                alt={superhero}
                style={{borderRadius:25}}
            />
            </div>

            <div className="col-8">
                <h3 style={{marginLeft:150}}>{superhero}</h3>
                <ul className="list-group list-group-flush"style={{marginLeft:150}}>
                    <li>
                        <b>Alter Ego: {alter_ego}</b>
                    </li>
                    <li>
                        <b>Publisher: {publisher}</b>
                    </li>
                    <li>
                        <b>Fist Appearance: {first_appearance}</b>
                    </li>
                </ul>
                <h5 style={{marginLeft:150}}>Characters</h5>
                <p style={{marginLeft:150}}>{characters}</p>

                <button style={{marginLeft:150}} className="btn btn-primary"
                        onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}