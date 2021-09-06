import React, {  } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
// import { GridGifItem } from './GridGifItem';

export const GifGrid = ({ category}) => {

    const {data, loading} = useFetchGifs();
    console.log(data);
    console.log(loading);
    // const [images, setImages] = useState([]);

    // useEffect( ()=> {

    //     getGifs( category ).then( imgs => setImages(imgs))
    // },[ category ]);


    
    // getGifs();
    return (
        <>
            <h3>{category}</h3>
            {  loading ? 'Cargando...' : 'Fin de carga'  }
            {/* <div className="card-grid">
                {
                    images.map( (img) => (

                        <GridGifItem 
                        key={img.id}
                        {...img}
                        />
                    ))
                }
            </div> */}
        </>
    )
}
