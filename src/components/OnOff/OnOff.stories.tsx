import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'
import {OnOff} from "./OnOff";


export default {
    title: 'OnOff',
    component: OnOff,
}

const callback = action('on or off clicked')

const OnOffM = React.memo(OnOff)

export const OnMode = () => <OnOffM on={true} onChange={callback}/>
export const OffMode = () => <OnOffM on={false} onChange={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <OnOffM on={value} onChange={setValue}/>
}