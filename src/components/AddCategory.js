import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length>2){
            setCategories( cats => [inputValue, ...cats ]);
            setInputValue('');
        }


        // PONER EL DISABLE
/*         if(inputValue.length === 0){
            
        } */

    }

    return (
        <form>
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_xh83pj1c.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>

            <div className="form-container">
            <p>What can we search for you?</p>

                <input
                    type="text"
                    placeholder="Try something"
                    value= {inputValue}
                    onChange={ handleInputChange }
                />

                <button onClick = {handleSubmit}>Search</button>
            </div>

            

        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}