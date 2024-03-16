import React, {useEffect, useState} from 'react'

export default {
    title: 'useEffect'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect')

    }, []);

    return (
        <>
            Hellow, {counter}
            <button onClick={() => setCounter(counter + 1)}></button>
        </>
    )
}
export const SetTimeoutExample = () => {

    let [counter, setCounter] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

    }, []);


    return (
        <>
            Hellow, counter: {counter}
        </>
    )
}
