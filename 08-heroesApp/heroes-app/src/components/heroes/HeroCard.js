import React from 'react'
import { Link } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages'



export const HeroCard = ({ 

    id,
    superhero,
    
    alter_ego,
    first_appearance,
    characters,

 }) => {
    return (
        <div className="card ms-3" style={{ maxWidth:540}}>
            <div className="row no-gutters">
                <div className="col-md-4" style={{marginLeft:150}}>
                    <img src={ heroImages(`${id}.jpg`) } className="card-img" alt={ superhero }/>
                </div>
                <div className="col-md-8">
                    <h5 className="card-title" style={{fontFamily:'Open Sans', fontSize:16, fontWeight:'bold',display:'inline'} }>{superhero}</h5>
                </div>
                <div>
                    
                        {
                            ( alter_ego !== characters)
                            && <p className="card-text"> {characters} </p>

                        }
                    <p className="card-text">
                        <small className="text-muted"> { first_appearance } </small>
                    </p>

                        <Link to={`./hero/${ id }`}>
                        Mas...
                        </Link>

                </div>
            </div>
        </div>
    )
}
