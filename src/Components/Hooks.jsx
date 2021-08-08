import React, { useState } from 'react'

function Hooks() {
    const [state, setstate] = useState(0);
    function update()
    {
        setstate(state + 1);
    }
    return (
        <div>
            {state} {<br></br>}
            <button onClick={update}>update</button>
        </div>
    )
}

export default Hooks
