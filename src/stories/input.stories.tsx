import React, {ChangeEvent, useRef, useState} from 'react'
import {action} from '@storybook/addon-actions'


export default {
    title: 'input',
    // component: UnControlledOnOff,
}

export const UnControlledInput = () => <input/>
export const TrackValueOfUnControlledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={onChangeHandler}/> - {value} </>
}
export const GetValueOfUnControlledInput = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>
            - {value}
        </>
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    return (
        <input value={parentValue} onChange={event=> setParentValue(event.currentTarget.value)}/>
    )
}


export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState( true)
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>)=> {
        setParentValue(event.currentTarget.checked)
    }
    return (
        <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>( '2')
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>)=> {
        setParentValue(event.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={onChangeHandler}>
            <option>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moscow</option>
            <option value={'3'}>Kiev</option>
        </select>
    )
}
export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>

