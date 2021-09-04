import React, { useState, useEffect } from 'react'
import { GridGifItem } from './GridGifItem';

export const GifGrid = ({ category}) => {

    const [images, setImages] = useState([]);

    useEffect( ()=> {

        getGifs();
    },[]);


    const getGifs = async()=>{


        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+morty&limit=10&api_key=N8Cf1CkzsWIo20asLCPDWM5B69xLgQzR';
        const resp = await fetch(url);
        // console.log(resp);
        const {data} = await resp.json();
        // console.log(data,'Toda la data');
        const gifs = data.map(img => {

            return{

                id:img.id,
                title:img.title,
                url:img.images.downsized_medium.url,
            }
        })

        console.log(gifs);
        setImages(gifs);
        
    }

    // getGifs();
    return (
        <>
            <h3>{category}</h3>
       
            {
                images.map( (img) => (

                    <GridGifItem 
                    key={img.id}
                    {...img}
                    />
                ))
            }
        
        
        </>
    )
}
