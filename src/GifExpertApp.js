import React, {useState} from 'react';
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

const GifExpertApp = () => {

  
  const [categories, setCategories] = useState( [''] );



    return (
      <>

        
          <h2>GifCity</h2>
          <AddCategory setCategories={setCategories} className="main" />
          
        
        
        

        <br />
        
        <ol>
          {
            categories.map( category => (
              <GifGrid
                key={category}
                category={category}
              />
            ))
          }
        </ol>
      </>
    )
  }
  
  
export default GifExpertApp;