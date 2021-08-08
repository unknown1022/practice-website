import React, { useState } from 'react'

function Hooks1() {
    const a = "New";
    const obj = { id: 1, name: "Hritik" } 
    
    // const print = obj.map((person) => {
    //     <p>ID : {person.id} & Name : {person.name}</p>
    // })
    function clear()
    {
        setarrstate(
           {...obj ,name:"Devansh"}
        )
    }
    const [arrstate, setarrstate] = useState(obj)
    return (
        <div>
            {
                
                    <p>ID : {arrstate.id} & Name : {arrstate.name}</p>     

            }
            <button onClick={clear}>Change Name</button>

        </div>
    )
}

export default Hooks1
