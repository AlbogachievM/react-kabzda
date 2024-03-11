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

    console.log('SetTimeoutExample')

    useEffect(() => {
        setInterval(() => {
            let a = new Date().getSeconds()
            console.log(a)
            setCounter(state => state = a)
        }, 1000)

    }, []);

    let date = {h: new Date().getHours(), m: new Date().getMinutes(), s: counter}


    return (
        <>
            {date.h}:
            {date.m}:
            {date.s}
        </>
    )
}
