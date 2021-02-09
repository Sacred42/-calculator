import react from 'react';

const Result = () =>{
    const field = document.getElementById('inp');
    const rez = eval(field.value);
    field.value = rez;
}

const equal = () =>{
    return(
            <button key="equall" className="getBorder equall" onClick={Result}>=</button>
    )
}

export default equal;