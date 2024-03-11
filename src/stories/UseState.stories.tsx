import React, {useMemo, useState} from "react";


export default {
    title: 'useState demo'
}

function genereteData() {
    console.log('genereate Data')
    return 124342354;
}

export const Example1 = () => {
    console.log('Example 1')

    const initValue = useMemo(genereteData, [])

    const [counter, setCounter] = useState(genereteData)


    return (
        <>
            <button onClick={() => setCounter(state=> state + 1)}>+</button>
            {counter}
        </>
    )
}


