import React from 'react';

const AddToField = (buttText, props) =>{
    const field = document.getElementById('inp');
    field.value+=buttText;
}

const buttons = () =>{
   const buttons = ['1','2','3','+','4','5','6','-','7','8','9','*',',','0', '/'];

    return(
        buttons.map((butt)=>{
           return <button key={butt} className="getBorder" onClick={()=>AddToField(butt)}>{butt}</button>
        })
    )
}

export default buttons;