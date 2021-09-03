import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['One puch']);

    // const handleAdd = ()=>{

    //     setCategories([...categories, 'One Piece' ]);

    // }
    return (

        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = { setCategories} />
        <hr/>
        <p>{categories}</p>
        
        <ol>
            {
                categories.map( ( element )=> (<GifGrid 
                    key={element}
                    setCategory ={setCategories}

                    />))
            }
        </ol>

        </>
    )

}

export default GifExpertApp;