import React, {useCallback, useMemo, useState} from "react";
import {NewMessagesCounter} from "./ReactMemo.stories";


export default {
    title: 'useMemo'
}

export const DifficultCountingExpample1 = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA

    }, [a]);


    for (let i = 1; i <= b; i++) {
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


const UsersSecret = (props: { users: Array<string> }) => {
    return (
        <div>{props.users.map((u, index) => <div key={index}>{u}</div>)}</div>
    )
}

const Users = React.memo(UsersSecret)

export const HelpsForReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Anton', 'Misha', 'ALex'])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])


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
                addUser()
            }}>add user
            </button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}

export const LikeUseCallBack = () => {
    console.log('Like useCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])


    const memoizedAddBook = useMemo(() => {
        return () => {
            const newBook = [...books, 'Angular ' + new Date().getTime()]
            setBooks(newBook)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        const newBook = [...books, 'Angular ' + new Date().getTime()]
        setBooks(newBook)
    }, [books])

    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            {counter}
            <Book books={books} addBook={memoizedAddBook}/>
        </>
    )
}

type BooksSecret = {
    books: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BooksSecret) => {
    return (
        <div>
            <button onClick={() => props.addBook()}>add book</button>
            {props.books.map((book, index) => <div key={index}>{book}</div>)}
        </div>
    )
}

const Book = React.memo(BooksSecret)
