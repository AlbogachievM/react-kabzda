import React, {useMemo, useState} from "react";
import {NewMessagesCounter} from "./ReactMemo.stories";
import {string} from "prop-types";


export default {
    title: 'useMemo'
}

export const DifficultCountingExpample1 = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA =  1
        for (let i = 1; i <= a; i++){
            let fake = 0
            while (fake < 10000000){
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA

    }, [a]);


    for (let i = 1; i <= b; i++){
        resultB = resultB * i
    }

        return (
            <>
                <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
                <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
                <hr/>
                <div>
                    Result for a: {resultA} <br/>
                    Result for b: {resultB}
                </div>
            </>
        )
}



const UsersSecret = (props: {users: Array<string>}) => {
    return (
        <div>{props.users.map((u, index) => <div key={index}>{u}</div>)}</div>
    )
}

export const Users = React.memo(UsersSecret)

export const HelpsForReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Anton', 'Misha', 'ALex'])

    const addUser = () => {
        const newUsers = [...users, 'Svete ' + new Date().getTime()]
        setUsers(newUsers)
    }


    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>add user
            </button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}