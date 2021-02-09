import React from 'react';

const Clear = () =>{
    const field = document.getElementById('inp');
    field.value = "";
}


const ClearButton = () =>{
    return(
        <button key='clear' className="getBorder clear" onClick={Clear}>C</button>
    )
}

export default ClearButton;