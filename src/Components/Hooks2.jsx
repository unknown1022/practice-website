import React, { useEffect, useState } from 'react'

function Hooks2() {
    
    useEffect(()=>{
        document.title = `Chats (${state})`;
    })
    const [state, setstate] = useState(0);
    function update()
    {
        console.log(state);
        setstate(state + 1);
    }
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={update}>click</button>
        </div>
    )
}

export default Hooks2;
