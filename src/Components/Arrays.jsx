import React from 'react'

function Arrays() {
    const arr = [1,2,3,"abc"]
    // const newarr = arr.map(update);
    // function update(a)
    // {
    //     return a*2;
    // }
    const newarr = arr.map((a) => a*2 );
    return (
        <div>
            {newarr}
        </div>
    )
}

export default Arrays
