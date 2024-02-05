import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'
import {Raiting, RaitingValueType} from "./Raiting";

export default {
    title: 'Raiting',
    component: Raiting,
}


export const EmptyRaiting = () => <Raiting value={0} onClick={x => x}/>
export const EmptyRaiting1 = () => <Raiting value={1} onClick={x => x}/>
export const EmptyRaiting2 = () => <Raiting value={2} onClick={x => x}/>
export const EmptyRaiting3 = () => <Raiting value={3} onClick={x => x}/>
export const EmptyRaiting4 = () => <Raiting value={4} onClick={x => x}/>
export const EmptyRaiting5 = () => <Raiting value={5} onClick={x => x}/>

export const RaitingChanging = () => {
    const [value, setValue] = useState<RaitingValueType>(5)

    return <Raiting value={value} onClick={setValue}/>
}