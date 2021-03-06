import  { useEffect, useRef, useState } from 'react'

export const useFetch = ( url ) => {

    const [state, setState] = useState({

        data:null,
        loading:true,
        error:null
    });


    const isMounted = useRef(true);
    
    useEffect(() => {
        
        
        return () => {
            isMounted.current = false;
            
        }
    }, [])


    useEffect(() => {

        setState({data:null, loading:true, error:true});

        fetch(url)
            .then(resp => resp.json())
            .then( data => {

                if(isMounted.current){

                    setState({
    
                        loading:false,
                        error:null,
                        data
                    });

                };
            })
            .catch(()=>{

                setState({
                    data:null,
                    loading:null,
                    error:'No se pudo generar la info'
                })
            })
            ;
    },[url])

    return state;

}