import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GridGifItem } from './GridGifItem';

export const GifGrid = ({ category}) => {

    const [images, setImages] = useState([]);

    useEffect( ()=> {

        getGifs( category ).then( imgs => setImages(imgs))
    },[ category ]);


    
    // getGifs();
    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map( (img) => (

                        <GridGifItem 
                        key={img.id}
                        {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
