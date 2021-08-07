import {useState, useEffect} from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = ( category ) =>{
    const [state, setState] = useState({
        data: [],
        loading: true

    });

    useEffect(() => {
        getGifs( category )
            .then(imgs => {
                
                setState({
                        data: imgs,
                        loading: false
                    })
                    
                }, 1200);


    }, [category])

        //solo se ejecuta cuando el componente es renderizado por primera vez
   /*  useEffect( () =>{
        getGifs(category)
        .then (imgs => setImages(imgs));
    }, [ category ]); */



    return state; 
}