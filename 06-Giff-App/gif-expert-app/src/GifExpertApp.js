import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

   
    const [categories, setCategories] = useState(['One puch','Samurai', 'Dragon Ballz']);

    // const handleAdd = ()=>{

    //     setCategories([...categories, 'One Piece' ]);

    // }
    return (

        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = { setCategories } />
        <hr/>
        
        <ol>
            {
                categories.map( ( element )=> {

                    return <li key = {element}>{element}</li>
                })
            }
        </ol>

        </>
    )

}

export default GifExpertApp;