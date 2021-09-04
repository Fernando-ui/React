import React from 'react'

export const GridGifItem = ( {id, title, url} ) => {

    console.log({
        id,
        title,
        url
    });
    return (
        <>
        <img src={url} alt={title}/>
        <p>{title}</p>
        </>
    )
}
