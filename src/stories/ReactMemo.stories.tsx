import React, {useMemo, useState} from "react";

export default {
    title: 'React.memo demo'
}


export const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

type UsersType = { users: Array<string> }

const UsersSecret = (props: UsersType) => {
    return (
        <div>{props.users.map((u, index) => <div key={index}>{u}</div>)}</div>
    )
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Anton', 'Misha', 'ALex'])

    const newArrray = useMemo(() => {
        const newArray = users.filter(user => user.toLowerCase().indexOf('a') > -1);
        return newArray
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => addUser()}>add user</button>
            {counter}
            <Users users={newArrray}/>
        </>
    )
}