import React, {  } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GridGifItem } from './GridGifItem';

export const GifGrid = ({ category}) => {

    const {data:images, loading} = useFetchGifs(category);
    
    console.log(loading);


    
    // getGifs();
    return (
        <>
            <h3 className="animate__animate animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animate animate__flash">Loading ...</p>}
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
